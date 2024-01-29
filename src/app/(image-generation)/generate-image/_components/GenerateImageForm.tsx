import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';

import paintingFrame from '../../../../../public/painting-frame.png';
import { uploadImage } from '../../actions';

export function GenerateImageForm() {
  return (
    <form
      action={uploadImage}
      className="relative z-50 mt-5 flex flex-col items-center justify-center"
    >
      <div className="absolute mx-auto flex flex-col self-center">
        <div>
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" required />
        </div>

        <button>Upload</button>
      </div>

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
    </form>
  );
}
