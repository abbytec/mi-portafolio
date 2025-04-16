// src/app/providers.jsx
"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";
import { Neko } from "neko-ts";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
	const neko = useRef<Neko | null>(null);

	useEffect(() => {
		neko.current ??= new Neko({
			origin: {
				x: 100,
				y: 100,
			},
		});
	}, []);

	const pathname = usePathname();
	useEffect(() => {
		const main = document.querySelector("main") as HTMLElement;
		if (!main) return;

		const showAura = () => main.style.setProperty("--aura-opacity", "1");
		const hideAura = () => main.style.setProperty("--aura-opacity", "0");
		const handleMouseMove = (e: MouseEvent) => {
			const rect = main.getBoundingClientRect();
			main.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
			main.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
		};

		// Función para agregar listeners a los elementos encontrados
		const addListeners = (blocks: NodeListOf<HTMLElement>) => {
			blocks.forEach((block) => {
				block.addEventListener("mousemove", handleMouseMove);
				block.addEventListener("mouseenter", showAura);
				block.addEventListener("mouseleave", hideAura);
			});
		};

		// Función para remover listeners en caso de desmontar
		const removeListeners = (blocks: NodeListOf<HTMLElement>) => {
			blocks.forEach((block) => {
				block.removeEventListener("mousemove", handleMouseMove);
				block.removeEventListener("mouseenter", showAura);
				block.removeEventListener("mouseleave", hideAura);
			});
		};

		let blocks = document.querySelectorAll(".blocky-style");
		addListeners(blocks as NodeListOf<HTMLElement>);

		// Observer para detectar cambios en el DOM y reintentar agregar listeners
		const observer = new MutationObserver(() => {
			removeListeners(blocks as NodeListOf<HTMLElement>);
			blocks = document.querySelectorAll(".blocky-style");
			addListeners(blocks as NodeListOf<HTMLElement>);
		});

		observer.observe(main, { childList: true, subtree: true });

		return () => {
			removeListeners(blocks as NodeListOf<HTMLElement>);
			observer.disconnect();
		};
	}, [pathname]);
	return (
		<div id="interfaz">
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</div>
	);
}
