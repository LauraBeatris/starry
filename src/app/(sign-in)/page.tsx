import Link from 'next/link';

import { AuthButton } from './_components/AuthButton';
import { PictureFrame } from '@/app/(sign-in)/_components/PictureFrame';
import { getAuthorizationUrl } from '@/app/auth';

export default function Home() {
  const authorizationUrl = getAuthorizationUrl();

  return (
    <>
      <div className="mt-6 mb-5">
        <Link href={authorizationUrl}>
          <AuthButton />
        </Link>
      </div>

      <PictureFrame />
    </>
  );
}
