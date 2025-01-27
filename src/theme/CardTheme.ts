// theme/components/cardTheme.ts
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const customVariant = definePartsStyle({
	container: {
		bg: "cardBg",
		color: "cardColor",
	},
});

export const CardTheme = defineMultiStyleConfig({
	variants: {
		custom: customVariant,
	},
});
