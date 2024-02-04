import Link from 'next/link';

import { AuthButton } from './_components/AuthButton';
import { ImageResult } from '../(image-generation)/generate-image/_components/ImageResult';
import { getAuthorizationUrl } from '@/app/lib/auth';

export default function HomePage() {
  return (
    <>
      <AuthorizationLink />

      <ImageResult generatedImageUrl="https://jxgoqlyxc3jqoq07.public.blob.vercel-storage.com/kzjqciV-JoczpcOdey08DY2lCfBYMviECds1Mm.png" />
    </>
  );
}

async function AuthorizationLink() {
  const authorizationUrl = await getAuthorizationUrl();

  return (
    <div className="relative z-30 mb-5 mt-6">
      <Link href={authorizationUrl}>
        <AuthButton />
      </Link>
    </div>
  );
}
