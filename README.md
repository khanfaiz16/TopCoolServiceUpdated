# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

---

## SEO architecture

Metadata lives in data modules, not in JSX, so the values React renders at
runtime and the values baked into the static HTML at build time cannot drift.

| File | Responsibility |
| --- | --- |
| `src/data/seoConfig.js` | Site config + title/description/keywords for every fixed page. |
| `src/data/brandServiceData.js` | Content and metadata for the twelve brand + appliance landing pages. |
| `src/data/schema.js` | JSON-LD builders (Service, BreadcrumbList, FAQPage, LocalBusiness). |
| `src/components/SEO.jsx` | Applies title, description, keywords, canonical, Open Graph, Twitter, robots and JSON-LD to `<head>` at runtime. |
| `scripts/prerender-seo.mjs` | Post-build step: writes a static HTML file per route with the head pre-resolved, and generates `dist/sitemap.xml`. |

### Why the prerender step exists

This is a client-rendered app. Googlebot executes JavaScript and would
eventually see the runtime metadata, but social and messaging scrapers
(WhatsApp, Facebook, X, LinkedIn, Slack) do not, so every shared link would
otherwise show the home page's preview card. The prerender step resolves the
`<head>` ahead of time without changing the runtime behaviour of the app.

`npm run build` runs Vite and then the prerender step. `npm run build:only`
runs Vite alone, which is useful when debugging a build issue.

### Adding a brand page

Add an entry to `brandServices` in `src/data/brandServiceData.js`. The route,
the navigation links, the sitemap entry and the prerendered HTML are all
generated from that one entry.

### Deployment requirement

Routes use a trailing slash, so `/about/` maps to `dist/about/index.html` on any
standard static host. The host must also keep the usual **SPA fallback to
`index.html`** for paths that are not prerendered, in particular the
`/repair/<brand>-<service>-in-<locality>/` pages.
