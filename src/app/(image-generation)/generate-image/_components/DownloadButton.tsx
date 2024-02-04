'use client';

import analytics from '@vercel/analytics';
import { useState } from 'react';

import { DownloadIcon } from '@/app/ui/Icons/DownloadIcon';
import { LoadingCircleIcon } from '@/app/ui/Icons/LoadingIcon';

interface DownloadButtonProps {
  generatedImageUrl: string;
  imageId: string;
}

export function DownloadButton({
  generatedImageUrl,
  imageId,
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  function downloadImage() {
    setIsDownloading(true);
    analytics.track('Download image', {
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
        let blobUrl = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.download = `${imageId || 'generated-image'}.png`;
        a.href = blobUrl;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((e) => console.error(e))
      .finally(() => setIsDownloading(false));
  }

  return (
    <button
      disabled={!generatedImageUrl}
      onClick={downloadImage}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:scale-105 active:scale-95"
    >
      {isDownloading ? (
        <LoadingCircleIcon />
      ) : (
        <DownloadIcon className="h-4 w-4 text-gray-600" />
      )}
    </button>
  );
}
