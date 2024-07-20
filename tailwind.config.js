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
        "16/9": "16/9",
        "4/3": "4 / 3",
        "9/16": "9/16",
        "3/4": "3/4",
        "1/1": "1/1",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#f7f7f7",
        slate: "#cccccc",
        black: "#141414",
        gray: "#505050",
      },
      flex: {
        3: "3 1 0%",
        4: "4 1 0%",
      },
      width: {
        "3/10": "30%",
        "7/10": "70%",
      },
      height: {
        "3/10": "30%",
        "7/10": "70%",
        "90vh": "90vh",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
