/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "369px",

        "sm": '385px',

        "md": '479px',

        "lg": '824px',

        "xl": '1220px',

        "2xl": "1320px",
      },
      colors: {
        customRed: '#E50000',
        paragraf: "#999999",
        borderColor: "#262626",
        backColor: "#1A1A1A"
      },
      fontFamily: {
        Manrope: "Manrope Variable",
        Righteous: "Righteous"
      }
    },
  },
  plugins: [require('flowbite/plugin')]
}