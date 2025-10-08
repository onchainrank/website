/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Canvas & surfaces
        background: {
          DEFAULT: "#c9eeff", // new page background
          surface: "#e6f9ff", // very light tint for cards/sections
          muted: "#f2fbff", // ultra-subtle for footers/forms
        },
        "brand-navy": "#11457a",
        "brand-green": "#00ae7e",
        "brand-navy-light": "#c8edff",
        "brand-navy-dark": "#0c3e55",
        "brand-navy-light2": "80D4FF",
        // (keep the rest of your colors as-is)
        primary: {
          DEFAULT: "#00af7f",
          light: "#33c8a1",
          dark: "#008367",
        },
        secondary: {
          DEFAULT: "#134479",
          light: "#4a6db8",
          dark: "#0f3366",
        },
        text: {
          DEFAULT: "#9ca3af", // gray-400
          secondary: "#4B5563",
          inverse: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FFC857",
          light: "#FFE8A1",
        },
      },
    },
  },
  plugins: [],
};
