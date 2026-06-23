/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F5F5F7",
          offwhite: "#FAFAFA",
          gray: "#979797",
          mid: "#878687",
          dark: "#2D2C2B",
          charcoal: "#333333", 
          muted: "#666666",    
          accent: "#B8A898", 
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        script: ["'Great Vibes'", "cursive"],
      },
    },
  },
  plugins: [],
};