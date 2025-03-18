// app/contact/page.js
"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, VStack, Container, Text, HStack, Button, Icon } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function Contact() {
	return (
		<Container maxW={{ base: "container.xl" }} pt={4}>
			<h1>Contacto</h1>
			<Box py={4}>
				<h2>Redes Sociales</h2>
				<HStack spacing={4} wrap={"wrap"} my={4} justifyContent={{ base: "center", md: "flex-start" }}>
					{process.env.ANTI_DOXXING_POLICY === "true" && (
						<Link href="https://wa.me/+5493541209175" isExternal>
							<Button leftIcon={<Icon as={FaWhatsapp} />} colorScheme="green" variant="outline">
								WhatsApp
							</Button>
						</Link>
					)}

					<Link href="https://www.instagram.com/abbytec_hd" isExternal>
						<Button leftIcon={<Icon as={FaInstagram} />} colorScheme="pink" variant="outline">
							Instagram
						</Button>
					</Link>
					<Link href="https://www.linkedin.com/in/abby-pal" isExternal>
						<Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue" variant="outline">
							LinkedIn
						</Button>
					</Link>
					<Link href="https://github.com/abbytec" isExternal>
						<Button leftIcon={<Icon as={FaGithub} />} colorScheme="white" _hover={{ color: "text", bg: "panel" }} variant="outline">
							GitHub
						</Button>
					</Link>
					<Link href="https://discordapp.com/channels/@me/220683580467052544/" isExternal>
						<Button leftIcon={<Icon as={FaDiscord} />} colorScheme="purple" variant="outline">
							Discord
						</Button>
					</Link>
				</HStack>
			</Box>

			<Box py={4}>
				<h2>Servidores de Discord</h2>
				<Text mb={4}>
					Únete a{" "}
					<Link href="https://discord.gg/programacion">
						<strong>Programadores y Estudiantes</strong>
					</Link>
					, una comunidad abierta de programadores y estudiantes de todo el mundo.
				</Text>
				<Link href="https://discord.gg/programacion" isExternal>
					<Button leftIcon={<Icon as={FaDiscord} />} colorScheme="blue">
						Unirse al Servidor
					</Button>
				</Link>
				<Text mb={4} mt={6}>
					Únete a{" "}
					<Link href="https://discord.gg/vShXpyWTTq">
						<strong>Abby&apos;s Digital Cafe</strong>
					</Link>
					, mi servidor personal de Discord para charlas mas informales, actividades recreativas, recibir soporte o ayuda en
					programación y participar en eventos que fomenten el networking.
				</Text>
				<Link href="https://discord.gg/vShXpyWTTq" isExternal>
					<Button leftIcon={<Icon as={FaDiscord} />} variant={"custom2"}>
						Unirse al Servidor
					</Button>
				</Link>
			</Box>

			<Box py={4}>
				<h3>Datos de Contacto</h3>
				<VStack align="start" spacing={2}>
					<Text>
						Email:{" "}
						<Link href="mailto:gpsmurfs@gmail.com" color="accent">
							gpsmurfs@gmail.com
						</Link>
					</Text>
					{process.env.ANTI_DOXXING_POLICY === "true" && (
						<Text>
							Teléfono:{" "}
							<Link href="tel:+5493541209175" color="accent">
								+54 9 3541 209175
							</Link>
						</Text>
					)}

					<Text>Ubicación: Argentina - Cordoba</Text>
				</VStack>
			</Box>
		</Container>
	);
}
