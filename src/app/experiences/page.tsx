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
		<Container maxW="container.lg" pt={4}>
			<h1>Experiencias</h1>
			<Box className="blocky-style" mt={2}>
				<h2>Laborales</h2>
				{data.experiences.map((exp, expidx) => (
					<Box key={exp.title} mb={expidx !== data.experiences.length - 1 ? 6 : 0}>
						{exp.url && (
							<Link href={exp.url} as="h3" style={{ fontSize: "22px" }} mb={1}>
								{exp.title}
							</Link>
						)}

						{!exp.url && (
							<Heading as="h3" style={{ fontSize: "22px" }} mb={1}>
								{exp.title}
							</Heading>
						)}

						<Text fontStyle="italic" mb={2} color={"accent"}>
							{exp.period}
						</Text>
						<Text>{exp.description}</Text>
					</Box>
				))}
			</Box>
			<Box className="blocky-style">
				<h2>Actividades Extra</h2>
				{data.other.map((activity, i) => (
					<Text key={"activity-" + i} mb={2}>
						• {activity}
					</Text>
				))}
			</Box>
		</Container>
	);
}
