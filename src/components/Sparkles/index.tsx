'use client';

import { CSSProperties, PropsWithChildren, SVGProps, useState } from 'react';

import styles from './styles.module.css';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useRandomInterval } from '@/hooks/useRandomInterval';
import { className } from '@/utils/className';
import { getNumberSequence } from '@/utils/numbers';

interface SparkleShape {
  id: string;
  size: number;
  color: string;
  createdAt: number;
  style: Pick<CSSProperties, 'top' | 'left' | 'zIndex'>;
}

const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

/**
 * Returns a random number based on a given range
 */
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateSparkle(
  sizeRange: [number, number] = [10, 20],
  color = DEFAULT_COLOR,
): SparkleShape {
  return {
    id: String(getRandomNumber(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: getRandomNumber(...sizeRange),
    style: {
      top: getRandomNumber(0, 100) + '%',
      left: getRandomNumber(0, 100) + '%',
      zIndex: 20,
    },
  };
}

interface SparkleIconProps
  extends Pick<SVGProps<SVGElement>, 'style' | 'fill' | 'width' | 'height'> {}

function SparkleIcon({ height, width, style, fill }: SparkleIconProps) {
  return (
    <div
      className={className(
        styles.growAndShrink,
        'position pointer-events-none',
      )}
    >
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 160 160"
        className={className(styles.spin, 'pointer-events-none absolute z-10')}
        style={style}
      >
        <path
          fill={fill}
          d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"
        ></path>
      </svg>
    </div>
  );
}

interface SparkleProps extends PropsWithChildren {
  sizeRange?: [mininum: number, larger: number];
}

export function Sparkles({ children, sizeRange }: SparkleProps) {
  const [sparkles, setSparkles] = useState<SparkleShape[]>(() => {
    return getNumberSequence(1, 4).map(() => generateSparkle(sizeRange));
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const now = Date.now();
      const sparkle = generateSparkle(sizeRange);
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
      });

      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? undefined : 50,
    prefersReducedMotion ? undefined : 500,
  );

  return (
    <span className="relative inline-block h-full w-full">
      {sparkles.map((sparkle) => (
        <SparkleIcon
          key={sparkle.id}
          fill={sparkle.color}
          width={sparkle.size}
          height={sparkle.size}
          style={sparkle.style}
        ></SparkleIcon>
      ))}

      <strong className="relative z-10 font-bold">{children}</strong>
    </span>
  );
}
