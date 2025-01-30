/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState, useMemo } from "react";
import { Heading, Text, Card, CardHeader, CardBody, Button, ButtonGroup, Box } from "@chakra-ui/react";
import { Education, StackIds } from "../api/education/route";
import { Link } from "@chakra-ui/next-js";

export default function EducationPage() {
	const [education, setEducation] = useState<Education | null>(null);
	// Estado para la categoría seleccionada
	const [selectedCategoryStack, setSelectedCategoryStack] = useState<string | null>(null);
	// Estado para el sub-stack seleccionado
	const [selectedSubStack, setSelectedSubStack] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/api/education");
			const data = await res.json();
			setEducation(data);
		};
		fetchData();
	}, []);

	const filteredPaths = useMemo(() => {
		// Si no hay categoría seleccionada, mostramos todos los paths
		if (!selectedCategoryStack) {
			return education?.paths;
		}
		// Filtrar solo los paths que contengan la categoría en sus technologiesIds
		return education?.paths.filter((path) => path.technologiesIds.includes(selectedCategoryStack as StackIds));
	}, [education?.paths, selectedCategoryStack]);

	const filteredIndividualCourses = useMemo(() => {
		// Filtrar solo los cursos "individual"
		const individualCourses = education?.courses.filter((course) => course.individual);
		// Si no hay categoría seleccionada, devolver todos los individuales
		if (!selectedCategoryStack) {
			return individualCourses;
		}
		// Devolver solo los individuales que tengan la categoría en sus technologiesIds
		return individualCourses?.filter((course) => course.technologiesIds.includes(selectedCategoryStack as StackIds));
	}, [education?.courses, selectedCategoryStack]);

	// ----------------------------------------------------------------
	// Obtener los "sub-stacks" relevantes (isCategory == false)
	// según los datos YA filtrados por la categoría
	// ----------------------------------------------------------------
	const subStacks = useMemo(() => {
		if (!selectedCategoryStack) return [];

		// 1) Reunir todos los techIds que aparecen en los paths y courses filtrados
		const techIdsFromFilteredPaths = filteredPaths?.flatMap((path) => path.technologiesIds);
		const techIdsFromFilteredCourses = filteredIndividualCourses?.flatMap((course) => course.technologiesIds);

		const allTechIds = Array.from(new Set([...(techIdsFromFilteredPaths ?? []), ...(techIdsFromFilteredCourses ?? [])]));

		// 2) Filtrar los stacks que correspondan a esos techIds, con isCategory == false
		const possibleSubStacks = education?.stacks.filter((stack) => allTechIds.includes(stack.id) && !stack.isCategory);

		return possibleSubStacks;
	}, [education, filteredPaths, filteredIndividualCourses, selectedCategoryStack]);

	// ----------------------------------------------------------------
	// Aplicar el filtro secundario (sub-stack) sobre lo ya filtrado
	// ----------------------------------------------------------------
	const finalFilteredPaths = useMemo(() => {
		if (!selectedSubStack) return filteredPaths;
		return filteredPaths?.filter((path) => path.technologiesIds.includes(selectedSubStack as StackIds));
	}, [filteredPaths, selectedSubStack]);

	const finalFilteredCourses = useMemo(() => {
		if (!selectedSubStack) return filteredIndividualCourses;
		return filteredIndividualCourses?.filter((course) => course.technologiesIds.includes(selectedSubStack as StackIds));
	}, [filteredIndividualCourses, selectedSubStack]);

	if (!education) return <div>Loading...</div>;

	const mapTechIdsToNames = (techIds: string[]) => {
		return techIds
			.map((id) => {
				const found = education.stacks.find((stack) => stack.id === id);
				return found ? found.name : id;
			})
			.join(", ");
	};

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
							setSelectedSubStack(null); // Reiniciamos también el sub-stack
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
									setSelectedSubStack(null); // Reiniciamos sub-stack al cambiar de categoría
								}}
								variant={selectedCategoryStack === stack.id ? "custom" : "outline"}
								m={1}>
								{stack.name}
							</Button>
						))}
				</ButtonGroup>
			</Box>

			{/* Botones para filtrar por Sub-stacks (isCategory == false) SOLO si hay una categoría seleccionada */}
			{selectedCategoryStack && (subStacks?.length ?? 0) > 0 && (
				<Box mb={4}>
					<Text fontWeight="bold" mb={2}>
						Filtrar por Stack
					</Text>
					<ButtonGroup maxW={"100%"} flexWrap={"wrap"}>
						{/* Botón "Todos" para quitar filtro de sub-stack */}
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
						{path.url && (
							<Link href={path.url} target="_blank" color={"accent"}>
								{path.name}
							</Link>
						)}
						{!path.url && <Heading size="sm">{path.name}</Heading>}
					</CardHeader>
					<CardBody paddingTop={0}>
						<Text>Periodo: {path.period}</Text>
						<Text>Cursos: {mapTechIdsToNames(path.coursesIds)}</Text>
						<Text>Tecnologías: {mapTechIdsToNames(path.technologiesIds)}</Text>
					</CardBody>
				</Card>
			))}

			{/* Courses */}
			<h3>Cursos Individuales</h3>
			{finalFilteredCourses?.map((course) => (
				<Card key={course.id} mb={4} bg={"panel"}>
					<CardHeader paddingBottom={3}>
						{course.url && (
							<Link href={course.url} target="_blank" color={"accent"}>
								{course.title}
							</Link>
						)}
						{!course.url && <Heading size="sm">{course.title}</Heading>}
					</CardHeader>
					<CardBody paddingTop={0}>
						<Text>Descripción: {course.description}</Text>
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
		</div>
	);
}
