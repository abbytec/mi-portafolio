"use client";
import React, { FC } from "react";
import { Card, Image, Text, HStack, VStack, Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from "@chakra-ui/react";

// Definimos la interfaz del proyecto
export interface Project {
	name: string;
	featured: boolean;
	shortDesc: string;
	longDesc: string;
	imageUrl: string;
}

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Card p={5} rounded="md" shadow="md" variant="custom" cursor="pointer" onClick={onOpen}>
				<Image src={project.imageUrl} alt={project.name} rounded="md" mb={3} />
				<h3>{project.name}</h3>
				<Text>{project.shortDesc}</Text>
			</Card>

			{/* Modal para mostrar información completa */}
			<Modal isOpen={isOpen} onClose={onClose} size={"4xl"} isCentered variant="custom">
				<ModalOverlay />
				<ModalContent>
					<ModalBody p={6}>
						<HStack spacing={6} alignItems="flex-start">
							<Image src={project.imageUrl} alt={project.name} boxSize="300px" objectFit="contain" rounded="md" />
							<VStack align="flex-start" spacing={4}>
								<h2>{project.name}</h2>
								<Text>{project.longDesc}</Text>
							</VStack>
						</HStack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ProjectCard;
