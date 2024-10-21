// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.red,
      success: colors.emerald,
      danger: colors.rose,
      warning: colors.amber,
      slate: colors.slate,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
    },
    extend: {
      fontFamily: {
        mainBold: ["PopBold", "sans-serif"],
        mainSemiBold: ["PopSemiBold", "sans-serif"],
        mainMedium: ["PopMedium", "sans-serif"],
        mainRegular: ["PopRegular", "sans-serif"],
        mainLight: ["PopLight", "sans-serif"],
        mainThin: ["PopThin", "sans-serif"],
        mainExtraBold: ["PopExtraBold", "sans-serif"],
        mainExtraLight: ["PopExtraLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
