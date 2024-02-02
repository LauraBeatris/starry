'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

import paintingFrame from '../../../../../public/painting-frame.png';
import { uploadAndGenerateImage } from '../../actions';
import { Button } from '@/app/ui/Button';
import { LoadingCircleIcon } from '@/app/ui/Icons/LoadingIcon';
import { SparkleIcon } from '@/app/ui/Icons/SparkleIcon';
import { UploadIcon } from '@/app/ui/Icons/UploadIcon';

export function GenerateImageForm() {
  const router = useRouter();
  const [file, setFile] = useState<File>();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setFile(file);
  }

  return (
    <form
      action={(data) => {
        uploadAndGenerateImage(data).then((id) => {
          router.push(`/generate-image/result/${id}`);
        });
      }}
      className="z-50 mt-5 flex flex-col items-center justify-center rounded-lg bg-white shadow-md"
    >
      {file ? (
        <>
          <div className="flex flex-col items-center justify-center p-10">
            <UploadIcon />

            <h2 className="mt-2 text-xl font-medium text-gray-700">
              Image uploaded!
            </h2>

            <p className="mt-2 text-center font-light text-gray-600">
              <button
                type="submit"
                className="font-bold underline	underline-offset-2"
              >
                Click here
              </button>{' '}
              to generate your art <br /> or{' '}
              <button
                className="font-bold underline	underline-offset-2"
                onClick={() => setFile(undefined)}
              >
                go back to upload again
              </button>
            </p>
          </div>
        </>
      ) : (
        <>
          <label
            htmlFor="image"
            className="flex cursor-pointer flex-col items-center justify-center  p-10"
          >
            <UploadIcon />

            <h2 className="mt-2 text-xl font-medium text-gray-700">
              Drag and upload
            </h2>

            <p className="mt-2 font-light text-gray-600">
              Attach a file to generate a painting
            </p>
          </label>

          <input
            id="image"
            name="image"
            required
            onChange={handleFileChange}
            className="hidden h-full w-full"
            accept="image/*"
          />
        </>
      )}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      <div className="flex h-[20px] w-[110px] items-center justify-center gap-1">
        {pending ? (
          <LoadingCircleIcon />
        ) : (
          <>
            <SparkleIcon />
            <span>Generate</span>
            <SparkleIcon />
          </>
        )}
      </div>
    </Button>
  );
}
