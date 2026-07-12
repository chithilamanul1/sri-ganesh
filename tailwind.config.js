/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#1A2942',
          DEFAULT: '#0B131E',
          dark: '#030811'
        },
        teal: {
          light: '#38FFE0',
          DEFAULT: '#08F7BE',
          dark: '#02B88C'
        },
        coral: {
          DEFAULT: '#FF6F61',
          dark: '#E65345'
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)'
        }
      }
    },
  },
  plugins: [],
}
