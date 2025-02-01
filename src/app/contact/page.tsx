// app/contact/page.js
"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, VStack, Container, Text, HStack, Button, Icon } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function Contact() {
	return (
		<Container maxW={{ base: "container.xl" }} py={8}>
			<h1>Contacto</h1>
			<Box>
				<h2>Redes Sociales</h2>
				<HStack spacing={4} wrap={"wrap"} my={4}>
					<Link href="https://wa.me/+5493541209175" isExternal>
						<Button leftIcon={<Icon as={FaWhatsapp} />} colorScheme="green" variant="outline">
							WhatsApp
						</Button>
					</Link>
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
				<h3>Servidor de Discord</h3>
				<Text mb={4}>
					Únete a mi servidor de Discord para conectarte con la comunidad, recibir soporte y participar en charlas sobre desarrollo y
					tecnología.
				</Text>
				<Link href="https://discord.gg/vShXpyWTTq" isExternal>
					<Button leftIcon={<Icon as={FaDiscord} />} background={"accent"}>
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
					<Text>
						Teléfono:{" "}
						<Link href="tel:+5493541209175" color="accent">
							+54 9 3541 209175
						</Link>
					</Text>
					<Text>Ubicación: Argentina - Cordoba</Text>
				</VStack>
			</Box>
		</Container>
	);
}
