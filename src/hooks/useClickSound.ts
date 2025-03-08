// hooks/useSound.ts
import { useCallback, useMemo } from "react";

const useSound = (url: string, volume = 0.5) => {
	const audio = useMemo(() => {
		const sound = new Audio(url);
		sound.volume = volume;
		return sound;
	}, [url, volume]);

	return useCallback(() => {
		audio.currentTime = 0; // reinicia el sonido si lo llamas varias veces
		audio.play();
	}, [audio]);
};
export default useSound;
