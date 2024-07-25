/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F6F7F9",
        "secondary-color": "#13225B",
        "tertiary-color": "#ff6a00"
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
      }
    },
  },
  plugins: [],
};
