import { kv } from '@vercel/kv';
import assert from 'assert';
import * as E from 'fp-ts/lib/Either';
import { Metadata } from 'next';

import { GenerateImageForm } from './_components/GenerateImageForm';
import { getUser } from '@/app/lib/auth';

export const metadata: Metadata = {
  title: 'Generate image with a prompt',
};

async function getRemainingGenerations() {
  const userResult = await getUser();
  assert(E.isRight(userResult));

  const identifier = userResult.right.user.email;
  const windowDuration = 24 * 60 * 60 * 1000;
  const bucket = Math.floor(Date.now() / windowDuration);

  const usedGenerations =
    (await kv?.get(`@upstash/ratelimit:${identifier!}:${bucket}`)) || 0;

  const resetDate = new Date();
  resetDate.setHours(19, 0, 0, 0);
  const diff = Math.abs(resetDate.getTime() - new Date().getTime());
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor(diff / 1000 / 60) - hours * 60;
  const remainingGenerations = 5 - Number(usedGenerations);

  return {
    remainingGenerations: Math.max(remainingGenerations, 0),
    hours,
    minutes,
  };
}

export default async function GenerateImagePage() {
  const { hours, minutes, remainingGenerations } =
    await getRemainingGenerations();

  return (
    <>
      <GenerateImageForm
        remainingGenerations={remainingGenerations}
        imagePlaceholder="https://xd2kcvzsdpeyx1gu.public.blob.vercel-storage.com/KDSkFdf-1vP84nn4Lm3Tp9J6jfRtMnOKNPlBdm.png"
      />
      <p className="z-30 mt-2 text-center font-light text-white">
        You have{' '}
        <span className="font-semibold">
          {remainingGenerations} generations
        </span>{' '}
        left today. Your generation
        {Number(remainingGenerations) > 1 ? 's' : ''} will renew in{' '}
        <span className="font-semibold">
          {hours} hours and {minutes} minutes.
        </span>
      </p>
    </>
  );
}
