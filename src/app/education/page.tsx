/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState, useMemo } from "react";
import {
	Heading,
	Text,
	Card,
	CardHeader,
	CardBody,
	Button,
	ButtonGroup,
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
	List,
	ListItem,
} from "@chakra-ui/react";
import { Education, StackIds } from "../api/education/route";
import { Link } from "@chakra-ui/next-js";

export default function EducationPage() {
	const [education, setEducation] = useState<Education | null>(null);

	// Para filtrar por categoría
	const [selectedCategoryStack, setSelectedCategoryStack] = useState<string | null>(null);

	// Para filtrar por sub-stack
	const [selectedSubStack, setSelectedSubStack] = useState<string | null>(null);

	// --- Estados para el Modal ---
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedPathCourses, setSelectedPathCourses] = useState<string[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/api/education");
			const data = await res.json();
			setEducation(data);
		};
		fetchData();
	}, []);

	// --- Lógica de filtrado ---
	const filteredPaths = useMemo(() => {
		if (!selectedCategoryStack) {
			return education?.paths;
		}
		return education?.paths.filter((path) => path.technologiesIds.includes(selectedCategoryStack as StackIds));
	}, [education?.paths, selectedCategoryStack]);

	const filteredIndividualCourses = useMemo(() => {
		const individualCourses = education?.courses.filter((course) => course.individual);
		if (!selectedCategoryStack) {
			return individualCourses;
		}
		return individualCourses?.filter((course) => course.technologiesIds.includes(selectedCategoryStack as StackIds));
	}, [education?.courses, selectedCategoryStack]);

	// Sub-stacks posibles, basados en la categoría seleccionada
	const subStacks = useMemo(() => {
		if (!selectedCategoryStack) return [];

		const techIdsFromFilteredPaths = filteredPaths?.flatMap((path) => path.technologiesIds) || [];
		const techIdsFromFilteredCourses = filteredIndividualCourses?.flatMap((course) => course.technologiesIds) || [];

		const allTechIds = Array.from(new Set([...techIdsFromFilteredPaths, ...techIdsFromFilteredCourses]));

		return education?.stacks.filter((stack) => allTechIds.includes(stack.id) && !stack.isCategory) || [];
	}, [education, filteredPaths, filteredIndividualCourses, selectedCategoryStack]);

	// Se aplicará al Paths y a los cursos individuales
	const finalFilteredPaths = useMemo(() => {
		if (!selectedSubStack) return filteredPaths;
		return filteredPaths?.filter((path) => path.technologiesIds.includes(selectedSubStack as StackIds));
	}, [filteredPaths, selectedSubStack]);

	const finalFilteredCourses = useMemo(() => {
		if (!selectedSubStack) return filteredIndividualCourses;
		return filteredIndividualCourses?.filter((course) => course.technologiesIds.includes(selectedSubStack as StackIds));
	}, [filteredIndividualCourses, selectedSubStack]);

	// --- Helpers para mapear IDs a nombres ---
	const mapTechIdsToNames = (techIds: string[]) => {
		return techIds
			.map((id) => {
				const found = education?.stacks.find((stack) => stack.id === id);
				return found ? found.name : id;
			})
			.join(", ");
	};

	// --- Función para abrir el modal con los coursesIds de un path específico ---
	const handleOpenCoursesModal = (event: React.MouseEvent<HTMLAnchorElement>, coursesIds: string[]) => {
		setSelectedPathCourses(coursesIds);
		onOpen();
	};

	if (!education) return <div>Loading...</div>;

	return (
		<div>
			<h2>Educación</h2>

			{/* Botones para filtrar por Categoría (isCategory == true) */}
			<Box mb={4}>
				<Text fontWeight="bold" mb={2}>
					Filtrar por Categoría
				</Text>
				<ButtonGroup maxW={"100%"} flexWrap={"wrap"}>
					{/* Botón "Todos" */}
					<Button
						onClick={() => {
							setSelectedCategoryStack(null);
							setSelectedSubStack(null);
						}}
						variant={!selectedCategoryStack ? "custom" : "outline"}
						m={1}>
						Todos
					</Button>
					{education.stacks
						.filter((stack) => stack.isCategory)
						.map((stack) => (
							<Button
								key={stack.id}
								onClick={() => {
									setSelectedCategoryStack(stack.id);
									setSelectedSubStack(null);
								}}
								variant={selectedCategoryStack === stack.id ? "custom" : "outline"}
								m={1}>
								{stack.name}
							</Button>
						))}
				</ButtonGroup>
			</Box>

			{/* Botones para filtrar por Sub-stacks */}
			{selectedCategoryStack && (subStacks?.length ?? 0) > 0 && (
				<Box mb={4}>
					<Text fontWeight="bold" mb={2}>
						Filtrar por Stack
					</Text>
					<ButtonGroup maxW={"100%"} flexWrap={"wrap"}>
						{/* Botón "Todos" */}
						<Button onClick={() => setSelectedSubStack(null)} variant={!selectedSubStack ? "custom2" : "outline"} m={1}>
							Todos
						</Button>
						{subStacks?.map((stack) => (
							<Button
								key={stack.id}
								onClick={() => setSelectedSubStack(stack.id)}
								variant={selectedSubStack === stack.id ? "custom2" : "outline"}
								m={1}>
								{stack.name}
							</Button>
						))}
					</ButtonGroup>
				</Box>
			)}

			{/* Paths */}
			<h3>Rutas de Aprendizaje</h3>
			{finalFilteredPaths?.map((path) => (
				<Card key={path.name} mb={4} bg={"panel"}>
					<CardHeader paddingBottom={3}>
						{path.url ? (
							<Link href={path.url} target="_blank" color={"secondary"}>
								{path.name}
							</Link>
						) : (
							<Heading size="sm">{path.name}</Heading>
						)}
					</CardHeader>
					<CardBody paddingTop={0}>
						<Text>Periodo: {path.period}</Text>

						{path.coursesIds.length > 0 && (
							<Link
								href={"#"}
								size="sm"
								colorScheme="blue"
								mt={2}
								onClick={(e) => handleOpenCoursesModal(e, path.coursesIds)}
								color={"accent"}>
								Ver itinerario de cursos
							</Link>
						)}

						<Text mt={2}>Tecnologías: {mapTechIdsToNames(path.technologiesIds)}</Text>
					</CardBody>
				</Card>
			))}

			{/* Courses */}
			<h3>Cursos Individuales</h3>
			{finalFilteredCourses?.map((course) => (
				<Card key={course.id} mb={4} bg={"panel"}>
					<CardHeader paddingBottom={3}>
						{course.url ? (
							<Link href={course.url} target="_blank" color={"accent"}>
								{course.title}
							</Link>
						) : (
							<Heading size="sm">{course.title}</Heading>
						)}
					</CardHeader>
					<CardBody paddingTop={0}>
						{course.description && <Text>Descripción: {course.description}</Text>}
						<Text>Período: {course.period}</Text>
						<Text>Tecnologías: {mapTechIdsToNames(course.technologiesIds)}</Text>
						{course.url && (
							<Text as="a" href={course.url} color="blue.500" target="_blank">
								Ver más
							</Text>
						)}
					</CardBody>
				</Card>
			))}

			{/* Modal para mostrar los cursos de la ruta seleccionada */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg="panel">
					<ModalHeader>Cursos de la Ruta</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<List spacing={2}>
							{selectedPathCourses.map((courseId, i) => {
								// Obtenemos el curso completo
								const course = education.courses.find((c) => c.id === courseId);
								if (!course) return null;

								return (
									<ListItem
										key={course.id}
										borderBottom={i < selectedPathCourses.length - 1 ? "1px solid #ccc" : "none"}
										pb={2}
										mb={2}>
										{/* Título (con link si tiene url) */}
										{course.url ? (
											<Link href={course.url} target="_blank" color={"accent"}>
												{course.title}
											</Link>
										) : (
											<Text fontWeight="bold">{course.title}</Text>
										)}

										{course.description && <Text fontSize="sm">Descripción: {course.description}</Text>}
										<Text fontSize="sm">Período: {course.period}</Text>
										<Text fontSize="sm">Tecnologías: {mapTechIdsToNames(course.technologiesIds)}</Text>
									</ListItem>
								);
							})}
						</List>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
}
