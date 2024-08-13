/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark-mode) { &:not(.light-mode *) }",
      "&:is(.dark-mode *)",
    ],
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
