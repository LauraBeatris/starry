import { kv } from '@vercel/kv';
import { unstable_noStore } from 'next/cache';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function GenerateImageResultPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  unstable_noStore();

  const data = await kv.hgetall<{
    generatedImageUrl: string;
    uploadedImageUrl: string;
  }>(params.id);

  if (!data) {
    notFound();
  }

  return (
    <Image
      className="mt-4"
      width={500}
      height={500}
      alt="Generated image"
      src={data.uploadedImageUrl}
    />
  );
}
