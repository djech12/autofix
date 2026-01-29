/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#4ade80",
          dark: "#16a34a",
          accent: "#f472b6",
        },
      },
      fontFamily: {
        sans: ['"SN Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1d4ed8",
          secondary: "#22d3ee",
          accent: "#f59e0b",

          "base-100": "#0f172a",
          "base-200": "#0f172a",
          "base-content": "#1f2937",

          neutral: "#111827",
          "neutral-content": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#facc15",
          secondary: "#38bdf8",
          accent: "#fbbf24",

          "base-100": "#0f172a",
          "base-200": "#020617",
          "base-content": "#e5e7eb",

          neutral: "#020617",
          "neutral-content": "#e5e7eb",
        },
      },
    ],
  },
};
