/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        "dark-electric-blue": "#5E6E85",
        "pure-white": "#FFFFFF",
      },
      fontSize: {
        "heading-xl": ["64px", { lineHeight: "110%" }],
        "heading-l": ["48px", { lineHeight: "110%" }],
        "heading-m": ["24px", { lineHeight: "110%" }],
        "heading-s": ["20px", { lineHeight: "110%" }],
        "body-m": ["16px", { lineHeight: "150%" }],
        "body-m-bold": ["16px", { lineHeight: "150%" }],
        "body-s": ["14px", { lineHeight: "150%" }],
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        "semi-bold": 600,
        regular: 400,
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
