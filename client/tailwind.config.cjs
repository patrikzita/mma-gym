/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#F17B19",
      },
      rotate: {
        360: "360deg",
      },
      fontSize: {
        large: "3rem",
        "6xl": "6rem",
        "7xl": "10rem",
        smaller: "4rem",
      },
      minHeight: {
        "1/2": "50%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")], //reset styling
};
