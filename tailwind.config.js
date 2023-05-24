/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#484c7f",

          "secondary": "#ea8759",

          "accent": "#f92585",

          "neutral": "#252837",

          "base-100": "#ECF0F3",

          "info": "#B1C3E7",

          "success": "#16a34a",

          "warning": "#BF7A12",

          "error": "#E4352F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}