'use client';

import { useState } from 'react';

import { Button } from '@/app/ui/Button';
import { SparkleIcon } from '@/app/ui/Icons/SparkleIcon';

export function AuthButton() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <Button onClick={() => setIsRedirecting(true)}>
      <div className="flex w-full items-center justify-center space-x-1">
        <SparkleIcon />
        <p className="font-medium text-white md:text-xl">
          {isRedirecting ? 'Redirecting...' : 'Login to start'}
        </p>
        <SparkleIcon />
      </div>
    </Button>
  );
}
