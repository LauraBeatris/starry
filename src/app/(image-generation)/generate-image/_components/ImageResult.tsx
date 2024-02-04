'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { LoadingCircleIcon } from '@/app/ui/Icons/LoadingIcon';

interface ImageResultProps {
  generatedImageUrl?: string;
}

const intervalMilliseconds = 1000;

export function ImageResult({ generatedImageUrl }: ImageResultProps) {
  const router = useRouter();

  /**
   * Internal to keep refreshing/pooling the page until the image is
   * stored on Vercel blob storage
   */
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!generatedImageUrl) {
      interval = setInterval(() => {
        router.refresh();
      }, intervalMilliseconds);
    }

    return () => clearInterval(interval);
  }, [generatedImageUrl, router]);

  return (
    <div className="group relative relative mx-auto mx-auto flex aspect-square w-full w-full max-w-xl flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl rounded-lg border border-8 border-white bg-white p-4">
      {generatedImageUrl ? (
        <Image
          className="rounded-lg"
          alt="Generated image"
          src={generatedImageUrl}
          fill
          unoptimized
        />
      ) : (
        <>
          <LoadingCircleIcon />
          <p className="text-md text-center text-gray-500">
            Your image is currently being created. <br /> This usually takes
            about 20 seconds.{' '}
          </p>
        </>
      )}
    </div>
  );
}
