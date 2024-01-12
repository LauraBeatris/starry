import Image from 'next/image';
import Link from 'next/link';

import { AuthButton } from './_components/AuthButton';
import illustration from './starry-illustration.png';
import { getAuthorizationUrl } from '@/app/auth';
import { SparkleIcon } from '@/components/Icons/SparkleIcon';
import { TwitterIcon } from '@/components/Icons/TwitterIcon';
import { Sparkles } from '@/components/Sparkles';

export default async function Home() {
  const authorizationUrl = await getAuthorizationUrl();

  return (
    <>
      <section className="relative w-screen h-screen flex flex-col justify-center items-center">
        <Image
          objectFit="cover"
          className="z-10"
          alt="Background"
          aria-hidden
          fill
          priority
          placeholder="blur"
          src={illustration}
        />

        <div className="absolute z-20 w-full h-full bg-gradient-to-t from-[rgba(12,28,110,1)] via-40% via-[rgba(12,28,110,0.4767)] to-[rgba(12,28,110,0)]"></div>

        <header className="z-30">
          <a
            // TODO - Reference tweet announcement
            href="https://x.com/lauradotjs"
            target="_blank"
            rel="noreferrer"
            className="mx-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden border rounded-2xl py-1 px-4 text-yellow-50 text-sm hover:scale-105 transition duration-300 ease-in-out bg-yellow-600"
          >
            <TwitterIcon className="h-5 w-5" />

            <p className="text-sm font-semibold">Introducing Starry</p>
          </a>

          <h1 className="text-8xl md:text-9xl text-center font-bold font-display tracking-tight text-white">
            <Sparkles>
              <Sparkles>Starry</Sparkles>
            </Sparkles>
          </h1>
        </header>

        <p className="z-30 text-center font-light text-white [text-wrap:balance] md:text-xl pt-6 px-4">
          Generate pictures based on Van Gogh arts via AI model.
        </p>

        <div className="z-30 relative mt-6 mb-5">
          <Link href={authorizationUrl}>
            <AuthButton />
          </Link>
        </div>
      </section>
      <section className="w-screen h-screen px-10">
        <div className="relative">
          <span className="absolute bottom-0" aria-hidden>
            <SparkleIcon className="fill-yellow-500" />
          </span>

          <h2 className="pl-3 inline w-[250px] text-white text-4xl [text-wrap:balance] font-display">
            How it works?
          </h2>
        </div>

        <ul className="flex gap-2">
          <li className="text-4xl text-yellow-400 font-display">1</li>

          <li className="text-4xl text-yellow-400 font-display">2</li>

          <li className="text-4xl text-yellow-400 font-display">3</li>
        </ul>

        <div className="mt-10 w-[240px] relative">
          <span className="absolute bottom-0" aria-hidden>
            <SparkleIcon className="fill-yellow-500" />
          </span>

          <h2 className="pl-3 text-white text-4xl [text-wrap:balance] font-display">
            User&apos;s gallery
          </h2>
        </div>
      </section>
    </>
  );
}
