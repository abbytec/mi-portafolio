// app/api/projects/route.ts
import { NextResponse } from "next/server";

export interface Education {
	paths: LearningPath[];
	stacks: StackTechnology[];
	courses: Course[];
}

interface LearningPath {
	name: string;
	period: string;
	coursesIds: string[]; // IDs de cursos
	url?: string;
	technologiesIds: string[]; // IDs de stacks
}

interface Course {
	id: string;
	individual: boolean;
	title: string;
	description: string;
	period: string;
	url?: string;
	technologiesIds: string[]; // IDs de stacks
}

interface StackTechnology {
	id: string;
	name: string;
	color?: string;
	isCategory?: boolean;
}

const jsonData: Education = {
	paths: [
		{
			name: "On-Page SEO Training Course (Udemy)",
			period: "2 hs",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"desarrollo-web",
				"bootstrap",
				"sass-scss",
				"rxjs",
				"reactjs",
				"angular",
				"vuejs",
				"nodejs",
				"nextjs",
				"redux",
				"nuxtjs",
				"loopback-4",
				"electron",
			],
		},
		{
			name: "Conviértete en diseñador web front-end (LinkedIn)",
			period: "39 hs",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"desarrollo-web",
				"bootstrap",
				"sass-scss",
				"rxjs",
				"reactjs",
				"angular",
				"vuejs",
				"nodejs",
				"nextjs",
				"redux",
				"nuxtjs",
				"loopback-4",
				"electron",
			],
		},
		{
			name: "Ponte al día como desarrollador web: Node.Js (LinkedIn)",
			period: "17 hs",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"desarrollo-web",
				"bootstrap",
				"sass-scss",
				"rxjs",
				"reactjs",
				"angular",
				"vuejs",
				"nodejs",
				"nextjs",
				"redux",
				"nuxtjs",
				"loopback-4",
				"electron",
			],
		},
		{
			name: "Conviértete en desarrollador Angular (LinkedIn)",
			period: "20 hs",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"desarrollo-web",
				"bootstrap",
				"sass-scss",
				"rxjs",
				"reactjs",
				"angular",
				"vuejs",
				"nodejs",
				"nextjs",
				"redux",
				"nuxtjs",
				"loopback-4",
				"electron",
			],
		},
		{
			name: "Conviértete en desarrollador web front-end (LinkedIn)",
			period: "25 hs",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"desarrollo-web",
				"bootstrap",
				"sass-scss",
				"rxjs",
				"reactjs",
				"angular",
				"vuejs",
				"nodejs",
				"nextjs",
				"redux",
				"nuxtjs",
				"loopback-4",
				"electron",
			],
		},
		{
			name: "Conviértete en especialista en desarrollo de ecosistemas (LinkedIn)",
			period: "24 hs",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"desarrollo-web",
				"bootstrap",
				"sass-scss",
				"rxjs",
				"reactjs",
				"angular",
				"vuejs",
				"nodejs",
				"nextjs",
				"redux",
				"nuxtjs",
				"loopback-4",
				"electron",
			],
		},
		{
			name: "Conviértete en especialista en desarrollo JavaScript (LinkedIn)",
			period: "18 hs",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"desarrollo-web",
				"bootstrap",
				"sass-scss",
				"rxjs",
				"reactjs",
				"angular",
				"vuejs",
				"nodejs",
				"nextjs",
				"redux",
				"nuxtjs",
				"loopback-4",
				"electron",
			],
		},

		{
			name: "Building Your Java Skills (LinkedIn)",
			period: "16 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "Conviértete en especialista en desarrollo Python (LinkedIn)",
			period: "13 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["desarrollo-software", "python"],
		},
		{
			name: "Getting Started as a Java Developer (LinkedIn)",
			period: "19 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "JAVA Course (Sololearn)",
			period: "N/A",
			coursesIds: [],
			url: "",
			technologiesIds: ["desarrollo-software", "java"],
		},

		{
			name: "Introducción | Formación en Datos e Inteligencia Artificial (Secretaría de Economía del Conocimiento)",
			period: "50 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["ciencia-de-datos", "mysql", "postgresql", "mongodb", "redis", "couchbase", "elasticsearch", "neo4j"],
		},
		{
			name: "Become a NoSQL Developer (LinkedIn)",
			period: "15 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["ciencia-de-datos", "mysql", "postgresql", "mongodb", "redis", "couchbase", "elasticsearch", "neo4j"],
		},
		{
			name: "SQL Course (Sololearn)",
			period: "N/A",
			coursesIds: [],
			url: "",
			technologiesIds: ["ciencia-de-datos", "mysql", "postgresql", "mongodb", "redis", "couchbase", "elasticsearch", "neo4j"],
		},

		{
			name: "Career Essentials in System Administration (Microsoft & LinkedIn)",
			period: "5 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			name: "Networking Basics (Cisco Networking Academy)",
			period: "22 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			name: "Networking Devices and Initial Configuration (Cisco Networking Academy)",
			period: "22 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			name: "Introducción a la Seguridad Cibernética (Cisco)",
			period: "6 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			name: "Seminario: Conceptos Prácticos de la seguridad en Informática (FCA.02.18, UNDEF)",
			period: "12 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["seguridad-y-redes"],
		},

		{
			name: "Conviértete en diseñador/a UI-UX (LinkedIn)",
			period: "16 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["genericos"],
		},
		{
			name: "Mejora la comunicación en el ámbito empresarial (LinkedIn)",
			period: "4 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["genericos"],
		},
		{
			name: "Destaca en tus habilidades empresariales para la pequeña empresa (LinkedIn)",
			period: "4 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["genericos"],
		},
		{
			name: "Mejora tus habilidades para resolver problemas (LinkedIn)",
			period: "9.5 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["genericos"],
		},
		{
			name: "Taller de Capacitación en Vigilancia Tecnológica e Inteligencia Estratégica (UNDEF)",
			period: "N/A",
			coursesIds: [],
			url: "",
			technologiesIds: ["genericos"],
		},

		{
			name: "Cursos introductorios y/o ejercitaciones (varios)",
			period: "N/A",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"introductorios",
				"c-plus-plus",
				"c-sharp",
				"go",
				"html",
				"css",
				"solidity",
				"assembler",
				"flutter",
				"react-native",
				"native-script",
				"soporte-it",
				"fotografia",
				"computacion-cuantica",
			],
		},
	],
	stacks: [
		{ id: "desarrollo-web", name: "Desarrollo Web", isCategory: true },
		{ id: "bootstrap", name: "Bootstrap" },
		{ id: "sass-scss", name: "SASS/SCSS" },
		{ id: "rxjs", name: "RxJS" },
		{ id: "reactjs", name: "ReactJS" },
		{ id: "angular", name: "Angular" },
		{ id: "vuejs", name: "Vue.js" },
		{ id: "nodejs", name: "NodeJS" },
		{ id: "nextjs", name: "Next.js" },
		{ id: "redux", name: "Redux" },
		{ id: "nuxtjs", name: "Nuxt.js" },
		{ id: "loopback-4", name: "LoopBack 4" },
		{ id: "electron", name: "Electron" },

		{ id: "desarrollo-software", name: "Desarrollo de Software", isCategory: true },
		{ id: "java", name: "Java" },
		{ id: "python", name: "Python" },

		{ id: "ciencia-de-datos", name: "Ciencia de datos", isCategory: true },
		{ id: "mysql", name: "MySQL" },
		{ id: "postgresql", name: "PostgreSQL" },
		{ id: "mongodb", name: "MongoDB" },
		{ id: "redis", name: "Redis" },
		{ id: "couchbase", name: "Couchbase" },
		{ id: "elasticsearch", name: "ElasticSearch" },
		{ id: "neo4j", name: "Neo4j" },

		{ id: "seguridad-y-redes", name: "Seguridad y Redes", isCategory: true },

		{ id: "genericos", name: "Genéricos", isCategory: true },

		{ id: "introductorios", name: "Cursos Introductorios", isCategory: true },
		{ id: "c-plus-plus", name: "C++" },
		{ id: "c-sharp", name: "C#" },
		{ id: "go", name: "Go" },
		{ id: "html", name: "HTML" },
		{ id: "css", name: "CSS" },
		{ id: "solidity", name: "Solidity" },
		{ id: "assembler", name: "Assembler" },
		{ id: "flutter", name: "Flutter" },
		{ id: "react-native", name: "React Native" },
		{ id: "native-script", name: "Native Script" },
		{ id: "soporte-it", name: "Soporte IT" },
		{ id: "fotografia", name: "Fotografía" },
		{ id: "computacion-cuantica", name: "Computación Cuántica" },
	],
	courses: [
		{
			id: "1",
			individual: true,
			title: "Curso 1",
			description: "Descripción del curso 1",
			period: "2021-2022",
			url: "https://example.com/curso1",
			technologiesIds: ["java", "python"],
		},
	],
};

export async function GET() {
	return NextResponse.json(jsonData);
}
