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
				primaryColor: '#D8DBE2',
				secondaryColor: '#A9BCD0',
				tertiaryColor: '#526357',
				accentColor: '#B88E9E'
			}
		}
	},
	plugins: []
};
