// src/app/layout.jsx
import "./globals.css";
import Header from "../components/ui/header"; // Crearás este componente a continuación
import Providers from "./providers";
import { Metadata } from "next";
import { merriweather, caveat, specialElite } from "@/theme/fonts";

export const metadata: Metadata = {
	title: "Abigail Palmero",
	description: "Portafolio personal",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="es">
			<head></head>
			<body className={`${merriweather.variable} ${caveat.variable} ${specialElite.variable}`}>
				<Providers>
					<Header />
					<main style={{ padding: "1rem" }}>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
