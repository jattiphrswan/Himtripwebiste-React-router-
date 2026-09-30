/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Alegreya"', 'Georgia', 'serif'],
        sans: ['"Alegreya Sans"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Alegreya"', 'Georgia', 'serif'],
        display: ['"Alegreya"', 'Georgia', 'serif'],
        alegreya: ['"Alegreya"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
