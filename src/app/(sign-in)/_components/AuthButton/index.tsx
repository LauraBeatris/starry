'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';
import { SparkleIcon } from '@/components/Icons/SparkleIcon';

export function AuthButton() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <Button onClick={() => setIsRedirecting(true)}>
      <div className="w-full flex space-x-1 items-center justify-center">
        <SparkleIcon />
        <p className="font-medium text-white md:tex-lg">
          {isRedirecting ? 'Redirecting...' : 'Login to start'}
        </p>
        <SparkleIcon />
      </div>
    </Button>
  );
}
