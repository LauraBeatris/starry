import { Metadata } from 'next';

import { GenerateImageForm } from './_components/GenerateImageForm';

export const metadata: Metadata = {
  title: 'Generate Image',
};

export default async function GenerateImagePage() {
  return (
    <GenerateImageForm imagePlaceholder="https://xd2kcvzsdpeyx1gu.public.blob.vercel-storage.com/KDSkFdf-1vP84nn4Lm3Tp9J6jfRtMnOKNPlBdm.png" />
  );
}
