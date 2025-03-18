// src/theme/theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { merriweather, caveat, lora } from "./fonts";
import { CardTheme } from "./CardTheme";
import { ModalTheme } from "./ModalTheme";

const config: ThemeConfig = {
	initialColorMode: "system",
	useSystemColorMode: false,
};
const blockyStyle = {
	border: "1px solid var(--chakra-colors-accent)",
	padding: "0 22px 22px",
	borderRadius: "10px",
	marginTop: "var(--chakra-space-10)",
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
				_dark: "#1a1a1a", // gris oscuro para dark
			},
			cardBorder: {
				default: "#1a1a1a",
				_dark: "#2d2d2d",
			},
			cardColor: {
				default: "#1A1A1A", // mismo color que "text" en light
				_dark: "#F5F5F7", // mismo color que "text" en dark
			},
			panel: {
				default: "#ECECEE",
				_dark: "#2d2d2d",
			},
			text: {
				default: "#1a1a1a",
				_dark: "#f5f5f7",
			},
			accent: {
				default: "#ff00ae",
				_dark: "#CAADFF",
			},
			secondary: {
				default: "#b300d1",
				_dark: "#FC97EA",
			},
		},
	},
	components: {
		Button: {
			variants: {
				custom: {
					bg: "secondary",
					color: "bg",
					_hover: {
						opacity: 0.8,
					},
				},
				custom2: {
					bg: "accent",
					color: "bg",
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
				"--font-lora": lora.style.fontFamily,
			},
			".blocky-style": blockyStyle,
			div: {
				_focusVisible: {
					outline: "none!important",
				},
			},
			body: {
				bg: "bg",
				color: "text",
				fontSize: "18px",
				fontFamily: "var(--font-lora), sans-serif",
			},
			header: {
				bg: "var(--chakra-colors-panel)",
			},
			h1: {
				fontSize: "64px",
				textAlign: "center",
				fontFamily: "var(--font-caveat), cursive",
			},
			h2: {
				fontSize: "48px",
				fontFamily: "var(--font-caveat), cursive",
				textAlign: { base: "center", md: "left" },
			},
			h3: {
				fontSize: "32px",
				fontFamily: "var(--font-caveat), cursive",
			},
			a: {
				fontWeight: "bold",
				fontFamily: "var(--font-merriweather), serif",
				fontSize: "16px",
				_hover: {
					color: "var(--chakra-colors-accent)",
					textDecoration: "none!important",
					transition: "all 0.45s",
					cursor: "pointer",
				},
			},
			strong: {
				color: "var(--chakra-colors-accent)",
				_hover: {
					color: "var(--chakra-colors-secondary)",
					textDecoration: "none",
					transition: "all 0.45s",
				},
			},
		},
	},
});

export default theme;
