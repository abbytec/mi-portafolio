// src/app/providers.jsx
"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/theme";
import { Neko } from "neko-ts";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
	const [neko, setNeko] = useState<Neko | null>(null);

	useEffect(() => {
		neko?.wake();
		if (neko) return;
		setTimeout(
			() =>
				setNeko(
					new Neko({
						origin: {
							x: 100,
							y: 200,
						},
					})
				),
			1000
		);
	}, [neko]);

	const pathname = usePathname();
	useEffect(() => {
		const main = document.querySelector("main") as HTMLElement;
		if (!main) return;

		const showAura = () => {
			main.style.setProperty("--aura-opacity", "1");
			neko?.sleep();
		};
		const hideAura = () => {
			main.style.setProperty("--aura-opacity", "0");
			neko?.wake();
		};
		const handleMouseMove = (e: MouseEvent | TouchEvent) => {
			const rect = main.getBoundingClientRect();
			if (e instanceof TouchEvent) {
				main.style.setProperty("--mouse-x", `${e.touches[0].clientX - rect.left}px`);
				main.style.setProperty("--mouse-y", `${e.touches[0].clientY - rect.top}px`);
			} else {
				main.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
				main.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
			}
		};

		// Función para agregar listeners a los elementos encontrados
		const addListeners = (blocks: NodeListOf<HTMLElement>) => {
			blocks.forEach((block) => {
				block.addEventListener("mousemove", handleMouseMove);
				block.addEventListener("touchmove", handleMouseMove);
				block.addEventListener("mouseenter", showAura);
				block.addEventListener("touchstart", showAura);
				block.addEventListener("mouseleave", hideAura);
				block.addEventListener("touchend", hideAura);
			});
		};

		// Función para remover listeners en caso de desmontar
		const removeListeners = (blocks: NodeListOf<HTMLElement>) => {
			blocks.forEach((block) => {
				block.removeEventListener("mousemove", handleMouseMove);
				block.removeEventListener("mouseenter", showAura);
				block.removeEventListener("mouseleave", hideAura);
				block.removeEventListener("touchmove", handleMouseMove);
				block.removeEventListener("touchstart", showAura);
				block.removeEventListener("touchend", hideAura);
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
	}, [pathname, neko]);
	return (
		<div id="interfaz">
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</div>
	);
}
