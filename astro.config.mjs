import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: "never",
  redirects: {
    "/meet": {
      status: 302,
      destination: "https://cal.com/sbstnbgdn/meet",
    },
  },
});
