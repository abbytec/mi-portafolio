// hooks/useSound.ts
import { useCallback, useEffect, useState } from "react";

export const usePreLoadAudio = (url: string, volume = 0.4) => {
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
	useEffect(() => {
		if (!url || typeof window === "undefined") return;

		const sound = new Audio(url);
		sound.volume = volume;
		setAudio(sound);
	}, [url, volume]);

	return audio;
};

export const useSound = (audio?: HTMLAudioElement | null) => {
	return useCallback(() => {
		if (!audio) return;
		audio.currentTime = 0; // reinicia el sonido si lo llamas varias veces
		audio.play();
	}, [audio]);
};
