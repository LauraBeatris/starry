import './globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { Sparkles } from '@/components/Sparkles';
import { className } from '@/utils/className';
import { interFont, playfairFont } from '@/utils/fonts';

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
        <main>{children}</main>
        <footer className="relative flex justify-center items-center text-white p-10 gap-1 border-t border-opacity-10 border-white">
          <p className="inline">Made by</p>

          <p>
            <Sparkles sizeRange={[1, 10]}>
              <Link
                className="hover:underline underline-offset-4 font-bold"
                href="https://twitter.com/lauradotjs"
              >
                Laura Beatris
              </Link>
            </Sparkles>
          </p>
          <p>
            - Powered by{' '}
            <Link
              className="hover:underline underline-offset-4 font-bold"
              rel="noreferrer noopener"
              target="_blank"
              href="https://vercel.com"
            >
              Vercel
            </Link>
            ,{' '}
            <Link
              className="hover:underline underline-offset-4 font-bold"
              rel="noreferrer noopener"
              target="_blank"
              href="https://workos.com"
            >
              WorkOS
            </Link>{' '}
            and{' '}
            <Link
              className="hover:underline underline-offset-4 font-bold"
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
