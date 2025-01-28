"use client";
import React, { FC } from "react";
import {
	Card,
	Image,
	Text,
	Stack,
	VStack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	useDisclosure,
	ModalCloseButton,
} from "@chakra-ui/react";

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
			<Modal isOpen={isOpen} onClose={onClose} size={{ md: "4xl", base: "lg" }} isCentered variant="custom">
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody p={6}>
						<Stack direction={{ base: "column", md: "row" }} spacing={6} alignItems="center" p={6}>
							<Image src={project.imageUrl} alt={project.name} boxSize="220px" objectFit="cover" rounded="md" m={4} />
							<VStack align="flex-start" spacing={4}>
								<h2>{project.name}</h2>
								<Text>{project.longDesc}</Text>
							</VStack>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ProjectCard;
