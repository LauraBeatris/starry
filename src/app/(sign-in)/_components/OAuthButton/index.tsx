'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';
import { GithubIcon } from '@/components/Icons/GitHubIcon';

export function OAuthButton() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <Button onClick={() => setIsRedirecting(true)}>
      <div className="w-full flex space-x-1 items-center justify-center">
        <GithubIcon width={20} height={20} />{' '}
        <p className="font-medium text-yellow-50">
          {isRedirecting ? 'Redirecting...' : 'Continue with GitHub'}
        </p>
      </div>
    </Button>
  );
}
