import Image from 'next/image';

import { PaintingUploader } from './PaintingUploader';
import paintingFrame from "../../../../../public/painting-frame.png";

export function GenerateImageForm() {
  return (
    <form className="px-2 mt-5 flex flex-col items-center justify-center space-x-2 shadow-md">
      <PaintingUploader>
        <Image
          src={paintingFrame}
          alt="Painting frame"
          placeholder="blur"
          width={500}
          height={600}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}     
        />
      </PaintingUploader>
    </form>
  );
}
