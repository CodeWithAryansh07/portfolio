import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: '#000000',
				foreground: '#FFFFFF',
				card: {
					DEFAULT: '#1A1A1A',
					foreground: '#E4E4E6'
				},
				popover: {
					DEFAULT: '#2A2A2A',
					foreground: '#D6D9E9'
				},
				primary: {
					DEFAULT: '#3A3A49',
					foreground: '#AFB0B6'
				},
				secondary: {
					DEFAULT: '#4A4A59',
					foreground: '#62646C'
				},
				muted: {
					DEFAULT: '#5A5A69',
					foreground: '#52525B'
				},
				accent: {
					DEFAULT: '#6A6A79',
					foreground: '#3F3F46'
				},
				destructive: {
					DEFAULT: '#7A7A89',
					foreground: '#27272A'
				},
				border: '#8A8A99',
				input: '#9A9AA9',
				ring: '#AAAAAA',
				chart: {
					'1': '#BBBBBB',
					'2': '#CCCCCC',
					'3': '#DDDDDD',
					'4': '#EEEEEE',
					'5': '#FFFFFF'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				grid: 'grid 15s linear infinite'
			},
			keyframes: {
				grid: {
					'0%': {
						transform: 'translateY(-50%)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				}
			}
		},
		colors: {
			black: {
				DEFAULT: '#000',
				100: '#010103',
				200: '#0E0E10',
				300: '#1C1C21',
				500: '#3A3A49',
				600: '#1A1A1A',
			},
			white: {
				DEFAULT: '#FFFFFF',
				800: '#E4E4E6',
				700: '#D6D9E9',
				600: '#AFB0B6',
				500: '#62646C',
			},
		},
	},
	plugins: [require("tailwindcss-animate"),],
};
export default config;
