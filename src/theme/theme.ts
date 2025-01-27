// src/theme/theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { merriweather, caveat, specialElite } from "./fonts";
import { CardTheme } from "./CardTheme";
import { ModalTheme } from "./ModalTheme";

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	semanticTokens: {
		colors: {
			bg: {
				default: "#f5f5f7",
				_dark: "#1a1a1a",
			},
			cardBg: {
				default: "#ECECEE", // gris clarito para light
				_dark: "#2A2A2C", // gris oscuro para dark
			},
			cardColor: {
				default: "#1A1A1A", // mismo color que "text" en light
				_dark: "#F5F5F7", // mismo color que "text" en dark
			},
			panel: {
				default: "#ffffff",
				_dark: "#2d2d2d",
			},
			text: {
				default: "#1a1a1a",
				_dark: "#f5f5f7",
			},
			accent: {
				default: "#ff00ae",
				_dark: "#d1008f",
			},
		},
	},
	components: {
		Button: {
			variants: {
				custom: {
					bg: "panel",
					color: "text",
					_hover: {
						opacity: 0.8,
					},
				},
			},
		},
		Card: CardTheme,
		Modal: ModalTheme,
	},
	styles: {
		global: {
			":root": {
				"--font-merriweather": merriweather.style.fontFamily,
				"--font-caveat": caveat.style.fontFamily,
				"--font-special-elite": specialElite.style.fontFamily,
			},
			div: {
				_focusVisible: {
					outline: "none!important",
				},
			},
			body: {
				bg: "bg",
				color: "text",
				fontSize: "16px",
				fontFamily: "var(--font-merriweather), serif",
			},
			header: {
				bg: "var(--chakra-colors-cardBg)",
			},
			h1: {
				fontSize: "64px",
				textAlign: "center",
				fontFamily: "var(--font-caveat), cursive",
			},
			h2: {
				fontSize: "48px",
				fontFamily: "var(--font-caveat), cursive",
			},
			h3: {
				fontSize: "32px",
				fontFamily: "var(--font-caveat), cursive",
			},
			a: {
				fontWeight: "bold",
				_hover: {
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					color: "var(--chakra-colors-accent)",
					textDecoration: "none",
					transition: "all 0.45s",
				},
			},
		},
	},
});

export default theme;
