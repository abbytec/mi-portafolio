// app/api/projects/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

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
	| "tailwind-css"
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
	| "spring"
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
	| "jquery"
	| "docker"
	| "kubernetes"
	| "n8n";

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
			technologiesIds: [
				"desarrollo-web",
				"html-css",
				"sass-scss",
				"javascript",
				"reactjs",
				"angular",
				"vuejs",
				"typescript",
				"scrum",
				"tailwind-css",
			],
		},
		{
			name: "Conviértete en especialista en desarrollo de ecosistemas (LinkedIn)",
			duration: "24h",
			coursesIds: [
				"genericos-7",
				"vue-5",
				"rxjs-1",
				"react-4",
				"react-native-1",
				"native-script-1",
				"genericos-6",
				"loopback-1",
				"genericos-8",
				"electron-1",
				"genericos-9",
				"angular-5",
			],
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
			coursesIds: ["java-11", "java-12", "java-13", "java-14", "java-15", "java-16", "java-17", "java-18"],
			url: "https://www.linkedin.com/learning/paths/building-your-java-skills",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "Advance Your Java Skills",
			duration: "8h",
			coursesIds: ["java-19", "java-20", "java-21", "java-22"],
			url: "https://www.linkedin.com/learning/paths/advance-your-java-skills",
			technologiesIds: ["desarrollo-software", "java"],
		},
		{
			name: "Getting Started In Spring Development",
			duration: "10h",
			coursesIds: ["java-spring-1", "java-spring-2", "java-spring-3", "java-spring-4", "java-spring-5", "java-spring-6"],
			url: "https://www.linkedin.com/learning/paths/getting-started-in-spring-development",
			technologiesIds: ["desarrollo-software", "java", "spring"],
		},
		{
			name: "Conviértete en especialista en desarrollo Python (LinkedIn)",
			duration: "13h",
			coursesIds: ["python-1", "python-2", "python-3", "genericos-2", "genericos-3", "genericos-4", "genericos-5"],
			url: "https://www.linkedin.com/learning/paths/conviertete-en-especialista-en-desarrollo-python?originalSubdomain=es",
			technologiesIds: ["desarrollo-software", "python"],
		},
		{
			name: "Getting Started as a Java Developer (LinkedIn)",
			duration: "19h",
			coursesIds: ["java-2", "java-3", "java-spring-1", "java-4", "java-5", "java-6", "java-7", "java-8", "java-9", "java-10"],
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
			coursesIds: ["nosql", "nosql-2", "nosql-3", "nosql-4", "redis", "neo4j", "neo4j-2", "mongodb", "couchbase", "elasticsearch"],
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
		{
			name: "Flutter Courses (LinkedIn)",
			duration: "7.5h",
			coursesIds: ["flutter-1", "flutter-2", "flutter-3", "flutter-4", "flutter-5"],
			technologiesIds: ["desarrollo-movil", "flutter"],
		},
	],
	stacks: [
		{ id: "desarrollo-web", name: "Desarrollo Web", isCategory: true, color: "#3498db" },
		{ id: "desarrollo-software", name: "Desarrollo de Software", isCategory: true, color: "#2ecc71" },
		{ id: "java", name: "Java", color: "#b07219" },
		{ id: "spring", name: "Spring", color: "#6db33f" },
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
		{ id: "javascript", name: "JavaScript", color: "#EBD41D" },
		{ id: "typescript", name: "TypeScript", color: "#007acc" },
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
		{ id: "soporte-it", name: "Soporte IT", color: "#005571" },
		{ id: "fotografia", name: "Fotografía", color: "#e84393" },
		{ id: "computacion-cuantica", name: "Computación Cuántica", color: "#8e44ad" },
		{ id: "scrum", name: "Scrum", color: "#27ae60" },
		{ id: "git", name: "Git", color: "#f05032" },
		{ id: "docker", name: "Docker", color: "#2496ed" },
		{ id: "n8n", name: "n8n", color: "#005571" },
	],
	// Fuente oficial: CSV en src/data/courses.csv
	courses: [],
};

// --- CSV loader for courses ---
function parseCSV(content: string): string[][] {
	const rows: string[][] = [];
	let current: string[] = [];
	let field = "";
	let inQuotes = false;
	for (let i = 0; i < content.length; i++) {
		const char = content[i];
		const next = content[i + 1];
		if (inQuotes) {
			if (char === '"' && next === '"') {
				field += '"';
				i++; // skip escaped quote
			} else if (char === '"') {
				inQuotes = false;
			} else {
				field += char;
			}
		} else if (char === '"') {
			inQuotes = true;
		} else if (char === ",") {
			current.push(field.trim());
			field = "";
		} else if (char === "\n") {
			current.push(field.trim());
			rows.push(current);
			current = [];
			field = "";
		} else if (char === "\r") {
			// ignore
		} else {
			field += char;
		}
	}
	// flush last field/row
	if (field.length > 0 || current.length > 0) {
		current.push(field.trim());
		rows.push(current);
	}
	return rows.filter((r) => r.length && r.some((c) => c !== ""));
}

function toBoolean(v: string | undefined): boolean {
	if (!v) return false;
	const s = v.toLowerCase();
	return s === "true" || s === "1" || s === "yes" || s === "y";
}

function loadCoursesFromCSV(csvPath: string): Course[] | null {
	try {
		if (!fs.existsSync(csvPath)) return null;
		const content = fs.readFileSync(csvPath, "utf8");
		const rows = parseCSV(content);
		if (rows.length === 0) return null;
		const header = rows[0].map((h) => h.trim());
		const idx = (name: string) => header.indexOf(name);
		const reqCols = ["id", "title", "individual", "technologiesIds"];
		const missing = reqCols.filter((c) => idx(c) === -1);
		if (missing.length) {
			console.warn("CSV missing required columns:", missing.join(", "));
			return null;
		}
		const courses: Course[] = [];
		for (let i = 1; i < rows.length; i++) {
			const r = rows[i];
			if (!r || r.length === 0) continue;
			const get = (name: string) => r[idx(name)] ?? "";
			const techs = get("technologiesIds")
				.split(/\s*[|;]\s*/)
				.filter(Boolean) as StackIds[];
			const course: Course = {
				id: get("id"),
				title: get("title"),
				individual: toBoolean(get("individual")),
				description: get("description") || undefined,
				duration: get("duration") || undefined,
				url: get("url") || undefined,
				technologiesIds: techs,
			};
			if (!course.id || !course.title) continue;
			courses.push(course);
		}
		return courses.length ? courses : null;
	} catch (e) {
		console.error("Error reading courses CSV:", e);
		return null;
	}
}

export async function GET() {
	const csvPath = path.join(process.cwd(), "src", "data", "courses.csv");
	const csvCourses = loadCoursesFromCSV(csvPath);
	const data: Education = {
		...jsonData,
		courses: csvCourses ?? [],
	};
	return NextResponse.json(data);
}
