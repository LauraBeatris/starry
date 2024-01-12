'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';
import { SparkleIcon } from '@/components/Icons/SparkleIcon';

export function AuthButton() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <Button onClick={() => setIsRedirecting(true)}>
      <div className="flex w-full items-center justify-center space-x-1">
        <SparkleIcon />
        <p className="md:tex-lg font-medium text-white">
          {isRedirecting ? 'Redirecting...' : 'Login to start'}
        </p>
        <SparkleIcon />
      </div>
    </Button>
  );
}
