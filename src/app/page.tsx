"use client";

import ProjectCard, { Project } from "@/components/ui/projectCard";
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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch("/api/projects");
				const data = await response.json();
				// Si tu endpoint es { projects: [...] }, ajusta aquí
				const featured = data.projects.filter((p: Project) => p.featured);
				setFeaturedProjects(featured);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};
		fetchProjects();
	}, []);

	return (
		<Container maxW="container.xl" py={8}>
			<Stack direction={{ base: "column", md: "row" }} spacing={10}>
				<Box
					w={{ base: "185px", md: "20%" }}
					h="220px"
					maxW="185px"
					overflow="hidden"
					rounded="lg"
					cursor="pointer"
					mx={{ base: "auto", md: "0" }} // Centrado horizontal en móvil
					onClick={onOpen}>
					<Image src="/pfp.jpg" alt="Mi Foto" objectFit="cover" w="100%" h="100%" />
				</Box>

				{/* Modal con la imagen grande */}
				<Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
					<ModalOverlay />
					<ModalContent>
						<ModalBody p={0}>
							<Image src="/pfp.jpg" alt="Mi Foto Grande" objectFit="contain" w="100%" h="auto" />
						</ModalBody>
					</ModalContent>
				</Modal>
				<VStack spacing={6} textAlign="center">
					<h1 style={{ fontWeight: "bold" }}>¡Hola! Me llamo Abigaíl</h1>
					<Text fontSize="xl">Soy una desarrolladora Full Stack enfocada en crear experiencias innovadoras.</Text>
				</VStack>
			</Stack>

			<Box mt={16}>
				<h2>Acerca de mí</h2>
				<Text mb={4}>
					Programadora autodidacta desde temprana edad, interesada en ampliar mis experiencias en el ámbito del software a nivel
					empresarial.
				</Text>
				<Text mb={4}>
					Fuera del horario laboral, formo parte del STAFF de Programación y Estudiantes, una comunidad de Discord con más de 80 mil
					usuarios y top 5 global en educación.
				</Text>
				<Text mb={4}>
					También soy secretaria en Rotaract Club Villa Carlos Paz, ONG dedicada al liderazgo, compañerismo, servicio a la comunidad e
					internacionalización.
				</Text>
				<Text mb={4}>
					Programo diversos softwares y/o doy tutorías, fomentando el aprendizaje continuo. Disfruto de generar nuevas ideas y trabajar
					en equipo para concretarlas.
				</Text>
				<Text>
					<strong>Principal valor:</strong> Me adapto rápido a nuevos desafíos, tecnologías y códigos, logrando solucionar toda tarea
					en tiempo y forma.
				</Text>
			</Box>
			<Box mt={16}>
				<h2>Destacados</h2>
				<SimpleGrid columns={[1, 2, 3]} spacing={6}>
					{featuredProjects.map((project: Project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</SimpleGrid>
			</Box>
		</Container>
	);
}
