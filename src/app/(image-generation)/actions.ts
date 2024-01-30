'use server';

import { put } from '@vercel/blob';
import { kv } from '@vercel/kv';
import * as E from 'fp-ts/lib/Either';
import { redirect } from 'next/navigation'
import Replicate from 'replicate';

import { getUser } from '@/app/lib/auth';
import { nanoid } from '@/app/lib/nanoid';
import { performRateLimitByUser } from '@/app/lib/rateLimiter';
import { REPLICATE_WEBHOOK_URL } from '@/app/lib/replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function uploadImage(imageFile: File){
  try {
    const { url } = await put(imageFile.name, imageFile, {
      access: 'public',
    });

    return E.right({ url })
  } catch (error){
    return E.left("Error while uploading image");
  }
}

export async function uploadAndGenerateImage(formData: FormData) {
  const getUserResult = await getUser();

  if (E.isLeft(getUserResult)){
    return redirect("/");
  }

  const { user } = getUserResult.right;
  const rateLimitResult = await performRateLimitByUser(user);

  if (E.isLeft(rateLimitResult)){
    // TODO - Apply error handling
    throw new Error(rateLimitResult.left)
  }

  const image = formData.get('image') as File;
  const uploadImageResult = await uploadImage(image)

  if (E.isLeft(uploadImageResult)){
    // TODO - Apply error handling
    throw new Error(uploadImageResult.left)
  }

  const { url: uploadImageUrl } = uploadImageResult.right;
  const id = nanoid();

  await Promise.all([
    kv.hset(id, {
      uploadImageUrl,
    }),
    replicate.predictions.create({
      version:
        '30c1d0b916a6f8efce20493f5d61ee27491ab2a60437c13c588468b9810ec23f',
      input: {
        prompt:
          "Convert this picture to the same style and colors as the Van Gogh's Starry night art",
        image,
      },
      webhook: `${REPLICATE_WEBHOOK_URL}?id=${id}&secret=${process.env.REPLICATE_WEBHOOK_SECRET}`,
      webhook_events_filter: ['completed'],
    }),
  ]);
}
