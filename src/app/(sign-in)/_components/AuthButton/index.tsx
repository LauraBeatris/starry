'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';

export function AuthButton() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <Button onClick={() => setIsRedirecting(true)}>
      <div className="w-full flex space-x-1 items-center justify-center">
        <p className="font-medium text-yellow-50">
          {isRedirecting ? 'Redirecting...' : 'Sign in to continue'}
        </p>
      </div>
    </Button>
  );
}
