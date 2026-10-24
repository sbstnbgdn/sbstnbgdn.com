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
  integrations: [
    sitemap({
      // Leaves the booking thank-you page out of the sitemap. The sitemap's option made for this shares its name
      // with a Tailwind class, and Tailwind reads this file for class names, so using it would add CSS to every page.
      serialize: (item) =>
        new URL(item.url).pathname === "/see-you-soon" ? undefined : item,
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
