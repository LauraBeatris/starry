'use client';

import {
  UploadButton,
  UploadDropzoneConfig,
} from '@bytescale/upload-widget-react';
import { ReactNode } from 'react';

import { playfairFont } from '@/app/lib/fonts';
import { Button } from '@/app/ui/Button';
import { UploadIcon } from '@/app/ui/Icons/UploadIcon';

interface PaintingUploaderProps {
  apiKey: string;
  children: ReactNode;
}

export function PaintingUploader({ apiKey, children }: PaintingUploaderProps) {
  const options = {
    apiKey,
    maxFileCount: 1,
    showFinishButton: true,
    styles: {
      fontFamilies: {
        base: playfairFont.style.fontFamily,
      },
      colors: {
        primary: '#F0003C',
        shade400: '#000',
      },
    },
  } satisfies UploadDropzoneConfig;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {children}

      <div className="absolute z-50">
        <UploadButton
          options={options}
          onComplete={(files) => alert(files.map((x) => x.fileUrl).join('\n'))}
        >
          {({ onClick }) => (
            <Button onClick={onClick}>
              <div className="flex items-center gap-1">
                <UploadIcon />
                <p className="font-display text-xl font-bold">
                  Upload an image
                </p>
              </div>
            </Button>
          )}
        </UploadButton>
      </div>
    </div>
  );
}
