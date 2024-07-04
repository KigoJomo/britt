/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mont: ["Montserrat", "sans-serif"],
      },
      aspectRatio: {
        "21/9": "21 / 9",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f7f7f7",
      slate: "#cccccc",
      black: "#141414",
      gray: "#505050",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
