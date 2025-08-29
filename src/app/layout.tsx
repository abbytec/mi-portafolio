// src/app/layout.jsx
import "./globals.css";
import Header from "../components/ui/header"; // Crearás este componente a continuación
import Providers from "./providers";
import { Metadata } from "next";
import { merriweather, caveat, lora } from "@/theme/fonts";
import { PortalManager } from "@chakra-ui/react";
import NextSectionBtn from "@/components/NextSectionBtn";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
	title: "Abigail Palmero",
	description: "Portafolio personal",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es">
            <head></head>
            <body className={`${merriweather.variable} ${caveat.variable} ${lora.variable}`}>
                <Providers>
                    <PortalManager>
                        <Header />
                        {/* Skip to content link for keyboard users */}
                        <a href="#content" className="skip-link">Saltar al contenido principal</a>
                        <main id="content" style={{ padding: "1rem" }}>{children}</main>
                        <NextSectionBtn />
                        <Footer />
                    </PortalManager>
                </Providers>
            </body>
        </html>
    );
}
