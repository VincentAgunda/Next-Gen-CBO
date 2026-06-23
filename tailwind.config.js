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
          mid: "#878687",     // The mid-gray from the quote section
          dark: "#2D2C2B",    // The rich dark charcoal
          charcoal: "#333333", 
          muted: "#666666",    
          accent: "#B8A898",  // The signature gold accent
        },
      },
      fontFamily: {
        // The Two-Font System
        sans: ["'Open Sans'", "sans-serif"], // For body/paragraphs
        heading: ["Inter", "sans-serif"],    // For titles/buttons/accents
      },
    },
  },
  plugins: [],
};