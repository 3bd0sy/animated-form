/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //bg-secondary color-primary
        primary: "#f6fbf9",
        secondary: "#c1e3d6",
        accent: "#657786",
        background: "#a7d7c5",
      },
      fontFamily: {
        //font-sans
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        display: ["Oswald", "sans-serif"],
      },
      fontSize: {
        //text-4xl
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      spacing: {
        //h-128 w-144
        128: "32rem",
        144: "36rem",
        700:"700px",
      },
      borderRadius: {
        //rounded-4xl
        "4xl": "2rem",
        "50":"50px"
      },
    },
  },
  plugins: [],
};
