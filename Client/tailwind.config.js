/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "ocr-a-extended": ["OCR A Extended"],
      },
      dropShadow: {
        xl: "0px 8px 8px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
