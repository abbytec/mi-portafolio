// src/components/Header.jsx
"use client";

import {
	useColorMode,
	Flex,
	IconButton,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	VStack,
	Box,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { usePreLoadAudio, useSound } from "@/hooks/useClickSound";

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	const clickSound = usePreLoadAudio("/sounds/click.wav");
	const playClickSound = useSound(clickSound);
	const pathname = usePathname();

	// Manejar abrir/cerrar el Drawer
	const { isOpen, onOpen, onClose } = useDisclosure();

	// Enlaces de navegación
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/experiences", label: "Experiencias" },
		{ href: "/education", label: "Educación" },
		{ href: "/contact", label: "Contacto" },
	];

	return (
		<Flex as="header" p={4} alignItems="center" justifyContent="space-between" boxShadow="md">
			{/* Breadcrumb visible en pantallas medianas y grandes */}
			<Breadcrumb as="nav" separator="&nbsp;&nbsp;/&nbsp;&nbsp;" display={{ base: "none", md: "block" }} margin={"0 auto"}>
				{navLinks.map((link) => {
					const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

					return (
						<BreadcrumbItem key={link.href} fontSize="17px">
							<BreadcrumbLink
								as={NextLink}
								href={link.href}
								fontSize="17px"
								passHref
								onClick={playClickSound}
								color={isActive ? "var(--chakra-colors-accent)" : "var(--chakra-colors-text)"}>
								{link.label}
							</BreadcrumbLink>
						</BreadcrumbItem>
					);
				})}
			</Breadcrumb>

			{/* Botón del menú "hamburger" para pantallas móviles (abre el Drawer) */}
			<IconButton
				icon={<HamburgerIcon />}
				aria-label="Abrir menú móvil"
				variant="outline"
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				mr={2}
				title="Abrir menú"
			/>

			{/* Drawer a pantalla completa para mostrar el menú en móviles */}
			<Drawer isOpen={isOpen} onClose={onClose} placement="left" size="full">
				<DrawerOverlay />
				<DrawerContent bg="var(--chakra-colors-panel)">
					<DrawerCloseButton onClick={playClickSound} />
					<DrawerHeader borderBottomWidth="1px">Menú</DrawerHeader>
					<DrawerBody>
						<VStack align="stretch" spacing={4}>
							{navLinks.map((link) => {
								const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
								return (
									<NextLink href={link.href} key={link.href} passHref>
										{/* 
               Puedes usar <Button>, <Box> o <Link> de Chakra 
               con estilos a tu gusto
            */}
										<Box
											as="button"
											onClick={() => {
												playClickSound();
												onClose();
											}}
											width="100%" // O w="full"
											py={3}
											fontSize="xl"
											textAlign="center"
											// Agrega más estilos si deseas
											bg={isActive ? "var(--chakra-colors-cardBg)" : "transparent"}
											color={isActive ? "var(--chakra-colors-accent)" : "inherit"}
											_hover={{ bg: "var(--chakra-colors-cardBg)", color: "var(--chakra-colors-accent)" }}>
											{link.label}
										</Box>
									</NextLink>
								);
							})}
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>

			{/* Botón para alternar el modo claro/oscuro */}
			<IconButton
				aria-label="Toggle color mode"
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				onClick={toggleColorMode}
				variant="custom"
				title={colorMode === "light" ? "Modo Oscuro" : "Modo Claro"}
			/>
		</Flex>
	);
}
