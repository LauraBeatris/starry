import Link from 'next/link';

import { OAuthButton } from './_components/OAuthButton';
import { PictureFrame } from '@/app/(sign-in)/_components/PictureFrame';
import { getGitHubOAuthAuthorizationUrl } from '@/app/auth';
import TwitterIcon from '@/components/Icons/TwitterIcon';
export default function Home() {
  const authorizationUrl = getGitHubOAuthAuthorizationUrl();

  return (
    <>
      <div className="mt-6 mb-5">
        <Link href={authorizationUrl}>
          <OAuthButton />
        </Link>
      </div>

      <PictureFrame />
    </>
  );
}
