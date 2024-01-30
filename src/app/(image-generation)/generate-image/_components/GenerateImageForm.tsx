"use client";

import Image from 'next/image';
import { useRouter } from "next/navigation";

import { SubmitButton } from './SubmitButton';
import paintingFrame from '../../../../../public/painting-frame.png';
import { uploadAndGenerateImage } from '../../actions';

export function GenerateImageForm() {
  const router = useRouter();

  return (
    <form
      action={(data) => {
        uploadAndGenerateImage(data).then((id) => {
          router.push(`/generate-image/result/${id}`);
        });
      }}
      className="relative z-50 mt-5 flex flex-col items-center justify-center"
    >
      <div className="absolute mx-auto flex flex-col items-center justify-center gap-5 self-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <label className="text-2xl font-bold text-white" htmlFor="image">
            Upload a picture
          </label>
          <input
            className="w-[200px]"
            type="file"
            id="image"
            name="image"
            required
          />
        </div>

        <div>
          <SubmitButton />
        </div>
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
