"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, PropsWithChildren } from "react";
import TwitterIcon from "./Icons/TwitterIcon";
import { Sparkles } from "./Sparkles";

export function ContentBox({ children }: PropsWithChildren) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative rounded-xl px-8 py-16 flex flex-col items-center justify-center w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(
            200px circle at ${mouseX}px ${mouseY}px,
            rgba(14, 165, 233, 0.15),
            transparent 50%
          )
        `,
        }}
      />

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

      <span className="text-9xl text-center font-bold font-display tracking-tight text-white">
        <Sparkles>{children}</Sparkles>
      </span>
    </div>
  );
}
