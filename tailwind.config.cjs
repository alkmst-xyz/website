/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				caskaydia_cove: ['CaskaydiaCove', 'monospace']
			},
			colors: {
				lightBg: '#fffffe',
				lightHeadline: '#2b2c34',
				lightParagraph: '#2b2c34',
				lightButton: '#6246ea',
				lightButtonText: '#fffffe',
				lightStroke: '#2b2c34',
				lightHighlight: '#6246ea',
				lightMain: '#fffffe',
				lightSecondary: '#d1d1e9',
				lightTertiary: '#e45858'
			}
		}
	},
	plugins: []
};
