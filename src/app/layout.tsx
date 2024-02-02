import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { className } from '@/app/lib/className';
import { interFont, playfairFont } from '@/app/lib/fonts';
import { Sparkles } from '@/app/ui/Sparkles';

import '@/app/lib/serverEnvSchema';

export const metadata: Metadata = {
  title: {
    template: 'Starry | %s',
    default: 'Starry',
  },
  description:
    "Turn your pictures into Van Gogh's Starry Night. Powered by Vercel and Replicate.",
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
            'starry-background min-h-screen overflow-x-hidden',
            playfairFont.variable,
            interFont.variable,
          )}
        >
          <div className="flex min-h-screen flex-col items-center justify-center">
            <Header />

            {children}
          </div>
        </body>
      </html>
    </>
  );
}

function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center">
      <div className="z-30">
        <h1 className="text-center font-display text-8xl font-bold tracking-tight text-yellow-50 md:text-9xl">
          <Sparkles>
            <Sparkles>Starry</Sparkles>
          </Sparkles>
        </h1>
      </div>

      <p className="z-30 px-4 pt-6 text-center text-xl font-light text-white [text-wrap:balance] md:text-2xl">
        Turn your pictures into Van Gogh&apos;s Starry Night
      </p>
    </header>
  );
}
