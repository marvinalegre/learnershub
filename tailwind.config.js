/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#e4e4e4",
        "nav-black": "#333",
      },
    },
  },
  plugins: [],
};
