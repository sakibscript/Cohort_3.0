/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#002a5a",
          500: "#183f6a",
          200: "#7f95ac",
        },
        green: {
          400: "#2eaeaf",
        },
      },
    },
  },
  plugins: [],
};
