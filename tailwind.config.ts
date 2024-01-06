import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'starry-illustration': "url('../../public/starry-illustration.png')",
      },
      colors: {
        'starry-blue': '#0C1C6E',
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        default: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
