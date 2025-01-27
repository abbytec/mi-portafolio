// hooks/useSound.ts
import { useCallback } from "react";

const useSound = (url: string) => {
	return useCallback(() => {
		const audio = new Audio(url);
		audio.play();
	}, [url]);
};

export default useSound;
