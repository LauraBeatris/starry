'use client';

import * as HoverCard from '@radix-ui/react-hover-card';
import Image from 'next/image';

import styles from './styles.module.css';
import { GithubIcon } from '@/components/Icons/GitHubIcon';
import { className } from '@/utils/className';


const gitHubUrl = 'https://github.com/laurabeatris/starry';

export function GitHubHoverCard() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a
          href={gitHubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-5 top-5 z-10"
        >
          <GithubIcon />
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          sideOffset={5}
          className={className(
            styles.hoverCardContent,
            'rounded-lg p-5 w-72 bg-white shadow-lg',
          )}
        >
          <div className="flex space-x-4 flex-col">
            <Image
              alt="GitHub Profile Pic"
              width={20}
              height={20}
              src="https://avatars.githubusercontent.com/u/48022589?v=4"
            />
          </div>
          <HoverCard.Arrow className="fill-current text-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
