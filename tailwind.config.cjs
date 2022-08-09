const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				...defaultTheme.colors,
				secondaryColor: '#edba80',
				accentColor: '#53615f'
			}
		}
	},
	plugins: []
};
