/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          light: '#824D43',
          DEFAULT: '#38221B',
          dark: '#1C100C'
        },
        green: {
          light: '#59B078',
          DEFAULT: '#3A8E58',
          dark: '#2C6E43'
        },
        peach: {
          DEFAULT: '#F4D5C5',
          dark: '#E8C9B9'
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
  },
  plugins: [],
}
