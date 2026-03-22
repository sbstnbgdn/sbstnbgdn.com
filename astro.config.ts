import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sbstnbgdn.com",
  trailingSlash: "never",
  build: {
    format: "file",
    inlineStylesheets: "always",
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "connect-src 'self'",
        "img-src 'self'",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ],
    },
  },
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
