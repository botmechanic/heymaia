# heymaia.app

Static marketing site for [Maia](https://github.com/botmechanic/maia), a privacy-first on-device AI companion for Android.

This project is a Next.js App Router app configured for a fully static export. There is no server runtime, no API routes, and no analytics, cookies, or third-party scripts.

## Requirements

- Node.js 20+ (LTS recommended)
- npm

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Edit copy and links in [`content/site.ts`](content/site.ts). Components read from that file so you can change wording without touching layout code.

## Lint and build

```bash
npm run lint
npm run build
```

`npm run build` writes a static site to `out/`.

## Deploy the static export

Point any static host at the `out/` directory after `npm run build`.

### Vercel

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: `out`
- Or connect the repo and let Vercel detect the project; with `output: 'export'` the deploy is static.

### Netlify

- Build command: `npm run build`
- Publish directory: `out`
- Optional `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `out`
- Node version: 20 or newer

### GitHub Pages

1. Build with `npm run build`.
2. Publish the contents of `out/` (for example via GitHub Actions `peaceiris/actions-gh-pages` or the Pages “upload artifact” workflow).
3. If the site is served from a project subdirectory, set `basePath` in `next.config.ts` and rebuild. The production site for heymaia.app is expected at the domain root.

## Site privacy

This site uses no cookies, analytics, or trackers. Fonts are self-hosted at build time via `next/font`. Theme preference is stored in `localStorage` only.

## Related

- App source: [botmechanic/maia](https://github.com/botmechanic/maia)
- Open TODOs for this site: [docs/TODOS.md](docs/TODOS.md)
- Screenshots: [docs/screenshots/v1/](docs/screenshots/v1/)
