import { Button } from '@/components/Button';
import { GithubIcon } from '@/components/Icons/GitHubIcon';

export function GitHubOAuthButton() {
  async function signIn() {
    'use server';
  }

  return (
    <Button onClick={signIn}>
      <div className="w-full flex space-x-1 items-center">
        <GithubIcon width={20} height={20} />{' '}
        <p className="font-medium text-yellow-50">Continue with GitHub</p>
      </div>
    </Button>
  );
}
