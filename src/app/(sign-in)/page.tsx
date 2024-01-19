import Image from 'next/image';
import Link from 'next/link';

import { AuthButton } from './_components/AuthButton';
import desktopIllustration from './_images/starry-desktop-illustration.png';
import mobileIllustration from './_images/starry-mobile-illustration.png';
import { getAuthorizationUrl } from '@/app/auth';
import { SparkleIcon } from '@/components/Icons/SparkleIcon';
import { TwitterIcon } from '@/components/Icons/TwitterIcon';
import { Sparkles } from '@/components/Sparkles';

export default function Home() {
  return (
    <>
      <section className="relative flex h-screen w-screen flex-col items-center justify-center">
        <Image
          objectFit="cover"
          className="invisible z-10 opacity-50 md:visible"
          alt="Background"
          aria-hidden
          fill
          priority
          placeholder="blur"
          src={desktopIllustration}
        />

        <Image
          objectFit="cover"
          className="visible z-10 opacity-50 md:invisible"
          alt="Background"
          aria-hidden
          fill
          priority
          placeholder="blur"
          src={mobileIllustration}
        />

        <BackgroundGradient />

        <Header />

        <p className="z-30 px-4 pt-6 text-center font-light text-yellow-50 [text-wrap:balance] md:text-2xl">
          Generate pictures based on Van Gogh arts via AI model.
        </p>

        <AuthenticationLink />
      </section>

      <section className="container mx-auto flex flex-col items-center px-10 pb-10 md:items-start">
        <div className="relative flex justify-center lg:justify-start">
          <span className="absolute bottom-0" aria-hidden>
            <SparkleIcon className="fill-yellow-500" />
          </span>

          <h2 className="inline w-[250px] pl-3 font-display text-4xl text-white [text-wrap:balance]">
            How it works?
          </h2>
        </div>

        <HowItWorksList />

        <div className="relative mx-auto mt-10 w-[240px] md:mx-0">
          <span className="absolute right-0 top-0" aria-hidden>
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

function BackgroundGradient() {
  return (
    <div className="absolute z-20 h-full w-full bg-gradient-to-t from-[rgba(12,28,110,1)] via-[rgba(12,28,110,0.4767)] via-40% to-[rgba(12,28,110,0)]"></div>
  );
}

function HowItWorksList() {
  return (
    <ul className="flex w-full flex-col items-center justify-between gap-10 pt-4 md:flex-row md:pl-4">
      <li className="flex w-9/12 items-start gap-2 md:w-min">
        <span className="font-display text-4xl text-yellow-400">1.</span>
        <p className="w-[250px] pt-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </li>

      <li className="flex w-9/12 items-start gap-2 md:w-min">
        <span className="font-display text-4xl text-yellow-400">2.</span>
        <p className="w-[250px] pt-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </li>

      <li className="flex w-9/12 items-start gap-2 md:w-min">
        <span className="font-display text-4xl text-yellow-400">3.</span>
        <p className="w-[250px] pt-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </li>
    </ul>
  );
}

async function AuthenticationLink() {
  const authorizationUrl = await getAuthorizationUrl();

  return (
    <div className="relative z-30 mb-5 mt-6">
      <Link href={authorizationUrl}>
        <AuthButton />
      </Link>
    </div>
  );
}

function Header() {
  return (
    <header className="z-30">
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
    </header>
  );
}
