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

  if (!generatedImageUrl) {
    return (
      <div className="z-50 mx-auto pt-5">
        <LoadingCircleIcon />
      </div>
    );
  }

  return (
    <div className="z-50 mx-4 mx-auto mt-5 rounded-lg bg-white p-4 lg:mx-0">
      <Image
        className="rounded-lg"
        alt="Generated image"
        src={generatedImageUrl}
        width={500}
        height={500}
      />
    </div>
  );
}
