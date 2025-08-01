// theme/components/cardTheme.ts
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const customVariant = definePartsStyle({
	container: {
		background: "bw",
		color: "cardColor",
		border: "1px solid var(--chakra-colors-accent)",
	},
});

export const CardTheme = defineMultiStyleConfig({
	variants: {
		custom: customVariant,
	},
});
