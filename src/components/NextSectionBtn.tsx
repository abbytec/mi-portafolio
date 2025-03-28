// src/components/NextSectionButton.jsx
"use client";

import { useMediaQuery } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { FaRegCircle } from "react-icons/fa";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/experiences", label: "Experiencias" },
	{ href: "/education", label: "Educación" },
	{ href: "/contact", label: "Contacto" },
];

function getNextLink(pathname: string) {
	const currentIndex = navLinks.findIndex((link) => (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)));
	// Si es la última sección, retorna el primer enlace
	const isLastSection = currentIndex === navLinks.length - 1;
	const nextIndex = isLastSection ? 0 : currentIndex + 1;
	return { nextHref: navLinks[nextIndex].href, isLastSection };
}

export default function NextSectionButton() {
	const pathname = usePathname();
	const { nextHref, isLastSection } = getNextLink(pathname);
	// Usa useMediaQuery para determinar si es desktop
	const [isDesktop] = useMediaQuery("(min-width: 1600px)");

	// Si es la última sección, define label e ícono particular
	const label = isLastSection ? "Volver al inicio" : "Siguiente sección";
	let icon = <FaRegCircle style={{ marginTop: "0.5rem" }} />;
	if (!isLastSection) {
		icon = isDesktop ? <ArrowForwardIcon style={{ marginTop: "0.5rem" }} /> : <ArrowDownIcon style={{ marginTop: "0.5rem" }} />;
	}

	// Para desktop, posición fija a la derecha; en mobile se coloca debajo del main
	if (isDesktop) {
		return (
			<NextLink
				href={nextHref}
				passHref
				style={{ display: "flex", flexDirection: "column", position: "fixed", right: 10, bottom: "50%", alignItems: "center" }}>
				{label}
				<br />
				{icon}
			</NextLink>
		);
	}

	return (
		<NextLink
			href={nextHref}
			passHref
			style={{
				display: "flex",
				flexDirection: "column",
				margin: "0 auto",
				padding: "1rem",
				right: 10,
				bottom: "50%",
				alignItems: "center",
			}}>
			{label}
			<br />
			{icon}
		</NextLink>
	);
}
