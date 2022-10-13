/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				current: 'currentColor',

				white: '#fff',
				black: '#000',

				dark: {
					primary: {
						DEFAULT: '#262626',
						lighter: '#737373',
						light: '#404040',
						dark: '#171717'
					},

					accent: {
						DEFAULT: '#888888'
					},

					red: '#dc2626',
					blue: '#3b82f6',

					element: {
						anemo: '#A7F6D0',
						cryo: '#F2F2F2',
						dendro: '#B2EA2A',
						electro: '#E2B8FF',
						geo: '#F4D862',
						hydro: '#07E4FF',
						pyro: '#F8AA75'
					}
				}
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			height: {
				88: '22rem'
			},
			animation: {
				flicker: 'flicker 3s linear reverse infinite',
				loader: '',
				skeleton:
					'skeleton 1s infinite ease-in-out var(--animationDelay)',
				'fade-in-visible': 'fade-in-visible 0.2s forwards',
				'fade-out-invisible': 'fade-out-invisible 0.5s forwards'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
