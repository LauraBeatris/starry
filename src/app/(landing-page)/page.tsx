import { kv } from '@vercel/kv';
import Link from 'next/link';

import { AuthButton } from './_components/AuthButton';
import { ImageResult } from '../(image-generation)/generate-image/_components/ImageResult';
import { getAuthorizationUrl } from '@/app/lib/auth';

export default function HomePage() {
  return (
    <>
      <AuthorizationLink />
      <div className="w-full px-4">
        <ImageResult generatedImageUrl="https://jxgoqlyxc3jqoq07.public.blob.vercel-storage.com/kzjqciV-JoczpcOdey08DY2lCfBYMviECds1Mm.png" />
      </div>
      <GeneratedCount />
    </>
  );
}

async function GeneratedCount() {
  const count = await kv.dbsize();
  return (
    <p className="z-30 mt-4 text-center text-sm text-white">
      Over {count} snapshots of creativity and memories, and still counting!
    </p>
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
