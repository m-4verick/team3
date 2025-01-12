/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        apple: ["AppleSDGothicNeoM", "sans-serif"],
      },
      keyframes: {
        loading: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        loading: "loading 2.5s linear",
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [aspectRatio],
};
