/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4ED8", // your brand blue
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        background: {
          DEFAULT: "#F9FAFB", // light page bg
          dark: "#111827", // for dark auth pages
        },
        text: {
          DEFAULT: "#1F2937", // dark text
          light: "#6B7280", // secondary text
          dark: "#F9FAFB", // for dark pages
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};
