// src/app/fonts.ts
import { Inter, Montserrat } from "next/font/google";

// Brand Heading Font
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// Body Font
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
