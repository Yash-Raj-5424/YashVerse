import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f0f0f',
          surface: '#1a1a1a',
          border: '#2d2d2d',
          text: '#e5e7eb',
          muted: '#9ca3af',
          accent: '#d1d5db',
        },
      },
      maxWidth: {
        container: '900px',
      },
      fontFamily: {
        sans: ['Courier New', 'monospace'],
        mono: ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
