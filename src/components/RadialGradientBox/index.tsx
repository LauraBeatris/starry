'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, PropsWithChildren } from 'react';

export function RadialGradientBox({ children }: PropsWithChildren) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="group relative rounded-xl" onMouseMove={handleMouseMove}>
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

      {children}
    </div>
  );
}
