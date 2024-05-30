/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': {opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
};
