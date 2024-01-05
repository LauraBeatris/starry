import Link from 'next/link';

import { AuthButton } from './_components/AuthButton';
import { getAuthorizationUrl } from '@/app/auth';

export default function Home() {
  const authorizationUrl = getAuthorizationUrl();

  return (
    <>
      <div className="relative mt-6 mb-5 z-10">
        <Link href={authorizationUrl}>
          <AuthButton />
        </Link>
      </div>
    </>
  );
}
