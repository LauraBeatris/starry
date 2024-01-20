import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Safely merge classes for Tailwind usage
 */
export function className(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
