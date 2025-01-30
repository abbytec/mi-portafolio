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
	| "git"
	| "jquery";

const jsonData: Education = {
	paths: [
		{
			name: "Conviértete en diseñador web front-end (LinkedIn)",
			period: "39 hs",
			coursesIds: ["frontend-1", "ui-ux-1", "ui-ux-2", "ui-ux-3", "html-css-1", "html-css-2", "adobe-xd-1", "adobe-xd-2", "ui-ux-4"],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-disenador-web-front-end?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "html-css", "ui-ux", "bootstrap"],
		},
		{
			name: "Ponte al día como desarrollador web: Node.Js (LinkedIn)",
			period: "17 hs",
			coursesIds: ["node-1", "node-2", "git-1", "node-3", "node-4", "node-5", "angular-1"],
			url: "https://www.linkedin.com/learning/paths/ponte-al-dia-como-desarrollador-web-node-js?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "nodejs", "git", "angular"],
		},
		{
			name: "Conviértete en desarrollador Angular (LinkedIn)",
			period: "20 hs",
			coursesIds: ["node-1", "node-2", "git-1", "angular-2", "angular-3", "angular-4", "angular-5", "scrum-1"],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-desarrollador-angular?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "angular", "scrum", "git"],
		},
		{
			name: "Conviértete en desarrollador web front-end (LinkedIn)",
			period: "25 hs",
			coursesIds: [
				"html-1",
				"html-2",
				"html-3",
				"css-1",
				"css-2",
				"javascript-1",
				"css-3",
				"react-1",
				"angular-2",
				"typescript-1",
				"vue-1",
				"scrum-1",
				"scrum-2",
				"gestion-1",
				"genericos-1",
			],
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
				"desarrollo-software",
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
			coursesIds: ["javascript-1"],
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
		{ id: "desarrollo-software", name: "Desarrollo de Software", isCategory: true },
		{ id: "java", name: "Java" },
		{ id: "python", name: "Python" },

		{ id: "nodejs", name: "NodeJS" },
		{ id: "reactjs", name: "ReactJS" },
		{ id: "nextjs", name: "Next.js" },
		{ id: "vuejs", name: "Vue.js" },
		{ id: "nuxtjs", name: "Nuxt.js" },
		{ id: "angular", name: "Angular" },
		{ id: "rxjs", name: "RxJS" },
		{ id: "redux", name: "Redux" },

		{ id: "loopback-4", name: "LoopBack 4" },
		{ id: "electron", name: "Electron" },
		{ id: "bootstrap", name: "Bootstrap" },
		{ id: "ui-ux", name: "UI/UX" },
		{ id: "sass-scss", name: "SASS/SCSS" },
		{ id: "html-css", name: "HTML/CSS" },

		{ id: "ciencia-de-datos", name: "Ciencia de datos", isCategory: true },
		{ id: "mysql", name: "MySQL" },
		{ id: "mongodb", name: "MongoDB" },
		{ id: "neo4j", name: "Neo4j" },
		{ id: "redis", name: "Redis" },
		{ id: "postgresql", name: "PostgreSQL" },
		{ id: "couchbase", name: "Couchbase" },
		{ id: "elasticsearch", name: "ElasticSearch" },

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
		{
			id: "node-1",
			individual: false,
			title: "Fundamentos del desarrollo web: Full Stack o Front-end",
			period: "55 min",
			url: "https://www.linkedin.com/learning/fundamentos-del-desarrollo-web-full-stack-o-front-end/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "node-2",
			individual: false,
			title: "Desarrollo full stack práctico: Configuración profesional de proyectos",
			period: "3h 49min",
			url: "https://www.linkedin.com/learning/desarrollo-full-stack-practico-configuracion-profesional-de-proyectos/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "git-1",
			individual: false,
			title: "GitHub para programadores",
			period: "1h 53min",
			url: "https://www.linkedin.com/learning/github-para-programadores-2/",
			technologiesIds: ["git"],
		},
		{
			id: "node-3",
			individual: false,
			title: "Node.js esencial",
			period: "3h 42min",
			url: "https://www.linkedin.com/learning/node-js-esencial-2018/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "node-4",
			individual: false,
			title: "Node.js avanzado",
			period: "3h 6min",
			url: "https://www.linkedin.com/learning/node-js-avanzado/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "node-5",
			individual: false,
			title: "Node.js: Trucos",
			period: "1h 53min",
			url: "https://www.linkedin.com/learning/node-js-trucos/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "angular-1",
			individual: false,
			title: "AngularJS práctico: Web app con NodeJS y MongoDB",
			period: "2h 35min",
			url: "https://www.linkedin.com/learning/angularjs-practico-web-app-con-nodejs-y-mongodb/",
			technologiesIds: ["angular", "nodejs", "mongodb"],
		},
		{
			id: "javascript-1",
			individual: false,
			title: "JavaScript esencial (2017)",
			period: "5h 27min",
			url: "https://www.linkedin.com/learning/javascript-esencial-2017/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-2",
			individual: false,
			title: "JavaScript: Errores comunes y cómo solucionarlos",
			period: "2h 18min",
			url: "https://www.linkedin.com/learning/javascript-errores-comunes-y-como-solucionarlos/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-3",
			individual: false,
			title: "JavaScript avanzado: Expresiones regulares",
			period: "1h 34min",
			url: "https://www.linkedin.com/learning/javascript-avanzado-expresiones-regulares/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-4",
			individual: false,
			title: "JavaScript avanzado: Buenas prácticas",
			period: "1h 49min",
			url: "https://www.linkedin.com/learning/javascript-avanzado-buenas-practicas/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-5",
			individual: false,
			title: "JavaScript: Trucos",
			period: "1h 19min",
			url: "https://www.linkedin.com/learning/javascript-trucos/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-6",
			individual: false,
			title: "JavaScript: TDD y pruebas unitarias esencial",
			period: "2h 14min",
			url: "https://www.linkedin.com/learning/javascript-tdd-y-pruebas-unitarias-esencial/",
			technologiesIds: ["javascript"],
		},
		{
			id: "frontend-1",
			individual: false,
			title: "Desarrollo web front-end esencial",
			period: "5h 2min",
			url: "https://www.linkedin.com/learning/desarrollo-web-front-end-esencial/",
			technologiesIds: ["html-css", "javascript", "jquery"],
		},
		{
			id: "ui-ux-1",
			individual: false,
			title: "Diseño de interfaz (UI) esencial",
			period: "2h 10min",
			url: "https://www.linkedin.com/learning/diseno-de-interfaz-ui-esencial/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "ui-ux-2",
			individual: false,
			title: "Experiencia de usuario (UX) esencial",
			period: "1h 44min",
			url: "https://www.linkedin.com/learning/experiencia-de-usuario-ux-esencial/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "ui-ux-3",
			individual: false,
			title: "Maquetación y tipografía para web",
			period: "2h 11min",
			url: "https://www.linkedin.com/learning/maquetacion-y-tipografia-para-web/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "html-css-1",
			individual: false,
			title: "Integración HTML y CSS esencial",
			period: "2h 51min",
			url: "https://www.linkedin.com/learning/integracion-html-y-css-esencial/",
			technologiesIds: ["html-css"],
		},
		{
			id: "html-css-2",
			individual: false,
			title: "Integración HTML y CSS avanzado",
			period: "1h 29min",
			url: "https://www.linkedin.com/learning/integracion-html-y-css-avanzado/",
			technologiesIds: ["html-css"],
		},
		{
			id: "adobe-xd-1",
			individual: false,
			title: "Adobe XD CC esencial",
			period: "2h 8min",
			url: "https://www.linkedin.com/learning/adobe-xd-cc-esencial/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "adobe-xd-2",
			individual: false,
			title: "Adobe XD CC avanzado",
			period: "2h 33min",
			url: "https://www.linkedin.com/learning/adobe-xd-cc-avanzado/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "ui-ux-4",
			individual: false,
			title: "Los cinco pasos del proceso creativo",
			period: "19min",
			url: "https://www.linkedin.com/learning/los-cinco-pasos-del-proceso-creativo/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "ui-ux-5",
			individual: false,
			title: "Pensamiento crítico (2017)",
			period: "1h 6min",
			url: "https://www.linkedin.com/learning/pensamiento-critico-2017/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "html-1",
			individual: false,
			title: "HTML esencial (2015)",
			period: "4h 29min",
			url: "https://www.linkedin.com/learning/html-esencial/",
			technologiesIds: ["html-css"],
		},
		{
			id: "html-2",
			individual: false,
			title: "HTML avanzado",
			period: "3h 44min",
			url: "https://www.linkedin.com/learning/html-avanzado/",
			technologiesIds: ["html-css"],
		},
		{
			id: "html-3",
			individual: false,
			title: "Aprende semántica web",
			period: "56min",
			url: "https://www.linkedin.com/learning/aprende-semantica-web/",
			technologiesIds: ["html-css"],
		},
		{
			id: "css-1",
			individual: false,
			title: "CSS esencial",
			period: "2h 39min",
			url: "https://www.linkedin.com/learning/css-esencial/",
			technologiesIds: ["html-css"],
		},
		{
			id: "css-2",
			individual: false,
			title: "CSS avanzado",
			period: "2h 3min",
			url: "https://www.linkedin.com/learning/css-avanzado/",
			technologiesIds: ["html-css"],
		},
		{
			id: "javascript-1",
			individual: false,
			title: "JavaScript esencial (2017)",
			period: "5h 27min",
			url: "https://www.linkedin.com/learning/javascript-esencial/",
			technologiesIds: ["javascript"],
		},
		{
			id: "css-3",
			individual: false,
			title: "CSS con SASS escencial",
			period: "2h 11min",
			url: "https://www.linkedin.com/learning/css-con-sass-esencial/",
			technologiesIds: ["html-css"],
		},
		{
			id: "react-1",
			individual: false,
			title: "React esencial (2019)",
			period: "2h 48min",
			url: "https://www.linkedin.com/learning/react-esencial-2019/",
			technologiesIds: ["reactjs"],
		},
		{
			id: "angular-2",
			individual: false,
			title: "Angular esencial",
			period: "4h 14min",
			url: "https://www.linkedin.com/learning/angular-esencial-14069833/",
			technologiesIds: ["angular"],
		},
		{
			id: "typescript-1",
			individual: false,
			title: "TypeScript esencial",
			period: "2h 21min",
			url: "https://www.linkedin.com/learning/typescript-esencial/",
			technologiesIds: ["typescript"],
		},
		{
			id: "vue-1",
			individual: false,
			title: "Vue.js esencial (2019)",
			period: "3h 37min",
			url: "https://www.linkedin.com/learning/vue-js-esencial-2019/",
			technologiesIds: ["vuejs"],
		},
		{
			id: "scrum-1",
			individual: false,
			title: "Aprende Scrum",
			period: "1h 32min",
			url: "https://www.linkedin.com/learning/aprende-scrum/",
			technologiesIds: ["scrum"],
		},
		{
			id: "scrum-2",
			individual: false,
			title: "SCRUM: Roles",
			period: "1h 41min",
			url: "https://www.linkedin.com/learning/scrum-roles/",
			technologiesIds: ["scrum"],
		},
		{
			id: "gestion-1",
			individual: false,
			title: "Getting Things Done. Organízate con eficacia",
			period: "1h 32min",
			url: "https://www.linkedin.com/learning/getting-things-done-organizate-con-eficacia/",
			technologiesIds: ["genericos"],
		},
		{
			id: "genericos-1",
			individual: false,
			title: "Fundamentos del teletrabajo",
			period: "1h 22min",
			url: "https://www.linkedin.com/learning/fundamentos-del-teletrabajo/",
			technologiesIds: ["genericos"],
		},
		{
			id: "angular-3",
			individual: false,
			title: "Angular avanzado",
			period: "2h 39min",
			url: "https://www.linkedin.com/learning/angular-avanzado/",
			technologiesIds: ["angular"],
		},
		{
			id: "angular-4",
			individual: false,
			title: "Angular: Trucos",
			period: "2h 1min",
			url: "https://www.linkedin.com/learning/angular-trucos/",
			technologiesIds: ["angular"],
		},
		{
			id: "angular-5",
			individual: false,
			title: "Angular práctico: Desarrolla una aplicación web para gestión deportiva",
			period: "3h 6min",
			url: "https://www.linkedin.com/learning/angular-practico-desarrolla-una-aplicacion-web-para-gestion-deportiva/",
			technologiesIds: ["angular"],
		},
	],
};

export async function GET() {
	return NextResponse.json(jsonData);
}
