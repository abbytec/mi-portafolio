import { NextResponse } from "next/server";

export interface Experience {
	title: string;
	description: string;
	period: string;
	url?: string;
}

interface ExperiencesResponse {
	experiences: Experience[];
	other: string[];
}

const data: ExperiencesResponse = {
	experiences: [
		{
			title: "Superbid Exchange (Mediante Blink como consultora)",
			description:
				"Desarrollo FullStack con Java Spring (Apis Rest) y React (Typescript + Material Design). VCS utilizados: AWS Codecommit, Gitlab y Github. Utilizamos metodología Scrum (con Jira).",
			period: "2023 - Actualmente",
			url: "https://www.superbid.net/",
		},
		{
			title: "Ecomstyle",
			description:
				"Administración de Logística, optimización de web insights, desarrollo y modificación de sitios (en php) y herramientas de análisis de datos.",
			period: "2020 - 2021",
		},
	],
	other: [
		"Realizo proyectos como freelancer y en equipo, utilizando tableros kanban (Trello) para la gestión de tareas en proyectos grandes. Utilizo Kubernetes y Github Actions para administrar el flujo de CI/CD de los mismos.",
		"Realicé reparación de computadoras y celulares (Local: Cyber Unno).",
		"Experiencia en atención al cliente: Recepcionista en Hotel Temu (9 temporadas) y vendedora en una Forrajería local (1 temporada).",
	],
};
export async function GET() {
	return NextResponse.json(data);
}
