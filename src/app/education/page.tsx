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
	Flex,
	Container,
	CardFooter,
	Icon,
} from "@chakra-ui/react";
import { Education, StackIds, StackTechnology } from "../api/education/route";
import { Link } from "@chakra-ui/next-js";
import { compareTimes } from "@/utils/time";
import { MdAccessTime } from "react-icons/md";

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
			const data: Education = await res.json();
			data.paths = data.paths.toSorted((a, b) => compareTimes(a.duration, b.duration));
			data.courses = data.courses.toSorted((a, b) => compareTimes(a.duration, b.duration));
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
		const technologies: StackTechnology[] = techIds
			.map((id) => {
				return education?.stacks.filter((stack) => !stack.isCategory).find((stack) => stack.id === id);
			})
			.filter(Boolean) as StackTechnology[];

		return (
			<Text mt={2} display={"flex"} flexWrap={"wrap"} mb={6}>
				{technologies.length !== 0 && (
					<Text mr={2} fontFamily={"cursive"}>
						Tecnologías:
					</Text>
				)}

				{technologies.map((tech, idx) => (
					<Text key={tech.id} color={tech?.color} mr={2} fontFamily={"cursive"}>
						{tech?.name}
						{idx !== technologies.length - 1 && ", "}
					</Text>
				))}
			</Text>
		);
	};

	// --- Función para abrir el modal con los coursesIds de un path específico ---
	const handleOpenCoursesModal = (event: React.MouseEvent<HTMLAnchorElement>, coursesIds: string[]) => {
		event.preventDefault();
		setSelectedPathCourses(coursesIds);
		onOpen();
	};

	if (!education) return <div>Loading...</div>;

	console.log(finalFilteredPaths);

	return (
		<Container maxW={{ base: "container.xl" }} py={8}>
			<h1>Educación</h1>
			<h2>Formación académica</h2>
			<Flex mb={4} gap={4} justifyContent={"space-between"} wrap={"wrap"}>
				<Card variant={"custom"} p={4} w={"600px"}>
					<Link href="https://www.iua.edu.ar/" fontWeight="bold" mb={2} color={"secondary"}>
						Instituto Universitario Aeronáutico
					</Link>
					<Text>Formación Universitaria</Text>
					<Text>
						Estudiante avanada en <strong color="accent">Ingeniería en Informática.</strong>
					</Text>
				</Card>
				<Card variant={"custom"} p={4} w={"600px"}>
					<Link href="https://www.iico.com.ar/" fontWeight="bold" mb={2} color={"secondary"}>
						Instituto Industrial Cristo Obrero (IICO)
					</Link>
					<Text>Formación Secundaria</Text>
					<Text>
						Titulo: <strong color="accent">Tecnico mecánico.</strong>
					</Text>
				</Card>
			</Flex>

			<h2>Formación adicional</h2>

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
			{finalFilteredPaths?.length !== 0 && (
				<>
					<h3 style={{ margin: "24px auto" }}>Rutas de Aprendizaje</h3>
					<Flex flexWrap={"wrap"} gap={6} justifyContent={"center"}>
						{finalFilteredPaths?.map((path) => {
							return (
								<Card key={path.name} w={600} variant={"custom"}>
									<CardHeader paddingBottom={3}>
										{path.duration && (
											<Text display={"flex"} alignItems={"center"} fontFamily={"cursive"} mb={3}>
												<Icon as={MdAccessTime} mr={2} color={"accent"}></Icon>
												Duración: {path.duration}
											</Text>
										)}
										{path.url ? (
											<Link href={path.url} target="_blank" color={"secondary"}>
												{path.name}
											</Link>
										) : (
											<Heading size="sm">{path.name}</Heading>
										)}
									</CardHeader>
									<CardBody paddingTop={0} pb={0}>
										{mapTechIdsToNames(path.technologiesIds)}
									</CardBody>
									{path.coursesIds.length > 0 && (
										<CardFooter justify={"flex-end"} pt={0}>
											<Link
												href={"#"}
												size="sm"
												colorScheme="blue"
												onClick={(e) => handleOpenCoursesModal(e, path.coursesIds)}
												color={"accent"}>
												Ver itinerario &gt;
											</Link>
										</CardFooter>
									)}
								</Card>
							);
						})}
					</Flex>
				</>
			)}

			{/* Courses */}
			{finalFilteredCourses?.length !== 0 && (
				<>
					<h3 style={{ margin: "24px auto" }}>Cursos Individuales</h3>
					<Flex flexWrap={"wrap"} gap={6} justifyContent={"center"}>
						{finalFilteredCourses?.map((course) => {
							return (
								<Card key={course.id} variant={"custom"} w={600}>
									<CardHeader paddingBottom={3}>
										{course.duration && (
											<Text display={"flex"} alignItems={"center"} fontFamily={"cursive"} mb={3}>
												<Icon as={MdAccessTime} mr={2} color={"accent"}></Icon>
												Duración: {course.duration}
											</Text>
										)}
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
										{mapTechIdsToNames(course.technologiesIds)}
									</CardBody>
								</Card>
							);
						})}
					</Flex>
				</>
			)}

			{/* Modal para mostrar los cursos de la ruta seleccionada */}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg="panel">
					<ModalHeader>Cursos de la Ruta</ModalHeader>
					<ModalCloseButton />
					<ModalBody background={"cardBg"}>
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
										{course.duration && <Text fontSize="sm">Duración: {course.duration}</Text>}
										{mapTechIdsToNames(course.technologiesIds)}
									</ListItem>
								);
							})}
						</List>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Container>
	);
}
