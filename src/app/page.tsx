"use client";

import ProjectCard, { Project } from "@/components/ui/projectCard";
import { Link } from "@chakra-ui/next-js";
import {
	Box,
	Text,
	VStack,
	Stack,
	SimpleGrid,
	Container,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
	useDisclosure,
	ModalCloseButton,
	Button,
	Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch("/api/projects");
				const data = await response.json();
				const featured = data.projects.filter((p: Project) => p.featured);
				setFeaturedProjects(featured);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};
		fetchProjects();
	}, []);
	const MotionModalContent = motion(ModalContent);
	return (
		<Container maxW={{ base: "container.xl" }} py={8}>
			<Stack direction={{ base: "column", md: "row" }} spacing={10}>
				<Box
					h="220px"
					w="185px!important"
					overflow="hidden"
					rounded="lg"
					cursor="pointer"
					mx={{ base: "auto", md: "0" }} // Centrado horizontal en móvil
					position="relative"
					onClick={onOpen}>
					<Image src="/pfp.jpg" alt="Mi Foto" objectFit="cover" w="100%" h="100%" transform={"scaleX(-1)"} />
					<Icon
						as={FaSearch}
						position="absolute"
						top="8px"
						right="8px"
						boxSize={6}
						color="gray.100"
						bg="rgba(0, 0, 0, 0.6)"
						p={1}
						rounded="full"
					/>
				</Box>
				{/* Modal con la imagen grande */}
				<Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
					<ModalOverlay />
					<MotionModalContent
						initial={{ opacity: 0, rotate: 0, scaleX: -1 }}
						animate={{ opacity: 1, rotate: 0, scaleX: 1 }}
						exit={{ opacity: 0, rotate: 0, scaleX: -1 }}
						transition={{ duration: 0.5, ease: "easeOut" }}>
						<ModalCloseButton color={"accent"} fontSize={"large"} />
						<ModalBody p={0}>
							<Image src="/pfp.jpg" alt="Mi Foto Grande" objectFit="contain" w="100%" h="auto" />
						</ModalBody>
					</MotionModalContent>
				</Modal>
				<VStack spacing={6} textAlign="center">
					<h1 style={{ fontWeight: "bold" }}>¡Hola! Me llamo Abigaíl</h1>
					<Text fontSize="xl">Soy una desarrolladora Full Stack enfocada en crear soluciones de software innovadoras.</Text>
					<Text
						display={{ base: "none", md: "block" }}
						fontSize="md"
						marginRight={"auto"}
						style={{ color: "var(--chakra-colors-accent" }}>
						Gracias por pasarte por aqui!
					</Text>
				</VStack>
			</Stack>

			<Box mt={10}>
				<h2>Acerca de mí</h2>
				<Text mb={4} lineHeight={"1.8"} style={{ textIndent: "2em" }}>
					Programadora autodidacta desde temprana edad, interesada en ampliar mis experiencias en el ámbito del software a nivel
					empresarial. A veces doy tutorías, fomentando el aprendizaje continuo. Disfruto de generar nuevas ideas y trabajar en equipo
					para concretarlas.
				</Text>
				<Text mb={4} lineHeight={"1.8"} style={{ textIndent: "2em" }}>
					Fuera del horario laboral, formo parte del STAFF de{" "}
					<Link href="https://discord.com/invite/programacion">
						<strong>Programadores y Estudiantes</strong>
					</Link>
					, una comunidad de Discord con más de 80 mil usuarios y top 5 global en educación en la plataforma. Donde se realizan
					talleres, y se proporciona un espacio para que nuestros usuarios puedan ayudarse mutuamente.
				</Text>
				<Text mb={4} lineHeight={"1.8"} style={{ textIndent: "2em" }}>
					Soy secretaria en{" "}
					<Link href="https://www.instagram.com/rotaractvillacarlospaz/">
						<strong>Rotaract Club Villa Carlos Paz</strong>
					</Link>
					, ONG dedicada al servicio a la comunidad, liderazgo, compañerismo e internacionalización. Hemos organizado eventos de
					capacitación presenciales para clubes de diferentes localidades del país, obteniendo reconocimiento de la legislatura de la
					Provincia de Cordoba.
				</Text>
				<Text lineHeight={"1.8"}>
					<b style={{ color: "var(--chakra-colors-secondary)" }}>Fortalezas y debilidades:</b>&ensp;Tengo Trastorno de Deficit de
					Atención e Hiperactividad diagnosticado, por lo que para evitar perder la concentración, suelo realizar un esfuerzo extra a
					la hora de organizar (detalladamente) mis tareas o espacio de trabajo mediante notas en papel u archivos de texto.
					<br />A la hora de programar, con frecuencia entro en <b>hiperfoco</b> (un momento donde se concentra toda esa actividad
					neuronal en una tarea específica). Esto me permite resolver tareas dificiles para la mayoría de mis compañeros, obteniendo
					así con frecuencia su reconocimiento.
				</Text>
			</Box>
			<Box mt={10}>
				<h2>Idiomas que hablo</h2>
				<Box display={"flex"} gap={4}>
					<Button p={5} rounded="md" shadow="md" display={"flex"} alignItems={"center"} title="Spanish">
						<Image src="/flags/es.png" aria-label="Spanish" w={"24px"} alt="Spanish" rounded="100" marginRight={2} />
						<h3>C2</h3>
					</Button>
					<Button p={5} rounded="md" shadow="md" display={"flex"} alignItems={"center"} title="English">
						<Image src="/flags/en.png" aria-label="English" w={"24px"} alt="English" rounded="100" marginRight={2} />
						<h3>B2</h3>
					</Button>
					<Button p={5} rounded="md" shadow="md" display={"flex"} alignItems={"center"} title="Portuguese">
						<Image src="/flags/pt.png" aria-label="Portuguese" w={"24px"} alt="Portuguese" rounded="100" marginRight={2} />
						<h3>B1</h3>
					</Button>
				</Box>
				<Text mt={5}>Dispongo tanto de ciudadanía 🇦🇷 Argentina como 🇮🇹 Italiana.</Text>
			</Box>
			{process.env.TOGGLE_PROJECTS === "true" && (
				<Box mt={10}>
					<h2>Destacados</h2>
					<SimpleGrid columns={[1, 2, 3]} spacing={6}>
						{featuredProjects.map((project: Project) => (
							<ProjectCard key={project.name} project={project} />
						))}
					</SimpleGrid>
				</Box>
			)}
		</Container>
	);
}
