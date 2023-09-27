/**
 * Returns a random number based on a given range
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
