import { Inter, Playfair_Display } from "next/font/google";

export const playfairFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
