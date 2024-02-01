'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

import { LoadingCircleIcon } from '@/app/ui/Icons/LoadingIcon';

interface ImageResultProps {
  generatedImageUrl?: string;
  uploadedImageUrl?: string;
}

const intervalMilliseconds = 1000;

export function ImageResult({
  generatedImageUrl,
  uploadedImageUrl,
}: ImageResultProps) {
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
  }, [generatedImageUrl, uploadedImageUrl, router]);

  const hasLoadedImages = generatedImageUrl && uploadedImageUrl;

  if (!hasLoadedImages) {
    return (
      <div className="z-50 mx-auto pt-5">
        <LoadingCircleIcon />
      </div>
    );
  }

  return (
    <div className="z-50 mx-auto">
      <CompareSlider
        generated={generatedImageUrl}
        original={uploadedImageUrl}
      />
    </div>
  );
}

interface CompareSliderProps {
  original: string;
  generated: string;
}

function CompareSlider({ original, generated }: CompareSliderProps) {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="original photo" />}
      itemTwo={<ReactCompareSliderImage src={generated} alt="restored photo" />}
      portrait
      position={0}
      className="mt-5 flex w-[475px]"
    />
  );
}
