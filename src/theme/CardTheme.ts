// theme/components/cardTheme.ts
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const customVariant = definePartsStyle({
	container: {
		bg: "cardBg",
		color: "cardColor",
		border: "1px solid var(--chakra-colors-cardBorder)",
		_hover: {
			border: "1px solid var(--chakra-colors-accent)",
			bg: "accent",
			color: "text",
			"*": {
				color: "text!important",
			},
		},
	},
});

const customVariant2 = definePartsStyle({
	container: {
		bg: "panel",
		color: "cardColor",
		border: "1px solid var(--chakra-colors-cardBorder)",
		_hover: {
			border: "1px solid var(--chakra-colors-accent)",
			bg: "accent",
			color: "text",
			"*": {
				color: "text!important",
			},
		},
	},
});

export const CardTheme = defineMultiStyleConfig({
	variants: {
		custom: customVariant,
		custom2: customVariant2,
	},
});
