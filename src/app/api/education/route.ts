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
	technologiesIds: StackIds[]; // IDs de stacks
}

interface Course {
	id: string;
	individual: boolean;
	title: string;
	description?: string;
	period: string;
	url?: string;
	technologiesIds: StackIds[]; // IDs de stacks
}

interface StackTechnology {
	id: StackIds;
	name: string;
	color?: string;
	isCategory?: boolean;
}

export type StackIds =
	| "desarrollo-web"
	| "desarrollo-software"
	| "desarrollo-movil"
	| "ciencia-de-datos"
	| "seguridad-y-redes"
	| "html-css"
	| "javascript"
	| "typescript"
	| "ui-ux"
	| "bootstrap"
	| "sass-scss"
	| "rxjs"
	| "reactjs"
	| "angular"
	| "vuejs"
	| "nodejs"
	| "nextjs"
	| "redux"
	| "nuxtjs"
	| "loopback-4"
	| "electron"
	| "java"
	| "c-plus-plus"
	| "python"
	| "c-sharp"
	| "go"
	| "mysql"
	| "postgresql"
	| "mongodb"
	| "redis"
	| "couchbase"
	| "elasticsearch"
	| "neo4j"
	| "solidity"
	| "genericos"
	| "assembler"
	| "flutter"
	| "react-native"
	| "native-script"
	| "soporte-it"
	| "fotografia"
	| "computacion-cuantica"
	| "scrum"
	| "git";

