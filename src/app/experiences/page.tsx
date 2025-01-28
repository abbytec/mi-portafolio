// app/experiencies/page.js
"use client";

import { useEffect, useState } from "react";
import { Container, Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

interface Experience {
	title: string;
	description: string;
	period: string;
	url?: string;
}

interface ExperiencesResponse {
	experiences: Experience[];
	other: string[];
}

export default function ExperienciasPage() {
	const [data, setData] = useState<ExperiencesResponse | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/api/experiences");
			const json = await res.json();
			setData(json);
		};
		fetchData();
	}, []);

	if (!data) return <Text>Cargando...</Text>;

	return (
		<Container maxW="container.lg" py={8}>
			<h1>Experiencias</h1>
			{data.experiences.map((exp) => (
				<Box key={exp.title} mb={6}>
					{exp.url && (
						<Link href={exp.url} as="h3" style={{ fontSize: "24px" }} mb={1}>
							{exp.title}
						</Link>
					)}

					{!exp.url && (
						<Heading as="h3" style={{ fontSize: "24px" }} mb={1}>
							{exp.title}
						</Heading>
					)}

					<Text fontStyle="italic" mb={2} color={"accent"}>
						{exp.period}
					</Text>
					<Text>{exp.description}</Text>
				</Box>
			))}

			<h2>Actividades Extra</h2>
			{data.other.map((activity, i) => (
				<Text key={"activity-" + i} mb={2}>
					• {activity}
				</Text>
			))}
		</Container>
	);
}
