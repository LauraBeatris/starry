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
      <section className="relative flex h-screen w-screen flex-col items-center justify-center">
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

        <div className="absolute z-20 h-full w-full bg-gradient-to-t from-[rgba(12,28,110,1)] via-[rgba(12,28,110,0.4767)] via-40% to-[rgba(12,28,110,0)]"></div>

        <header className="z-30">
          <a
            // TODO - Reference tweet announcement
            href="https://x.com/lauradotjs"
            target="_blank"
            rel="noreferrer"
            className="animate-fade-up mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-2xl border bg-yellow-600 px-4 py-1 text-sm text-yellow-50 transition duration-300 ease-in-out hover:scale-105"
          >
            <TwitterIcon className="h-5 w-5" />

            <p className="text-sm font-semibold">Introducing Starry</p>
          </a>

          <h1 className="text-center font-display text-8xl font-bold tracking-tight text-white md:text-9xl">
            <Sparkles>
              <Sparkles>Starry</Sparkles>
            </Sparkles>
          </h1>
        </header>

        <p className="z-30 px-4 pt-6 text-center font-light text-white [text-wrap:balance] md:text-xl">
          Generate pictures based on Van Gogh arts via AI model.
        </p>

        <div className="relative z-30 mb-5 mt-6">
          <Link href={authorizationUrl}>
            <AuthButton />
          </Link>
        </div>
      </section>
      <section className="h-screen w-screen px-10">
        <div className="relative">
          <span className="absolute bottom-0" aria-hidden>
            <SparkleIcon className="fill-yellow-500" />
          </span>

          <h2 className="inline w-[250px] pl-3 font-display text-4xl text-white [text-wrap:balance]">
            How it works?
          </h2>
        </div>

        <ul className="flex gap-2">
          <li className="font-display text-4xl text-yellow-400">1</li>

          <li className="font-display text-4xl text-yellow-400">2</li>

          <li className="font-display text-4xl text-yellow-400">3</li>
        </ul>

        <div className="relative mt-10 w-[240px]">
          <span className="absolute bottom-0" aria-hidden>
            <SparkleIcon className="fill-yellow-500" />
          </span>

          <h2 className="pl-3 font-display text-4xl text-white [text-wrap:balance]">
            User&apos;s gallery
          </h2>
        </div>
      </section>
    </>
  );
}
