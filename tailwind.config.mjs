/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      colors: {
        teal: "#008282",
      },
    },
  },
  plugins: [],
};
