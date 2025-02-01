// theme/components/cardTheme.ts
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const customVariant = definePartsStyle({
	container: {
		bg: "panel",
		color: "cardColor",
		border: "1px solid var(--chakra-colors-cardBorder)",
		_hover: {
			border: "1px solid var(--chakra-colors-accent)",
			background: "var(--chakra-colors-cardBg)",
		},
	},
});

export const CardTheme = defineMultiStyleConfig({
	variants: {
		custom: customVariant,
	},
});
