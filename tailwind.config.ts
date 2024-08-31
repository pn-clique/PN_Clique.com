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
            opacity: '0',
          },
          '100%': { opacity: '1' },
        },
        'main-section': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'main-section-r': {
          '0%': {
            opacity: '1%',
          },
          '100%': {
            opacity: '0',
          },
        },
        'fade-in-left': {
          '0%': {
            // opacity: '0',
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            // opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'fade-in-right': {
          '0%': {
            // opacity: '0',
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            // opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      colors: {
        primary: '#0095A8',
        secondary: '#91BD1E',
      },
      boxShadow: {
        shape:
          '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)',
      },
      animation: {
        sideways: 'sideways 1s ease-in-out',
        'fade-in-right': 'fade-in-right 1s ease-in-out',
        'fade-in-left': 'fade-in-left 1s ease-in-out',
        'main-section': 'main-section 1s ease-in-out',
        'main-section-reserve': 'main-section-r 1s ease-in-out 0.25s',
      },
    },
  },
  plugins: [],
}
export default config
