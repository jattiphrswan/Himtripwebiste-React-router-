/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mulish"', '"Muli"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Mulish"', '"Muli"', 'sans-serif'],
        display: ['"Mulish"', '"Muli"', 'sans-serif'],
        muli: ['"Mulish"', '"Muli"', 'sans-serif'],
        mulish: ['"Mulish"', '"Muli"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
