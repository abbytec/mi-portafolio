// src/theme/components/modalTheme.ts
import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const customVariant = definePartsStyle({
	dialog: {
		bg: "cardBg",
		color: "cardColor",
	},
});

export const ModalTheme = defineMultiStyleConfig({
	variants: {
		custom: customVariant,
	},
});
