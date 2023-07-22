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

          "primary": "#6ffccf",

          "secondary": "#e082d3",

          "accent": "#f97459",

          "neutral": "#121c21",

          "base-100": "#f8f8fc",

          "info": "#87c7f2",

          "success": "#1ae070",

          "warning": "#bc8b06",

          "error": "#f6373e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

