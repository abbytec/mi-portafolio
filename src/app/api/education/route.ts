// app/api/projects/route.ts
import { NextResponse } from "next/server";

export interface Education {
	paths: LearningPath[];
	stacks: StackTechnology[];
	courses: Course[];
}

interface LearningPath {
	name: string;
	duration?: string;
	coursesIds: string[]; // IDs de cursos
	url?: string;
	technologiesIds: StackIds[]; // IDs de stacks
}

interface Course {
	id: string;
	individual: boolean;
	title: string;
	description?: string;
	duration?: string;
	url?: string;
	technologiesIds: StackIds[]; // IDs de stacks
}

export interface StackTechnology {
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
			duration: "39h",
			coursesIds: ["frontend-1", "ui-ux-1", "ui-ux-2", "ui-ux-3", "html-css-1", "html-css-2", "adobe-xd-1", "adobe-xd-2", "ui-ux-4"],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-disenador-web-front-end?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "html-css", "ui-ux", "bootstrap"],
		},
		{
			name: "Ponte al día como desarrollador web: Node.Js (LinkedIn)",
			duration: "17h",
			coursesIds: ["node-1", "node-2", "git-1", "node-3", "node-4", "node-5", "angular-1"],
			url: "https://www.linkedin.com/learning/paths/ponte-al-dia-como-desarrollador-web-node-js?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "nodejs", "git", "angular"],
		},
		{
			name: "Conviértete en desarrollador Angular (LinkedIn)",
			duration: "20h",
			coursesIds: ["node-1", "node-2", "git-1", "angular-2", "angular-3", "angular-4", "angular-5", "scrum-1"],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-desarrollador-angular?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "angular", "scrum", "git"],
		},
		{
			name: "Conviértete en desarrollador web front-end (LinkedIn)",
			duration: "25h",
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
			duration: "24h",
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
			duration: "18h",
			coursesIds: ["javascript-5", "javascript-6", "javascript-7", "javascript-1", "javascript-2", "javascript-3", "javascript-4"],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-especialista-en-desarrollo-javascript?originalSubdomain=es",
			technologiesIds: ["desarrollo-web", "javascript"],
		},

		{
			name: "Building Your Java Skills (LinkedIn)",
			duration: "16h",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/building-your-java-skills",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "Conviértete en especialista en desarrollo Python (LinkedIn)",
			duration: "13h",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-especialista-en-desarrollo-python?originalSubdomain=es",
			technologiesIds: ["desarrollo-software", "python"],
		},
		{
			name: "Getting Started as a Java Developer (LinkedIn)",
			duration: "19h",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/getting-started-as-a-java-developer",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "Introducción | Formación en Datos e Inteligencia Artificial (Secretaría de Economía del Conocimiento) - 50h",
			coursesIds: [],
			url: "",
			technologiesIds: ["ciencia-de-datos"],
		},
		{
			name: "Become a NoSQL Developer (LinkedIn)",
			duration: "15h",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/develop-your-nosql-skills",
			technologiesIds: ["ciencia-de-datos", "mongodb", "redis", "couchbase", "elasticsearch", "neo4j"],
		},

		{
			name: "Conviértete en diseñador/a UI-UX (LinkedIn)",
			duration: "16h",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-disenador-o-disenadora-ui-ux?originalSubdomain=es",
			technologiesIds: ["genericos", "ui-ux"],
		},
		{
			name: "Mejora la comunicación en el ámbito empresarial (LinkedIn)",
			duration: "4h",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/mejora-la-comunicacion-en-el-ambito-empresarial?originalSubdomain=es",
			technologiesIds: ["genericos"],
		},
		{
			name: "Destaca en tus habilidades empresariales para la pequeña empresa (LinkedIn)",
			duration: "4h",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/destaca-en-tus-habilidades-empresariales-para-la-pequena-empresa",
			technologiesIds: ["genericos"],
		},
		{
			name: "Mejora tus habilidades para resolver problemas (LinkedIn)",
			duration: "9.5h",
			coursesIds: [],
			url: "https://www.linkedin.com/learning/paths/mejora-tus-habilidades-para-resolver-problemas?originalSubdomain=es",
			technologiesIds: ["genericos"],
		},
		{
			name: "Taller de Capacitación en Vigilancia Tecnológica e Inteligencia Estratégica (UNDEF)",
			coursesIds: [],
			url: "",
			technologiesIds: ["genericos"],
		},
	],
	stacks: [
		{ id: "desarrollo-web", name: "Desarrollo Web", isCategory: true, color: "#3498db" },
		{ id: "desarrollo-software", name: "Desarrollo de Software", isCategory: true, color: "#2ecc71" },
		{ id: "java", name: "Java", color: "#b07219" },
		{ id: "python", name: "Python", color: "#306998" },

		{ id: "nodejs", name: "NodeJS", color: "#68a063" },
		{ id: "reactjs", name: "ReactJS", color: "#61dafb" },
		{ id: "nextjs", name: "Next.js", color: "#000000" },
		{ id: "vuejs", name: "Vue.js", color: "#41b883" },
		{ id: "nuxtjs", name: "Nuxt.js", color: "#00c58e" },
		{ id: "angular", name: "Angular", color: "#dd1b16" },
		{ id: "rxjs", name: "RxJS", color: "#b7178c" },
		{ id: "redux", name: "Redux", color: "#764abc" },

		{ id: "loopback-4", name: "LoopBack 4", color: "#4285f4" },
		{ id: "electron", name: "Electron", color: "#47848f" },
		{ id: "bootstrap", name: "Bootstrap", color: "#563d7c" },
		{ id: "ui-ux", name: "UI/UX", color: "#e67e22" },
		{ id: "sass-scss", name: "SASS/SCSS", color: "#cd6799" },
		{ id: "html-css", name: "HTML/CSS", color: "#264de4" },

		{ id: "ciencia-de-datos", name: "Ciencia de datos", isCategory: true, color: "#8e44ad" },
		{ id: "mysql", name: "MySQL", color: "#4479a1" },
		{ id: "mongodb", name: "MongoDB", color: "#47a248" },
		{ id: "neo4j", name: "Neo4j", color: "#008cc1" },
		{ id: "redis", name: "Redis", color: "#d82c20" },
		{ id: "postgresql", name: "PostgreSQL", color: "#336791" },
		{ id: "couchbase", name: "Couchbase", color: "#003087" },
		{ id: "elasticsearch", name: "ElasticSearch", color: "#005571" },

		{ id: "seguridad-y-redes", name: "Seguridad y Redes", isCategory: true, color: "#e74c3c" },
		{ id: "genericos", name: "Genéricos", isCategory: true, color: "#95a5a6" },
		{ id: "desarrollo-movil", name: "Desarrollo Móvil", isCategory: true, color: "#16a085" },

		{ id: "c-plus-plus", name: "C++", color: "#00599c" },
		{ id: "c-sharp", name: "C#", color: "#178600" },
		{ id: "go", name: "Go", color: "#00add8" },
		{ id: "solidity", name: "Solidity", color: "#aa32a8" },
		{ id: "assembler", name: "Assembler", color: "#6c757d" },
		{ id: "flutter", name: "Flutter", color: "#02569b" },
		{ id: "react-native", name: "React Native", color: "#61dafb" },
		{ id: "native-script", name: "Native Script", color: "#019f5b" },
		{ id: "soporte-it", name: "Soporte IT", color: "#2c3e50" },
		{ id: "fotografia", name: "Fotografía", color: "#e84393" },
		{ id: "computacion-cuantica", name: "Computación Cuántica", color: "#8e44ad" },
		{ id: "scrum", name: "Scrum", color: "#27ae60" },
		{ id: "git", name: "Git", color: "#f05032" },
	],
	courses: [
		{
			id: "0",
			individual: true,
			title: "On-Page SEO Training Course (Udemy)",
			duration: "2h",
			url: "",
			technologiesIds: ["desarrollo-web"],
		},
		{
			id: "1",
			individual: true,
			title: "Career Essentials in System Administration (Microsoft & LinkedIn)",
			duration: "5h",
			url: "https://www.linkedin.com/learning/career-essentials-in-system-administration-by-microsoft-and-linkedin/",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "2",
			individual: true,
			title: "Networking Basics (Cisco Networking Academy)",
			duration: "22h",
			url: "https://www.netacad.com/courses/networking-basics?courseLang=en-US",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "3",
			individual: true,
			duration: "22h",
			title: "Networking Devices and Initial Configuration (Cisco Networking Academy)",
			url: "https://www.netacad.com/courses/networking-devices-and-initial-configuration?courseLang=en-US",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "4",
			individual: true,
			title: "Introducción a la Seguridad Cibernética (Cisco Networking Academy)",
			duration: "6h",
			url: "https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "5",
			individual: true,
			title: "Seminario: Conceptos Prácticos de la seguridad en Informática (FCA.02.18, UNDEF)",
			duration: "12h",
			url: "",
			technologiesIds: ["seguridad-y-redes"],
		},
		{
			id: "node-1",
			individual: false,
			title: "Fundamentos del desarrollo web: Full Stack o Front-end",
			duration: "55 min",
			url: "https://www.linkedin.com/learning/fundamentos-del-desarrollo-web-full-stack-o-front-end/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "node-2",
			individual: false,
			title: "Desarrollo full stack práctico: Configuración profesional de proyectos",
			duration: "3h 49min",
			url: "https://www.linkedin.com/learning/desarrollo-full-stack-practico-configuracion-profesional-de-proyectos/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "git-1",
			individual: false,
			title: "GitHub para programadores",
			duration: "1h 53min",
			url: "https://www.linkedin.com/learning/github-para-programadores-2/",
			technologiesIds: ["git"],
		},
		{
			id: "node-3",
			individual: false,
			title: "Node.js esencial",
			duration: "3h 42min",
			url: "https://www.linkedin.com/learning/node-js-esencial-2018/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "web-1",
			individual: true,
			title: "Desarrollo de proyectos web avanzado",
			duration: "2h 24min",
			url: "https://www.linkedin.com/learning/desarrollo-de-proyectos-web-avanzado/",
			technologiesIds: ["desarrollo-web", "ui-ux", "git"],
		},
		{
			id: "node-4",
			individual: false,
			title: "Node.js avanzado",
			duration: "3h 6min",
			url: "https://www.linkedin.com/learning/node-js-avanzado/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "node-5",
			individual: false,
			title: "Node.js: Trucos",
			duration: "1h 53min",
			url: "https://www.linkedin.com/learning/node-js-trucos/",
			technologiesIds: ["nodejs"],
		},
		{
			id: "angular-1",
			individual: false,
			title: "AngularJS práctico: Web app con NodeJS y MongoDB",
			duration: "2h 35min",
			url: "https://www.linkedin.com/learning/angularjs-practico-web-app-con-nodejs-y-mongodb/",
			technologiesIds: ["angular", "nodejs", "mongodb"],
		},
		{
			id: "javascript-1",
			individual: false,
			title: "JavaScript esencial (2017)",
			duration: "5h 27min",
			url: "https://www.linkedin.com/learning/javascript-esencial-2017/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-2",
			individual: false,
			title: "JavaScript: Errores comunes y cómo solucionarlos",
			duration: "2h 18min",
			url: "https://www.linkedin.com/learning/javascript-errores-comunes-y-como-solucionarlos/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-3",
			individual: false,
			title: "JavaScript avanzado: Expresiones regulares",
			duration: "1h 34min",
			url: "https://www.linkedin.com/learning/javascript-avanzado-expresiones-regulares/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-4",
			individual: false,
			title: "JavaScript avanzado: Buenas prácticas",
			duration: "1h 49min",
			url: "https://www.linkedin.com/learning/javascript-avanzado-buenas-practicas/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-5",
			individual: false,
			title: "JavaScript: Trucos",
			duration: "1h 19min",
			url: "https://www.linkedin.com/learning/javascript-trucos/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-6",
			individual: false,
			title: "JavaScript: TDD y pruebas unitarias esencial",
			duration: "2h 14min",
			url: "https://www.linkedin.com/learning/javascript-tdd-y-pruebas-unitarias-esencial/",
			technologiesIds: ["javascript"],
		},
		{
			id: "javascript-7",
			individual: false,
			title: "JavaScript: Programación orientada a objetos",
			duration: "2h 2min",
			url: "https://www.linkedin.com/learning/javascript-programacion-orientada-a-objetos/",
			technologiesIds: ["javascript"],
		},
		{
			id: "tests-1",
			individual: true,
			title: "End-to-End JavaScript Testing with Cypress.io (2019)",
			duration: "1h 29min",
			url: "https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io-2019/",
			technologiesIds: ["desarrollo-web", "javascript"],
		},
		{
			id: "frontend-1",
			individual: false,
			title: "Desarrollo web front-end esencial",
			duration: "5h 2min",
			url: "https://www.linkedin.com/learning/desarrollo-web-front-end-esencial/",
			technologiesIds: ["html-css", "javascript", "jquery"],
		},
		{
			id: "ui-ux-1",
			individual: false,
			title: "Diseño de interfaz (UI) esencial",
			duration: "2h 10min",
			url: "https://www.linkedin.com/learning/diseno-de-interfaz-ui-esencial/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "ui-ux-2",
			individual: false,
			title: "Experiencia de usuario (UX) esencial",
			duration: "1h 44min",
			url: "https://www.linkedin.com/learning/experiencia-de-usuario-ux-esencial/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "ui-ux-3",
			individual: false,
			title: "Maquetación y tipografía para web",
			duration: "2h 11min",
			url: "https://www.linkedin.com/learning/maquetacion-y-tipografia-para-web/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "html-css-1",
			individual: false,
			title: "Integración HTML y CSS esencial",
			duration: "2h 51min",
			url: "https://www.linkedin.com/learning/integracion-html-y-css-esencial/",
			technologiesIds: ["html-css"],
		},
		{
			id: "html-css-2",
			individual: false,
			title: "Integración HTML y CSS avanzado",
			duration: "1h 29min",
			url: "https://www.linkedin.com/learning/integracion-html-y-css-avanzado/",
			technologiesIds: ["html-css"],
		},
		{
			id: "adobe-xd-1",
			individual: false,
			title: "Adobe XD CC esencial",
			duration: "2h 8min",
			url: "https://www.linkedin.com/learning/adobe-xd-cc-esencial/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "adobe-xd-2",
			individual: false,
			title: "Adobe XD CC avanzado",
			duration: "2h 33min",
			url: "https://www.linkedin.com/learning/adobe-xd-cc-avanzado/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "ui-ux-4",
			individual: false,
			title: "Los cinco pasos del proceso creativo",
			duration: "19min",
			url: "https://www.linkedin.com/learning/los-cinco-pasos-del-proceso-creativo/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "ui-ux-5",
			individual: false,
			title: "Pensamiento crítico (2017)",
			duration: "1h 6min",
			url: "https://www.linkedin.com/learning/pensamiento-critico-2017/",
			technologiesIds: ["ui-ux"],
		},
		{
			id: "html-1",
			individual: false,
			title: "HTML esencial (2015)",
			duration: "4h 29min",
			url: "https://www.linkedin.com/learning/html-esencial/",
			technologiesIds: ["html-css"],
		},
		{
			id: "html-2",
			individual: false,
			title: "HTML avanzado",
			duration: "3h 44min",
			url: "https://www.linkedin.com/learning/html-avanzado/",
			technologiesIds: ["html-css"],
		},
		{
			id: "html-3",
			individual: false,
			title: "Aprende semántica web",
			duration: "56min",
			url: "https://www.linkedin.com/learning/aprende-semantica-web/",
			technologiesIds: ["html-css"],
		},
		{
			id: "css-1",
			individual: false,
			title: "CSS esencial",
			duration: "2h 39min",
			url: "https://www.linkedin.com/learning/css-esencial/",
			technologiesIds: ["html-css"],
		},
		{
			id: "css-2",
			individual: false,
			title: "CSS avanzado",
			duration: "2h 3min",
			url: "https://www.linkedin.com/learning/css-avanzado/",
			technologiesIds: ["html-css"],
		},
		{
			id: "css-3",
			individual: false,
			title: "CSS con SASS escencial",
			duration: "2h 11min",
			url: "https://www.linkedin.com/learning/css-con-sass-esencial/",
			technologiesIds: ["html-css"],
		},
		{
			id: "react-1",
			individual: false,
			title: "React esencial (2019)",
			duration: "2h 48min",
			url: "https://www.linkedin.com/learning/react-esencial-2019/",
			technologiesIds: ["reactjs"],
		},
		{
			id: "react-2",
			individual: true,
			title: "React Hooks esencial",
			duration: "2h 46min",
			url: "https://www.linkedin.com/learning/react-hooks-esencial/",
			technologiesIds: ["desarrollo-web", "reactjs"],
		},
		{
			id: "react-3",
			individual: true,
			title: "React avanzado 1",
			duration: "2h 12min",
			url: "https://www.linkedin.com/learning/react-avanzado-1/",
			technologiesIds: ["reactjs"],
		},
		{
			id: "angular-2",
			individual: false,
			title: "Angular esencial",
			duration: "4h 14min",
			url: "https://www.linkedin.com/learning/angular-esencial-14069833/",
			technologiesIds: ["angular"],
		},
		{
			id: "typescript-1",
			individual: false,
			title: "TypeScript esencial",
			duration: "2h 21min",
			url: "https://www.linkedin.com/learning/typescript-esencial/",
			technologiesIds: ["typescript"],
		},
		{
			id: "typescript-2",
			individual: true,
			title: "TypeScript avanzado",
			duration: "2h 45min",
			url: "https://www.linkedin.com/learning/typescript-avanzado/",
			technologiesIds: ["typescript"],
		},
		{
			id: "vue-1",
			individual: false,
			title: "Vue.js esencial (2019)",
			duration: "3h 37min",
			url: "https://www.linkedin.com/learning/vue-js-esencial-2019/",
			technologiesIds: ["vuejs"],
		},
		{
			id: "vue-2",
			individual: true,
			title: "Vue avanzado 1",
			duration: "1h 55min",
			url: "https://www.linkedin.com/learning/vue-avanzado-1/",
			technologiesIds: ["vuejs"],
		},
		{
			id: "vue-3",
			individual: true,
			title: "Vue avanzado 2",
			duration: "2h 25min",
			url: "https://www.linkedin.com/learning/vue-avanzado-2/",
			technologiesIds: ["desarrollo-web", "vuejs"],
		},
		{
			id: "vue-4",
			individual: true,
			title: "Learning Nuxt.js",
			duration: "1h 32min",
			url: "https://www.linkedin.com/learning/learning-nuxt-js/",
			technologiesIds: ["desarrollo-web", "vuejs", "nuxtjs"],
		},
		{
			id: "scrum-1",
			individual: false,
			title: "Aprende Scrum",
			duration: "1h 32min",
			url: "https://www.linkedin.com/learning/aprende-scrum/",
			technologiesIds: ["scrum"],
		},
		{
			id: "scrum-2",
			individual: false,
			title: "SCRUM: Roles",
			duration: "1h 41min",
			url: "https://www.linkedin.com/learning/scrum-roles/",
			technologiesIds: ["scrum"],
		},
		{
			id: "gestion-1",
			individual: false,
			title: "Getting Things Done. Organízate con eficacia",
			duration: "1h 32min",
			url: "https://www.linkedin.com/learning/getting-things-done-organizate-con-eficacia/",
			technologiesIds: ["genericos"],
		},
		{
			id: "genericos-1",
			individual: false,
			title: "Fundamentos del teletrabajo",
			duration: "1h 22min",
			url: "https://www.linkedin.com/learning/fundamentos-del-teletrabajo/",
			technologiesIds: ["genericos"],
		},
		{
			id: "angular-3",
			individual: false,
			title: "Angular avanzado",
			duration: "2h 39min",
			url: "https://www.linkedin.com/learning/angular-avanzado/",
			technologiesIds: ["angular"],
		},
		{
			id: "angular-4",
			individual: false,
			title: "Angular: Trucos",
			duration: "2h 1min",
			url: "https://www.linkedin.com/learning/angular-trucos/",
			technologiesIds: ["angular"],
		},
		{
			id: "angular-5",
			individual: false,
			title: "Angular práctico: Desarrolla una aplicación web para gestión deportiva",
			duration: "3h 6min",
			url: "https://www.linkedin.com/learning/angular-practico-desarrolla-una-aplicacion-web-para-gestion-deportiva/",
			technologiesIds: ["angular"],
		},
		{
			id: "java-1",
			title: "JAVA Course (Sololearn)",
			individual: true,
			url: "https://www.sololearn.com/en/learn/courses/le-java",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			id: "sql-1",
			title: "SQL Course (Sololearn)",
			individual: true,
			url: "https://www.sololearn.com/en/learn/courses/le-sql",
			technologiesIds: ["ciencia-de-datos", "mysql"],
		},
		{
			id: "sql-2",
			title: "PostgreSQL esencial",
			individual: true,
			url: "https://www.linkedin.com/learning/postgresql-esencial-2/",
			technologiesIds: ["ciencia-de-datos", "postgresql"],
		},
		{
			id: "cpp-1",
			title: "C Course (Sololearn)",
			individual: true,
			url: "https://www.sololearn.com/en/learn/courses/le-c",
			technologiesIds: ["desarrollo-software", "c-plus-plus"],
		},
		{
			id: "cpp-2",
			title: "C++ Course (Sololearn)",
			individual: true,
			url: "https://www.sololearn.com/en/learn/courses/le-c-plus-plus",
			technologiesIds: ["desarrollo-software", "c-plus-plus"],
		},
		{
			id: "flutter-1",
			title: "Flutter: Part 01 Introduction",
			individual: true,
			url: "https://www.linkedin.com/learning/flutter-part-01-introduction/",
			duration: "1h 33min",
			technologiesIds: ["desarrollo-movil", "flutter"],
		},
		{
			id: "flutter-2",
			title: "Flutter: Part 02 Building Apps",
			individual: true,
			url: "https://www.linkedin.com/learning/flutter-part-02-building-apps/",
			duration: "1h 23min",
			technologiesIds: ["desarrollo-movil", "flutter"],
		},
		{
			id: "flutter-3",
			title: "Flutter: Part 03 Flutter Widgets",
			individual: true,
			url: "https://www.linkedin.com/learning/flutter-part-03-flutter-widgets/",
			duration: "1h 30min",
			technologiesIds: ["desarrollo-movil", "flutter"],
		},
		{
			id: "flutter-4",
			title: "Flutter: Part 04 Building an App with State",
			individual: true,
			url: "https://www.linkedin.com/learning/flutter-part-04-building-an-app-with-state/",
			duration: "1h 38min",
			technologiesIds: ["desarrollo-movil", "flutter"],
		},
		{
			id: "flutter-5",
			title: "Flutter: Part 05 Flutter and Dart Packages",
			individual: true,
			url: "https://www.linkedin.com/learning/flutter-part-05-flutter-and-dart-packages/",
			duration: "1h 26min",
			technologiesIds: ["desarrollo-movil", "flutter"],
		},
	],
};

export async function GET() {
	return NextResponse.json(jsonData);
}
