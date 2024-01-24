import Link from 'next/link';

import { getAuthorizationUrl } from '@/app/lib/auth';
import { AuthButton } from '@/app/ui/Button/AuthButton';
import { SparkleIcon } from '@/app/ui/Icons/SparkleIcon';

export default function HomePage() {
  return (
    <>
      <AuthorizationLink />

      <section className="container z-30 mx-auto flex flex-col items-center p-10 md:items-start">
        <div className="relative flex justify-center lg:justify-start">
          <span className="absolute bottom-0" aria-hidden>
            <SparkleIcon className="fill-yellow-500" />
          </span>

          <h2 className="inline w-[250px] pl-3 font-display text-4xl text-white [text-wrap:balance]">
            How it works?
          </h2>
        </div>

        <HowItWorksList />

        <UsersGallery />
      </section>
    </>
  );
}

async function AuthorizationLink() {
  const authorizationUrl = await getAuthorizationUrl();

  return (
    <div className="relative z-30 mb-5 mt-6">
      <Link href={authorizationUrl}>
        <AuthButton />
      </Link>
    </div>
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

function UsersGallery() {
  return (
    <div className="relative mx-auto mt-10 w-[240px] md:mx-0">
      <span className="absolute right-0 top-0" aria-hidden>
        <SparkleIcon className="fill-yellow-500" />
      </span>

      <h2 className="pl-3 font-display text-4xl text-white [text-wrap:balance]">
        User&apos;s gallery
      </h2>
    </div>
  );
}
