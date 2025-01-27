// app/api/projects/route.ts
import { NextResponse } from "next/server";

const jsonData = {
	projects: [
		{
			name: "Proyecto 1",
			featured: true,
			shortDesc: "Pequeña descripción",
			longDesc: "Descripción extensa del proyecto...",
			imageUrl: "/ruta-proyecto-1.jpg",
		},
		{
			name: "Proyecto 2",
			featured: false,
			shortDesc: "Otra descripción breve",
			longDesc: "Descripción larga para proyecto 2...",
			imageUrl: "/ruta-proyecto-2.jpg",
		},
		// Más proyectos...
	],
};

export async function GET() {
	return NextResponse.json(jsonData);
}
