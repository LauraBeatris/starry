'use client';

import { useFormStatus } from 'react-dom';

import { Button } from '@/app/ui/Button';
import { LoadingCircleIcon } from '@/app/ui/Icons/LoadingIcon';
import { SparkleIcon } from '@/app/ui/Icons/SparkleIcon';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      <div className="flex h-[20px] w-[110px] items-center justify-center gap-1">
        {pending ? (
          <LoadingCircleIcon />
        ) : (
          <>
            <SparkleIcon />
            <span>Generate</span>
            <SparkleIcon />
          </>
        )}
      </div>
    </Button>
  );
}
