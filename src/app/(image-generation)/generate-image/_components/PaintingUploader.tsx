"use client";

import { UploadDropzone, UploadDropzoneConfig } from '@bytescale/upload-widget-react';
import Image from 'next/image';

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

export function PaintingUploader() {
  return (
    <div className="flex justify-center items-center relative mt-6 h-[600px] w-[450px]">
      <Image
        className="z-20"
        src="/painting-frame.png"
        alt="Portrait Frame"
        fill
      />

      <div className="absolute z-50">
        <UploadDropzone options={options}
          onUpdate={({ uploadedFiles }) => console.log(uploadedFiles.map(x => x.fileUrl).join("\n"))}
          onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
          width="600px"
          height="375px" 
        />
      </div>

      <Image
        className="z-10 blur-lg"
        src="/starry-night.webp"
        alt="Generated Picture Example"
        fill
      />
    </div>
  );
}
