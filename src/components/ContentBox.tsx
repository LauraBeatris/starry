"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, PropsWithChildren } from "react";
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
      className="group relative rounded-xl px-8 py-16 flex items-center justify-center w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(
            400px circle at ${mouseX}px ${mouseY}px,
            rgba(14, 165, 233, 0.15),
            transparent 50%
          )
        `,
        }}
      />
      <span className="text-9xl text-center font-bold font-display tracking-tight text-white">
        <Sparkles>{children}</Sparkles>
      </span>
    </div>
  );
}
