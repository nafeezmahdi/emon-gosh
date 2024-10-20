/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        georgia: ["Georgia", "serif"],
        trebuchet: ['"Trebuchet MS"', "sans-serif"],
        monaco: ['"Monaco"', "sans-serif"],
        calisto: ['"Calisto MT"', "sans-serif"],
      },
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
