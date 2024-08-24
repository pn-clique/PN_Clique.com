import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        sideways: {
          '0%': {
            opacity: '.1',
          },
          '60%': { opacity: '1' },
        },
      },
      colors: {
        primary: '#0095A8',
        secondary: '#91BD1E',
      },
      backgroundImage: {
        'banner-pattern-01': 'url(/image01.png)',
      },
      animation: {
        sideways: 'sideways 3s linear',
      },
    },
  },
  plugins: [],
}
export default config
