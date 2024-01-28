import Image from 'next/image';

import { PaintingUploader } from './PaintingUploader';
import paintingFrame from '../../../../../public/painting-frame.png';

export function GenerateImageForm() {
  return (
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
  );
}
