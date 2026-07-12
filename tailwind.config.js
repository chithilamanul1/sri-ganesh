/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          DEFAULT: '#F4D5C5',
          light: '#FAE3D6',
          dark: '#E8C9B9'
        },
        brown: {
          DEFAULT: '#824D43',
          dark: '#603932'
        },
        green: {
          DEFAULT: '#3A8E58',
          light: '#59B078',
          dark: '#2C6E43'
        }
      }
    },
  },
  plugins: [],
}
