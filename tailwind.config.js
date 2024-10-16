/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        intro: {
          "0%": {
            opacity: "0",
            //  transform: "translateY(-20px)"
          },
          "100%": {
            opacity: "1",
            //  transform: "translateY(0)"
          },
        },
      },
      animation: {
        intro: "intro 0.3s both",
      },
    },
  },
  plugins: [],
};
