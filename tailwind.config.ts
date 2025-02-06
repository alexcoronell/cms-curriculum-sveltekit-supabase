import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: '#1c1c1c',
				backgroundsecondary: '#212121',
				foreground: '#eaebdb',
				primary: '#3fcf8e',
				red: '#ec5353'
			},
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1366px',
				'3xl': '1600px'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
