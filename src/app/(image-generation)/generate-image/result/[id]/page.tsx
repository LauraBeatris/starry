import { kv } from '@vercel/kv';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CopyButton } from '../../_components/CopyButton';
import { DownloadButton } from '../../_components/DownloadButton';
import { ImageResult } from '../../_components/ImageResult';

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata | undefined> {
  const data = await kv.hgetall<{ prompt: string; generatedImageUrl?: string }>(
    params.id,
  );
  if (!data) {
    return;
  }

  const title = `${data.prompt}`;
  const description = `An image generated based on the prompt: ${data.prompt}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@lauradotjs',
    },
  };
}

export default async function GenerateImageResultPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const data = await kv.hgetall<{
    generatedImageUrl: string;
  }>(params.id);

  if (!data) {
    notFound();
  }

  const { generatedImageUrl } = data;

  return (
    <div className="relative w-full p-4">
      <div className="relative w-full">
        <div className="absolute right-5 top-5 z-50 flex space-x-2">
          <CopyButton
            imageId={params.id}
            generatedImageUrl={generatedImageUrl}
          />
          <DownloadButton
            imageId={params.id}
            generatedImageUrl={generatedImageUrl}
          />
        </div>
        <ImageResult generatedImageUrl={data.generatedImageUrl} />
      </div>
    </div>
  );
}
