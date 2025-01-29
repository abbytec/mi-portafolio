// src/app/providers.jsx
"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";
import { Neko } from "neko-ts";
import { useEffect, useRef } from "react";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
	const neko = useRef<Neko | null>(null);

	useEffect(() => {
		if (!neko?.current) {
			neko.current = new Neko({
				origin: {
					x: 100,
					y: 100,
				},
			});
		}
	}, [neko]);
	return (
		<div>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</div>
	);
}
