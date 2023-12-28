import Link from 'next/link';

import { getGitHubOAuthAuthorizationUrl } from '../../getAuthorizationUrl';
import { Button } from '@/components/Button';
import { GithubIcon } from '@/components/Icons/GitHubIcon';

export function GitHubOAuthButton() {
  const authorizationUrl = getGitHubOAuthAuthorizationUrl()

  return (
    <Link href={authorizationUrl}>
      <Button>
        <div className="w-full flex space-x-1 items-center">
          <GithubIcon width={20} height={20} />{' '}
          <p className="font-medium text-yellow-50">Continue with GitHub</p>
        </div>
      </Button>
    </Link>
  );
}
