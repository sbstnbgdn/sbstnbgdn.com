# sbstnbgdn.com

Sebastian Bogdan's personal site, built with Astro and Tailwind CSS and deployed by Cloudflare Pages.

## Commands

| Command                                             | What it does                                                                |
| --------------------------------------------------- | --------------------------------------------------------------------------- |
| `bun install`                                       | Installs dependencies (Bun version in `.bun-version`)                       |
| `bun run dev`                                       | Starts the site at http://localhost:4321                                    |
| `bun run build`                                     | Builds the site into `dist/`                                                |
| `bun run typecheck`, `lint`, `knip`, `format:check` | Read-only checks                                                            |
| `bun run check`                                     | Fixes lint and Tailwind class names in place, then typechecks and runs Knip |
| `bun run verify`                                    | Runs `check`, formats every file, and builds                                |

## Deployment

Cloudflare Pages deploys `master`; its build settings live in the Cloudflare dashboard. Pages build to `/<slug>.html` and are served without the extension. `public/_headers` sets the security headers and the cache for `/_astro/`.
