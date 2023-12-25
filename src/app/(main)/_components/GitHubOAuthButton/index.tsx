import { GitHubLogoIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/Button';

export function GitHubOAuthButton() {
  return (
    <Button>
      <div className="w-full flex space-x-1 items-center">
        <GitHubLogoIcon width={20} height={20} /> <p className="font-medium text-yellow-50">Continue with GitHub</p>
      </div>
    </Button>
  );
}
