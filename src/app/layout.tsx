import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { className } from '@/app/lib/className';
import { interFont, playfairFont } from '@/app/lib/fonts';
import { BuyMeACoffeeIcon } from '@/app/ui/Icons/BuyMeACoffeeIcon';
import { Sparkles } from '@/app/ui/Sparkles';

import '@/app/lib/envSchema';

export const metadata: Metadata = {
  title: {
    template: 'Starry | %s',
    default: 'Starry',
  },
  description: "Turn your ideas into Van Gogh's Starry Night.",
  metadataBase: new URL('https://my-starry.com'),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <html lang="en">
        <body
          className={className(
            'starry-background flex min-h-screen min-h-screen w-full flex-col items-center justify-center overflow-x-hidden',
            playfairFont.variable,
            interFont.variable,
          )}
        >
          <div className="relative flex min-h-screen max-w-xl flex-col items-center justify-center">
            <Header />

            {children}

            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}

function Header() {
  return (
    <header className="relative flex flex-col items-center justify-center">
      <div>
        <h1 className="text-center font-display text-8xl font-bold tracking-tight text-yellow-50 md:text-9xl">
          <Sparkles>
            <Sparkles>Starry</Sparkles>
          </Sparkles>
        </h1>
      </div>

      <p className="px-4 pt-6 text-center text-xl font-light text-white [text-wrap:balance] md:text-2xl">
        Turn your ideas into Van Gogh&apos;s Starry Night
      </p>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full py-5 text-center">
      <p className="text-yellow-50">
        Built by{' '}
        <a
          className="font-semibold text-yellow-50 underline-offset-4 hover:underline"
          href="https://twitter.com/lauradotjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Laura Beatris
        </a>
      </p>
      <a
        href="https://www.buymeacoffee.com/laurabeatris"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-yellow-50 px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <BuyMeACoffeeIcon className="h-6 w-6" />
        <p className="font-medium text-gray-600">Buy me a coffee</p>
      </a>
    </footer>
  );
}
