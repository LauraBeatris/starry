'use client';

import * as HoverCard from '@radix-ui/react-hover-card';
import Image from 'next/image';
import Link from 'next/link';

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
          collisionPadding={10}
          className={className(
            styles.hoverCardContent,
            'rounded-lg p-5 w-72 bg-white shadow-lg',
          )}
        >
          <div className="flex flex-col space-y-2">
            <div className="relative rounded-full w-12 h-12 overflow-hidden">
              <Image
                alt="GitHub Profile Pic"
                src="https://avatars.githubusercontent.com/u/48022589?v=4"
                layout="fill"
              />
            </div>

            <div className="w-full flex flex-col space-y-2 align-start">
              <div>
                <div className="font-bold text-base text-gray-600">
                  Laura Beatris
                </div>
                <div className="text-gray-500">LauraBeatris</div>
              </div>

              <div className="text-gray-500">
                engineering{' '}
                <Link
                  className="text-gray-600 font-medium"
                  href="https://workos.com"
                >
                  @workos
                </Link>
              </div>
            </div>
          </div>
          <HoverCard.Arrow className="fill-current text-white" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
