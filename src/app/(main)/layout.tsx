import '../globals.css';

import { Metadata } from 'next';
import Link from 'next/link';

import { GitHubHoverCard } from '@/app/(main)/_components/GitHubHoverCard';
import { RadialGradientBox } from '@/components/RadialGradientBox';
import { className } from '@/utils/className';
import { interFont, playfairFont } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Starry',
  description:
    'Generate pictures based on Van Gogh arts via AI model. Powered by Vercel and Replicate.',
  // TODO - Update URL with correct domain
  metadataBase: new URL('https://starry.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={className(
          'bg-blue-900 flex justify-center items-center h-screen w-screen',
          playfairFont.variable,
          interFont.variable,
        )}
      >
        <GitHubHoverCard />

        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          <RadialGradientBox>
            {children}

            <footer className="flex space-x-1 align-center pb-10">
              <p>🎨</p>
              <p className="font-display text-center [text-wrap:balance] md:text-md">
                Created by Laura Beatris - Powered by{' '}
                <strong>
                  <Link href="https://vercel.com" target="_blank">
                    Vercel
                  </Link>
                </strong>
                ,{' '}
                <strong>
                  <Link href="https://workos.com" target="_blank">
                    WorkOS
                  </Link>
                </strong>{' '}
                and{' '}
                <strong>
                  <Link href="https://replicate.com" target="_blank">
                    Replicate
                  </Link>
                </strong>
              </p>
            </footer>
          </RadialGradientBox>
        </main>
      </body>
    </html>
  );
}
