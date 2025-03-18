// src/theme/fonts.ts
import { Merriweather, Caveat, Lora } from "next/font/google";

export const merriweather = Merriweather({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-merriweather",
});

export const caveat = Caveat({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-caveat",
});

export const lora = Lora({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-lora",
});
