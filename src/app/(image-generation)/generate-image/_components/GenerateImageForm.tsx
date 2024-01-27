'use client';

import { PaintingPatternPicker, Popover } from './PaintingPatternPicker';

export function GenerateImageForm() {
  return (
    <form className="z-30 mt-6 space-x-2 rounded-lg border border-gray-200 bg-yellow-50 px-1 py-2 shadow-md sm:px-2 sm:py-4">
      <PaintingPatternPicker />
    </form>
  );
}
