"use client";

import { Button } from "@/components/Button";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import { RadialGradientBox } from "@/components/RadialGradientBox";
import { Sparkles } from "@/components/Sparkles";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center flex-1">
      <RadialGradientBox>
        <a
          // TODO - Reference tweet announcement
          href="https://x.com/lauradotjs"
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden border rounded-2xl py-1 px-4 text-white text-sm hover:scale-105 transition duration-300 ease-in-out"
        >
          <TwitterIcon className="h-5 w-5" />

          <p className="text-sm font-semibold ">Introducing Starry</p>
        </a>

        <span className="text-8xl md:text-9xl text-center font-bold font-display tracking-tight text-white">
          <Sparkles>
            <Sparkles>Starry</Sparkles>
          </Sparkles>
        </span>

        <p className="text-center text-white [text-wrap:balance] md:text-xl pt-6 px-4">
          Generate pictures based on Van Gogh arts via AI model.
        </p>

        <div className="mt-6">
          <Button>Choose a painting</Button>
        </div>
      </RadialGradientBox>
    </section>
  );
}
