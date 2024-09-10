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
      keyframes: {
        appear: {
          '0%': { opacity: '0.5', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        appear: 'appear 2s linear',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
    plugins: [],
};
