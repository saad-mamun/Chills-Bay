/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors :{
        navcoler: "#26395C",
      },
      fontFamily :{
        redhat: ['"Red Hat Display"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

