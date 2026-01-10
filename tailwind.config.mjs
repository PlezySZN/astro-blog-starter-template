// tailwind.config.mjs
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					cyan: '#06B6D4',
					purple: '#8B5CF6',
					dark: '#0F172A',
				},
			},
			fontFamily: {
				// Elegimos una fuente limpia y moderna
				sans: ['Inter', 'sans-serif'],
				display: ['Syne', 'sans-serif'], // Ideal para el nombre LYRIX
			},
		},
	},
	plugins: [],
}