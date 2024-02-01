'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { LoadingCircleIcon } from '@/app/ui/Icons/LoadingIcon';

interface ImageResultProps {
  image?: string;
}

const intervalMilliseconds = 1000;

export function ImageResult({ image }: ImageResultProps) {
  const router = useRouter();
  const params = useParams();

  /**
   * Internal to keep refreshing/pooling the page until the image is
   * stored on Vercel blob storage
   */
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!image) {
      interval = setInterval(() => {
        router.refresh();
      }, intervalMilliseconds);
    }

    return () => clearInterval(interval);
  }, [image, router]);

  return (
    <div className="z-50 mx-auto pt-5">
      {image ? (
        <Image
          alt="output image"
          src={image}
          width={1280}
          height={1280}
          className="h-full object-cover"
          unoptimized
        />
      ) : (
        <LoadingCircleIcon />
      )}
    </div>
  );
}
