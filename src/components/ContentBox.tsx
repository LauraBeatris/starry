"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { CSSProperties, MouseEvent, PropsWithChildren } from "react";

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
      style={
        {
          "--background": "23, 37, 84",
          "--highlight": "255 255 255",

          "--bg-color":
            "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
          "--border-color": `linear-gradient(145deg,
          rgb(var(--highlight)) 0%,
          rgb(var(--highlight) / 0.3) 33.33%,
          rgb(var(--highlight) / 0.14) 66.67%,
          rgb(var(--highlight) / 0.1) 100%)
        `,
        } as CSSProperties
      }
      className="group relative max-w-md rounded-xl border border-white/10 px-8 py-16 shadow-2xl [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
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
      <div>
        <h3 className="text-base font-semibold leading-7 text-yellow-500">
          Turn your pictures into Van Gogh arts 🖌️🎨
        </h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white">
            Starry
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Upload your image below:
        </p>
      </div>
    </div>
  );
}
