// app/api/projects/route.ts
import { NextResponse } from "next/server";

const jsonData = {
	projects: [
		{
			name: "Proyecto 1",
			featured: true,
			shortDesc: "Pequeña descripción",
			longDesc: "Descripción extensa del proyecto...",
			imageUrl: "https://placehold.co/600x400/EEE/31343C",
		},
		{
			name: "Proyecto 2",
			featured: true,
			shortDesc: "Otra descripción breve",
			longDesc: "Descripción larga para proyecto 2...",
			imageUrl: "https://placehold.co/600x400/FCC/31343C",
		},
		// Más proyectos...
	],
};

export async function GET() {
	return NextResponse.json(jsonData);
}
