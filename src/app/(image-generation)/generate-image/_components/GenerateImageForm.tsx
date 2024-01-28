import Image from 'next/image';

import { PaintingUploader } from './PaintingUploader';
import paintingFrame from '../../../../../public/painting-frame.png';

export function GenerateImageForm() {
  return (
    <form className="mt-5 flex flex-col items-center justify-center space-x-2 px-2 shadow-md">
      <PaintingUploader apiKey={process.env.BYTESCALE_API_KEY}>
        <Image
          src={paintingFrame}
          alt="Painting frame"
          placeholder="blur"
          width={500}
          height={600}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </PaintingUploader>
    </form>
  );
}
