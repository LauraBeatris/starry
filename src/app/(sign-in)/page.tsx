import Link from 'next/link';

import { AuthButton } from './_components/AuthButton';
import { getAuthorizationUrl } from '@/app/auth';
import { TwitterIcon } from '@/components/Icons/TwitterIcon';
import { Sparkles } from '@/components/Sparkles';

export default function Home() {
  const authorizationUrl = getAuthorizationUrl();

  return (
    <>
      <section className="z-20 relative w-screen h-screen flex flex-col justify-center items-center">
        <header>
          <a
            // TODO - Reference tweet announcement
            href="https://x.com/lauradotjs"
            target="_blank"
            rel="noreferrer"
            className="z-20	mx-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden border rounded-2xl py-1 px-4 text-yellow-50 text-sm hover:scale-105 transition duration-300 ease-in-out bg-yellow-500"
          >
            <TwitterIcon className="h-5 w-5" />

            <p className="text-sm font-semibold ">Introducing Starry</p>
          </a>

          <span className="text-8xl md:text-9xl text-center font-bold font-display tracking-tight text-yellow-50">
            <Sparkles>
              <Sparkles>Starry</Sparkles>
            </Sparkles>
          </span>
        </header>

        <p className="text-center font-light text-white [text-wrap:balance] md:text-xl pt-6 px-4">
          Generate pictures based on Van Gogh arts via AI model.
        </p>

        <div className="relative mt-6 mb-5 z-10">
          <Link href={authorizationUrl}>
            <AuthButton />
          </Link>
        </div>
      </section>
      <section className="w-screen h-screen" />
    </>
  );
}
