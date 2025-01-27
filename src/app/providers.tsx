// src/app/providers.jsx
"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div suppressHydrationWarning={true}>
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				{children}
			</ChakraProvider>
		</div>
	);
}
