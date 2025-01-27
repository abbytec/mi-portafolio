// src/components/Header.jsx
"use client";

import { useColorMode, Flex, IconButton, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { usePathname } from "next/navigation"; // Importamos usePathname
import useSound from "@/hooks/useClickSound";

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	const playClickSound = useSound("/sounds/click.wav");
	const pathname = usePathname(); // Obtenemos la ruta actual

	// Definimos los enlaces de navegación
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/experiences", label: "Experiencias" },
		{ href: "/education", label: "Educación" },
		{ href: "/contact", label: "Contacto" },
	];

	return (
		<Flex as="header" p={4} alignItems="center" justifyContent="space-between" boxShadow="md">
			<Breadcrumb as="nav" separator="-">
				{navLinks.map((link) => {
					// Verificamos si el enlace actual coincide con la ruta
					const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

					return (
						<BreadcrumbItem key={link.href}>
							<BreadcrumbLink
								as={NextLink}
								href={link.href}
								passHref
								onClick={playClickSound}
								color={isActive ? "var(--chakra-colors-accent)" : "var(--chakra-colors-text)"} // Opacidad para el enlace activo
							>
								{link.label}
							</BreadcrumbLink>
						</BreadcrumbItem>
					);
				})}
			</Breadcrumb>
			<IconButton
				aria-label="Toggle color mode"
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				onClick={toggleColorMode}
				variant="custom"
			/>
		</Flex>
	);
}
