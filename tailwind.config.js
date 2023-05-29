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

          "primary": "#385a64",

          "secondary": "#354e55",

          "accent": "#34495E",

          "neutral": "#252837",

          "base-100": "#ECF0F3",

          "info": "#138D75",

          "success": "#16a34a",

          "warning": "#BF7A12",

          "error": "#E4352F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}