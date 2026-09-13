// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(200, 70%, 50%)',
        secondary: 'hsl(210, 15%, 20%)',
        accent: 'hsl(340, 80%, 60%)',
        foreground: 'hsl(210, 40%, 98%)',
        background: 'hsl(210, 15%, 20%)',
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