const jsonData: Education = {
	paths: [
		{
			name: "Conviértete en diseñador web front-end (LinkedIn)",
			period: "39 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-disenador-web-front-end?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "html-css", "ui-ux", "bootstrap"],
		},
		{
			name: "Ponte al día como desarrollador web: Node.Js (LinkedIn)",
			period: "17 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/ponte-al-dia-como-desarrollador-web-node-js?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "angular", "nodejs"],
		},
		{
			name: "Conviértete en desarrollador Angular (LinkedIn)",
			period: "20 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-desarrollador-angular?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "angular", "scrum", "git"],
		},
		{
			name: "Conviértete en desarrollador web front-end (LinkedIn)",
			period: "25 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-desarrollador-web-front-end?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "html-css", "sass-scss", "javascript", "reactjs", "angular", "vuejs", "typescript", "scrum"],
		},
		{
			name: "Conviértete en especialista en desarrollo de ecosistemas (LinkedIn)",
			period: "24 hs",
			coursesIds: [],
			url: "",
			technologiesIds: [
				"desarrollo-web",
				"desarrollo-movil",
				"javascript",
				"rxjs",
				"reactjs",
				"angular",
				"vuejs",
				"nodejs",
				"native-script",
				"loopback-4",
				"electron",
			],
		},
		{
			name: "Conviértete en especialista en desarrollo JavaScript (LinkedIn)",
			period: "18 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-especialista-en-desarrollo-javascript?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "javascript"],
		},

		{
			name: "Building Your Java Skills (LinkedIn)",
			period: "16 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/building-your-java-skills",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "Conviértete en especialista en desarrollo Python (LinkedIn)",
			period: "13 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-especialista-en-desarrollo-python?originalSubdomain=es",
			technologiesIds: ["desarrollo-software", "python"],
		},
		{
			name: "Getting Started as a Java Developer (LinkedIn)",
			period: "19 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/getting-started-as-a-java-developer",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "JAVA Course (Sololearn)",
			period: "N/A",
			coursesIds: [],
			url: "https://www.sololearn.com/en/learn/courses/le-java",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "Introducción | Formación en Datos e Inteligencia Artificial (Secretaría de Economía del Conocimiento)",
			period: "50 hs",
			coursesIds: [],
			url: "",
			technologiesIds: ["ciencia-de-datos"],
		},
		{
			name: "Become a NoSQL Developer (LinkedIn)",
			period: "15 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/develop-your-nosql-skills",
			technologiesIds: ["ciencia-de-datos", "mongodb", "redis", "couchbase", "elasticsearch", "neo4j"],
		},
		{
			name: "SQL Course (Sololearn)",
			period: "N/A",
			coursesIds: [],
			url: "https://www.sololearn.com/en/learn/courses/le-sql",
			technologiesIds: ["ciencia-de-datos", "mysql"],
		},

		{
			name: "Conviértete en diseñador/a UI-UX (LinkedIn)",
			period: "16 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-disenador-o-disenadora-ui-ux?originalSubdomain=es",
			technologiesIds: ["genericos", "ui-ux"],
		},
		{
			name: "Mejora la comunicación en el ámbito empresarial (LinkedIn)",
			period: "4 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/mejora-la-comunicacion-en-el-ambito-empresarial?originalSubdomain=es",
			technologiesIds: ["genericos"],
		},
		{
			name: "Destaca en tus habilidades empresariales para la pequeña empresa (LinkedIn)",
			period: "4 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/destaca-en-tus-habilidades-empresariales-para-la-pequena-empresa",
			technologiesIds: ["genericos"],
		},
		{
			name: "Mejora tus habilidades para resolver problemas (LinkedIn)",
			period: "9.5 hs",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/mejora-tus-habilidades-para-resolver-problemas?originalSubdomain=es",
			technologiesIds: ["genericos"],
		},
		{
			name: "Taller de Capacitación en Vigilancia Tecnológica e Inteligencia Estratégica (UNDEF)",
			period: "N/A",
			coursesIds: [],
			url: "",
			technologiesIds: ["genericos"],
		},
	],
	stacks: [
		{ id: "desarrollo-web", name: "Desarrollo Web", isCategory: true },
		{ id: "html-css", name: "HTML/CSS" },
		{ id: "ui-ux", name: "UI/UX" },
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
		{ id: "desarrollo-movil", name: "Desarrollo Móvil", isCategory: true },

		{ id: "c-plus-plus", name: "C++" },
		{ id: "c-sharp", name: "C#" },
		{ id: "go", name: "Go" },
		{ id: "solidity", name: "Solidity" },
		{ id: "assembler", name: "Assembler" },
		{ id: "flutter", name: "Flutter" },
		{ id: "react-native", name: "React Native" },
		{ id: "native-script", name: "Native Script" },
		{ id: "soporte-it", name: "Soporte IT" },
		{ id: "fotografia", name: "Fotografía" },
		{ id: "computacion-cuantica", name: "Computación Cuántica" },
		{ id: "scrum", name: "Scrum" },
		{ id: "git", name: "Git" },
	],
	courses: [
		{
			id: "0",
			individual: true,
			title: "On-Page SEO Training Course (Udemy)",
			period: "2 hs",
			url: "",
			technologiesIds: ["desarrollo-web"],
		},
		{
			id: "1",
			individual: true,
			title: "Career Essentials in System Administration (Microsoft & LinkedIn)",
			period: "5 hs",
			url: "https://www.linkedin.com/learning/career-essentials-in-system-administration-by-microsoft-and-linkedin/",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "2",
			individual: true,
			title: "Networking Basics (Cisco Networking Academy)",
			period: "22 hs",
			url: "https://www.netacad.com/courses/networking-basics?courseLang=en-US",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "3",
			individual: true,
			period: "22 hs",
			title: "Networking Devices and Initial Configuration (Cisco Networking Academy)",
			url: "https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "4",
			individual: true,
			title: "Introducción a la Seguridad Cibernética (Cisco Networking Academy)",
			period: "6 hs",
			url: "https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "5",
			individual: true,
			title: "Seminario: Conceptos Prácticos de la seguridad en Informática (FCA.02.18, UNDEF)",
			period: "12 hs",
			url: "",
			technologiesIds: ["seguridad-y-redes"],
		},
	],
};

export async function GET() {
	return NextResponse.json(jsonData);
}
