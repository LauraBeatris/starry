'use client';

import analytics from '@vercel/analytics';
import { useState } from 'react';

import { CopyIcon } from '@/app/ui/Icons/CopyIcon';
import { LoadingCircleIcon } from '@/app/ui/Icons/LoadingIcon';

interface CopyButtonProps {
  generatedImageUrl: string;
  imageId: string;
}

export function CopyButton({ generatedImageUrl, imageId }: CopyButtonProps) {
  const [isCopying, setIsCopying] = useState(false);

  function copyImage() {
    setIsCopying(true);

    analytics.track('Copy image', {
      generatedImageUrl,
      page: `/generate-image/result/${imageId}`,
    });

    fetch(generatedImageUrl, {
      headers: new Headers({
        Origin: location.origin,
      }),
      mode: 'cors',
    })
      .then((response) => response.blob())
      .then((blob) => {
        navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob,
          }),
        ]);
      })
      .catch((e) => console.error(e))
      .finally(() => setIsCopying(false));
  }

  return (
    <button
      onClick={copyImage}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:scale-105 active:scale-95"
    >
      {isCopying ? (
        <LoadingCircleIcon />
      ) : (
        <CopyIcon className="h-4 w-4 text-gray-600" />
      )}
    </button>
  );
}
