import { Button } from '@/components/Button';
import TwitterIcon from '@/components/Icons/TwitterIcon';
import { PictureFrame } from '@/components/PictureFrame';
import { RadialGradientBox } from '@/components/RadialGradientBox';
import { Sparkles } from '@/components/Sparkles';

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center flex-1 py-20">
      <RadialGradientBox>
        <a
          // TODO - Reference tweet announcement
          href="https://x.com/lauradotjs"
          target="_blank"
          rel="noreferrer"
          className="z-20	mx-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden border rounded-2xl py-1 px-4 text-yellow-100 text-sm hover:scale-105 transition duration-300 ease-in-out"
        >
          <TwitterIcon className="h-5 w-5" />

          <p className="text-sm font-semibold ">Introducing Starry</p>
        </a>

        <span className="text-8xl md:text-9xl text-center font-bold font-display tracking-tight text-yellow-50">
          <Sparkles>
            <Sparkles>Starry</Sparkles>
          </Sparkles>
        </span>

        <p className="text-center font-light text-yellow-50 [text-wrap:balance] md:text-xl pt-6 px-4">
          Generate pictures based on Van Gogh arts via AI model.
        </p>

        <div className="mt-6 mb-5">
          <Button>Continue with Google</Button>
        </div>

        <PictureFrame />

        <footer className="mt-auto">
          <p className="font-display text-yellow-50 text-center [text-wrap:balance] md:text-md pt-6 px-4">
            Created by Laura Beatris - Powered by <strong>Vercel</strong>,{' '}
            <strong>WorkOS</strong> and <strong>Replicate</strong>
          </p>
        </footer>
      </RadialGradientBox>
    </section>
  );
}
