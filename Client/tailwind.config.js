/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ocr-a-extended": ["OCR A Extended"],
      },
      dropShadow: {
        xl: "4px 4px 4px rgba(0, 0, 0, 0.450)",
      },
    },
  },
  plugins: [],
};
