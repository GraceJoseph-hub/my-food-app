/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#8a2b06",
        bg2: "#383838",
        bg3: "#4d1601",
        bg4: "#b94517",
        bg5: "#92320c",
        bgHover: "#2c0d00",
        bgActive: "#2c0d00",
        light: "#FAFAFA",
        // green: "#1E3329",
        // pink: "#fed2d1",
        // yellow: "#FFc94b",
        // "light-grey": "#ECECEC",
        // "dark-grey": "#B8B8B8",
      },
      boxShadow: {
        bxshadow1: "0 2px 8px rgba(0, 0, 0, 0.25)",
        bxshadow2: "0 1px 18px 10px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        "meals-appear": {
          from: { opacity: 0, transform: "translateY(3rem)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "meals-appear": "meals-appear 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
