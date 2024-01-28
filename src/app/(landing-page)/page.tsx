import Link from 'next/link';

import { AuthButton } from './_components/AuthButton';
import { getAuthorizationUrl } from '@/app/lib/auth';
import { SparkleIcon } from '@/app/ui/Icons/SparkleIcon';

export default function HomePage() {
  return (
    <>
      <AuthorizationLink />
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
