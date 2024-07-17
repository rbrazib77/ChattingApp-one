/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoRegular: ["roboto-regular"],
        robotoBold: ["roboto-bold"],
        robotoLight: ["roboto-light"],
        robotoMedium: ["roboto-medium"],
        poppinsRegular: ["poppins-regular"],
      },
      colors:{
        primary:"#086ff2",
      }
    },
  },
  plugins: [],
};
