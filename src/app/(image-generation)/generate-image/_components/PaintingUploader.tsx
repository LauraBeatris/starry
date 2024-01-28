'use client';

import {
  UploadButton,
  UploadDropzoneConfig,
} from '@bytescale/upload-widget-react';
import { ReactNode, useRef } from 'react';

import { generateImage } from '@/app/(image-generation)/actions';
import { playfairFont } from '@/app/lib/fonts';
import { Button } from '@/app/ui/Button';
import { UploadIcon } from '@/app/ui/Icons/UploadIcon';

interface PaintingUploaderProps {
  apiKey: string;
  children: ReactNode;
}

export function PaintingUploader({ apiKey, children }: PaintingUploaderProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const onComplete = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };

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
    <form
      action={generateImage}
      className="mt-5 flex flex-col items-center justify-center space-x-2 px-2 shadow-md"
    >
      <div className="relative flex h-full w-full items-center justify-center">
        {children}

        <div className="absolute z-50">
          <UploadButton options={options} onComplete={onComplete}>
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
    </form>
  );
}
