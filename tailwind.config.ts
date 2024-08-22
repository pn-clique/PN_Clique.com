import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0095A8',
        secondary: '#91BD1E',
      },
      backgroundImage: {
        'banner-pattern-01': 'url(/image01.png)',
      },
    },
  },
  plugins: [],
}
export default config
