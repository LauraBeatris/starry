'use client';

import { PaintingUploader } from './PaintingUploader';

export function GenerateImageForm() {
  return (
    <form className="z-30 flex flex-col items-center justify-center space-x-2 shadow-md">
      <PaintingUploader />
    </form>
  );
}
