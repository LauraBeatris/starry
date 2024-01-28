"use client"

import { UploadDropzone, UploadDropzoneConfig } from '@bytescale/upload-widget-react';
import { PropsWithChildren } from 'react';

import { interFont } from '@/app/lib/fonts';

const options = {
  apiKey: "free", 
  maxFileCount: 1,
  showFinishButton: true,
  styles: {
    "fontFamilies": {
      "base": interFont.style.fontFamily,
    },
    colors: {
      "primary": "#F0003C",
      "shade400": "#FFF",
    }
  }
} satisfies UploadDropzoneConfig;

export function PaintingUploader({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      {children}

      <div className="absolute z-50">
        <UploadDropzone options={options}
          onUpdate={({ uploadedFiles }) => console.log(uploadedFiles.map(x => x.fileUrl).join("\n"))}
          onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
          width="600px"
          height="375px" 
        />
      </div>
    </div>
  );
}
