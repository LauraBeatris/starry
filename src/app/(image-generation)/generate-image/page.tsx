import { Metadata } from 'next';

import { GenerateImageForm } from './_components/GenerateImageForm';

export const metadata: Metadata = {
  title: 'Generate Image',
};

export default async function GenerateImagePage() {
  return <GenerateImageForm />;
}
