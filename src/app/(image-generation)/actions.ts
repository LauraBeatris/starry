'use server';

import { put } from '@vercel/blob';
import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';
import Replicate from 'replicate';
import * as z from 'zod';

import { getUser } from '@/app/lib/auth';
import { nanoid } from '@/app/lib/nanoid';
import { performRateLimitByUser } from '@/app/lib/rateLimiter';
import { REPLICATE_WEBHOOK_URL } from '@/app/lib/replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function generateImage(form: FormData) {
  // TODO - Validate form data;
  // TODO - Call Replicate API

  const { user } = await getUser();
  if (!user) {
    throw new Error('User not found');
  }

  performRateLimitByUser(user);

  const id = nanoid();
  const image = 'example';

  await Promise.all([
    kv.hset(id, {
      // TODO - Pass real blob URL
      image,
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

  console.log('Generating image');
}

const UploadImageFormSchema = z.object({
  image: z.object({
    name: z.string(),
    type: z.string(),
    size: z.number(),
    lastModified: z.number(),
  }),
});

export async function uploadImage(formData: FormData) {
  const imageFile = formData.get('image') as File;

  // TODO - Handle upload error with `useFormState`
  const blob = await put(imageFile.name, imageFile, {
    access: 'public',
  });

  revalidatePath('/generate-image');

  return blob;
}
