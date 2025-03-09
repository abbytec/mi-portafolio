import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		TOGGLE_PROJECTS: JSON.stringify(process.env.NODE_ENV === "development"),
	},
};

export default nextConfig;
