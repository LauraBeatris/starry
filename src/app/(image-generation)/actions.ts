'use server';

import { kv } from '@vercel/kv';
import * as E from 'fp-ts/lib/Either';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Replicate from 'replicate';
import * as z from 'zod';

import { getUser } from '@/app/lib/auth';
import { nanoid } from '@/app/lib/nanoid';
import { performRateLimitByUser } from '@/app/lib/rateLimiter';
import { REPLICATE_WEBHOOK_URL } from '@/app/lib/replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const GenerateImageFormSchema = z.object({
  prompt: z.string({
    invalid_type_error: 'Please enter a prompt.',
  }),
});

export type FormState = {
  errors?: {
    prompt?: string[];
  };
  message?: string | null;
};

export async function generateImage(_prevState: FormState, formData: FormData) {
  const parsedFormData = GenerateImageFormSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!parsedFormData.success) {
    return {
      errors: parsedFormData.error.flatten().fieldErrors,
      message: 'Invalid form data. Make sure to send a prompt value.',
    };
  }

  const getUserResult = await getUser();

  if (E.isLeft(getUserResult)) {
    redirect('/');
  }

  const { user } = getUserResult.right;
  const rateLimitResult = await performRateLimitByUser(user);

  if (E.isLeft(rateLimitResult)) {
    return {
      message: rateLimitResult.left,
    };
  }

  const id = nanoid();

  const { prompt } = parsedFormData.data;

  console.info('Webhook URL', REPLICATE_WEBHOOK_URL)

  await Promise.all([
    kv.hset(id, {
      prompt,
    }),
    replicate.predictions.create({
      version:
        'ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4',
      input: {
        prompt: `Use a background as a starry night, but with a ${prompt}`,
        width: 768,
        height: 768,
        scheduler: 'K_EULER',
        num_outputs: 1,
        guidance_scale: 7.5,
        num_inference_steps: 50,
      },
      webhook: `${REPLICATE_WEBHOOK_URL}?id=${id}&secret=${process.env.REPLICATE_WEBHOOK_SECRET}`,
      webhook_events_filter: ['completed'],
    }),
  ]);

  revalidatePath('/generate-image');
  redirect(`/generate-image/result/${id}`);
}
