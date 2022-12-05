/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				space: ['Space Grotesk', 'sans-serif'],
				//inter: ['Inter', 'sans-serif']
			},
			colors: {
				'astro': '#803aed',
			}
		},
	},
	plugins: [],
}
