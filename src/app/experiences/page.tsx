// app/experiencies/page.js
"use client";

import { useState, useEffect } from "react";
import { Heading, SimpleGrid, Container, Text } from "@chakra-ui/react";
import ProjectCard, { Project } from "@/components/ui/projectCard";

export default function ProjectsPage() {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchAllProjects = async () => {
			try {
				const response = await fetch("/api/projects");
				const data = await response.json();
				// Suponiendo que el JSON sea { projects: [...] }
				setProjects(data.projects);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};
		fetchAllProjects();
	}, []);

	return (
		<Container maxW="container.lg" py={8}>
			<Heading as="h1" mb={6}>
				Lista Completa de Proyectos
			</Heading>

			{projects.length === 0 ? (
				<Text>No hay proyectos disponibles</Text>
			) : (
				<SimpleGrid columns={[1, 2, 3]} spacing={6}>
					{projects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</SimpleGrid>
			)}
		</Container>
	);
}
