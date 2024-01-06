import '../globals.css';

import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { GitHubHoverCard } from '@/app/(sign-in)/_components/GitHubHoverCard';
import { TwitterIcon } from '@/components/Icons/TwitterIcon';
import { RadialGradientBox } from '@/components/RadialGradientBox';
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
          'bg-starry-blue flex justify-center items-center min-h-screen w-screen',
          playfairFont.variable,
          interFont.variable,
        )}
      >
        <GitHubHoverCard />

        <main className="flex min-h-screen w-screen flex-col items-center justify-center">
          <RadialGradientBox>
            <section className="z-20 relative w-full h-full flex flex-col justify-center items-center flex-1 py-20">
              <header>
                <a
                  // TODO - Reference tweet announcement
                  href="https://x.com/lauradotjs"
                  target="_blank"
                  rel="noreferrer"
                  className="z-20	mx-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden border rounded-2xl py-1 px-4 text-yellow-50 text-sm hover:scale-105 transition duration-300 ease-in-out"
                >
                  <TwitterIcon className="h-5 w-5" />

                  <p className="text-sm font-semibold ">Introducing Starry</p>
                </a>

                <span className="text-8xl md:text-9xl text-center font-bold font-display tracking-tight text-yellow-50">
                  <Sparkles>
                    <Sparkles>Starry</Sparkles>
                  </Sparkles>
                </span>

                <p className="text-center font-light text-white [text-wrap:balance] md:text-xl pt-6 px-4">
                  Generate pictures based on Van Gogh arts via AI model.
                </p>
              </header>

              {children}
            </section>
          </RadialGradientBox>
        </main>
      </body>
    </html>
  );
}
