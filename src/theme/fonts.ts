// src/theme/fonts.ts
import { Merriweather, Caveat, Special_Elite } from "next/font/google";

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

export const specialElite = Special_Elite({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-special-elite",
});
