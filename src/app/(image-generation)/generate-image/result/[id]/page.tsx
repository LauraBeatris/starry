import { kv } from '@vercel/kv';
import { unstable_noStore } from 'next/cache';
import { notFound } from 'next/navigation';

import { ImageResult } from '../../_components/ImageResult';

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
  }>(params.id);

  if (!data) {
    notFound();
  }

  return <ImageResult generatedImageUrl={data.generatedImageUrl} />;
}
