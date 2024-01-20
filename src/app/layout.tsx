import './globals.css';
import '../serverEnvSchema';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { className } from '@/app/lib/className';
import { interFont, playfairFont } from '@/app/lib/fonts';
import { Sparkles } from '@/app/ui/Sparkles';

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
    <html lang="en">
      <body
        className={className(
          'bg-starry-blue',
          playfairFont.variable,
          interFont.variable,
        )}
      >
        <Image
          objectFit="cover"
          className="invisible z-10 opacity-50 md:visible"
          alt="Background"
          aria-hidden
          fill
          priority
          src="/desktop-background.png"
        />

        <Image
          objectFit="cover"
          className="visible z-10 opacity-50 md:invisible"
          alt="Background"
          aria-hidden
          fill
          priority
          src="/mobile-background.png"
        />

        <BackgroundGradient />

        <main>{children}</main>
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
      </body>
    </html>
  );
}

function BackgroundGradient() {
  return (
    <div className="absolute z-20 h-full w-full bg-gradient-to-t from-[rgba(12,28,110,1)] via-[rgba(12,28,110,0.4767)] via-40% to-[rgba(12,28,110,0)]"></div>
  );
}
