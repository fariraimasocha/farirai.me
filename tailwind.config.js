/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darky': "#ffecef",
        'darky1': '#181532',
        'ech1': '#181532',
        'ech2': '#3e3951'


      }
    },
  },
  plugins: [],
}