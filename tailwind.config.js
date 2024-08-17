/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: "#f5f5f5",
        "muted-foreground": "#6b7280",
        "background": "#ffffff",
        "primary": "#3b82f6",
        "secondary": "#f97316",
      },
    },
  },
  plugins: [],
};
