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
          bg: '#000000',
          surface: '#121212',
          border: '#2a2a2a',
          text: '#ffffff',
          muted: '#a0a0a0',
          accent: '#e5e5e5',
        },
      },
      maxWidth: {
        container: '900px',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Courier New', 'monospace'],
        mono: ['Space Grotesk', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
