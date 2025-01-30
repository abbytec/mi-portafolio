const timeRegex = /^(?:(\d+\.?\d?)h\s*)?(?:(\d+.?\d?)min)?$/;

function parseTimeString(timeStr: string) {
	const match = timeStr.match(timeRegex);

	if (!match) {
		throw new Error(`Formato inválido para el tiempo: "${timeStr}"`);
	}

	const hours = match[1] ? parseInt(match[1], 10) : 0;
	const minutes = match[2] ? parseInt(match[2], 10) : 0;

	return hours * 60 + minutes;
}

// Función de comparación para sort
export function compareTimes(a: string | undefined, b: string | undefined) {
	// Convertimos cada string a su valor en minutos
	const timeA = a ? parseTimeString(a) : 0;
	const timeB = b ? parseTimeString(b) : 0;

	// Devolvemos la diferencia (orden ascendente)
	return timeB - timeA;
}
