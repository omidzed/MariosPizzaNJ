/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FAEFE0',
				secondary: '#87281F',
				tertiary: '#B91C1B',
			},
		},
	},
	plugins: [],
};
