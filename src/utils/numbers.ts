/**
 * Returns a random number based on a given range
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns a sequence given on a given range
 */
export function getNumberSequence(start: number, end: number, step = 1) {
  const output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
}
