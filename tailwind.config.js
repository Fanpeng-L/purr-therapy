/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#F1DEC9",
          400: "#C8B6A6",
          500: "#A4907C",
          600: "#8D7B68",
        },
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: { "open-menu": "open-menu 0.5s ease-in-out forwards" },
    },
  },
  plugins: [],
};
