import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { className } from '@/app/lib/className';
import { interFont, playfairFont } from '@/app/lib/fonts';
import { TwitterIcon } from '@/app/ui/Icons/TwitterIcon';
import { Sparkles } from '@/app/ui/Sparkles';

import '@/app/lib/serverEnvSchema';

export const metadata: Metadata = {
  title: 'Starry',
  description:
    'Generate pictures based on Van Gogh arts via AI model. Powered by Vercel and Replicate.',
  // TODO - Update URL with correct domain
  // TODO - Implement OG social image
  metadataBase: new URL('https://starry.vercel.app'),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SpeedInsights />
      <html lang="en">
        <body
          className={className(
            'starry-background min-h-screen',
            playfairFont.variable,
            interFont.variable,
          )}
        >
          <div className="flex min-h-screen flex-col items-center justify-center">
            <Header />

            {children}
          </div>

          <Footer />
        </body>
      </html>
    </>
  );
}

function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center">
      <div className="z-30">
        <a
          // TODO - Reference tweet announcement
          href="https://x.com/lauradotjs"
          target="_blank"
          rel="noreferrer"
          className="animate-fade-up mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-2xl border bg-white px-4 py-1 text-sm text-black transition duration-300 ease-in-out hover:scale-105"
        >
          <TwitterIcon className="h-5 w-5" />

          <p className="text-sm font-semibold">Introducing Starry</p>
        </a>

        <h1 className="text-center font-display text-8xl font-bold tracking-tight text-yellow-50 md:text-9xl">
          <Sparkles>
            <Sparkles>Starry</Sparkles>
          </Sparkles>
        </h1>
      </div>

      <p className="z-30 px-4 pt-6 text-center font-light text-white [text-wrap:balance] md:text-2xl">
        Generate pictures based on Van Gogh arts via AI model.
      </p>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative flex items-center justify-center gap-1 border-t border-white border-opacity-10 p-4 text-white md:p-10">
      <p className="md:flex md:gap-1">
        <span>Made by</span>

        <span>
          <Sparkles sizeRange={[1, 10]}>
            <Link
              className="font-bold underline-offset-4 hover:underline"
              href="https://twitter.com/lauradotjs"
            >
              Laura Beatris
            </Link>
          </Sparkles>
        </span>
      </p>

      <p className="text-right">
        <span className="invisible md:visible">-</span> Powered by{' '}
        <Link
          className="font-bold underline-offset-4 hover:underline"
          rel="noreferrer noopener"
          target="_blank"
          href="https://vercel.com"
        >
          Vercel
        </Link>
        ,{' '}
        <Link
          className="font-bold underline-offset-4 hover:underline"
          rel="noreferrer noopener"
          target="_blank"
          href="https://workos.com"
        >
          WorkOS
        </Link>{' '}
        and{' '}
        <Link
          className="font-bold underline-offset-4 hover:underline"
          rel="noreferrer noopener"
          target="_blank"
          href="https://replicate.com/"
        >
          Replicate
        </Link>
      </p>
    </footer>
  );
}
