# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The marketing/landing site for MobFácil (`www.mobfacil.com.br`, see `CNAME`), a Next.js site statically exported and deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # static export (writes to ./out, see next.config.js output: 'export')
npm run start    # serve a production build on port 80
npm run lint     # next lint (eslint-config-next / core-web-vitals)
```

There is no test suite configured in this repo.

Production builds set `PAGES_BASE_PATH` (from GitHub Pages' `configure-pages` action) so the export works when served from a subpath; locally this is empty and irrelevant.

## Architecture

**Router:** This project uses the Next.js **Pages Router**, rooted at `src/pages/` (`_app.tsx`, `_document.tsx`, `index.tsx`, `privacidade.tsx`, `termos.tsx`, `cookies.tsx`). Global styles are imported in `src/pages/_app.tsx` from `global.css` (root-level, Tailwind directives + CSS vars for the shadcn-style color tokens used by `tailwind.config.ts`).

Ignore `layout.tsx` at the repo root and `src/styles/globals.css` — these are leftovers from an App Router scaffold that isn't used (there is no `app/` directory). Don't wire new pages through `layout.tsx`; add routes as files under `src/pages/`.

**Path alias:** `@/*` maps to the repo root (see `tsconfig.json` and the webpack alias in `next.config.js`, which separately aliases `@` to `src/`). Existing imports mix `@/components/...` (root-relative) and relative paths — check the surrounding file before assuming which resolves.

**Actual page composition** lives in `components/landing/landingpage/`: `LandingPageMock.tsx` is the real homepage, composing `Navbar`/`NavbarMobile`, `Hero`, `FeaturesGrid`, `Testimonials`, and `Footer` with Framer Motion scroll-in animations. It's loaded via `next/dynamic` with `ssr: false` in `src/pages/index.tsx`. Copy is in Portuguese (pt-BR); keep new user-facing copy consistent with that.

**Component library:** `components/landing/` also contains a large catalog of pre-built "Landing*" sections (pricing, testimonials, bento grids, CTA backgrounds, FAQ, blog, team, stats, etc.), all re-exported from `components/landing/index.ts`. This is boilerplate from a landing-page kit (Shipixen-style) — most of it is **not currently used** by the real page in `landingpage/`. When asked to add a section to the homepage, check this catalog first before building a new component from scratch.

**Design tokens:** Colors are defined once in `data/config/colors.js` (primary/secondary scales) and consumed by `tailwind.config.ts`. Change brand colors there rather than hardcoding hex values in components.

**Shared primitives:** `components/shared/ui/` holds low-level shadcn-derived primitives (button, input, accordion, carousel, sheet, etc.) built on Radix UI + `class-variance-authority` + `tailwind-merge`. `lib/utils.ts` has the `cn()` class-merging helper used throughout.

**Images:** Static assets referenced by components live in `src/images/`; `next.config.js` sets `images: { unoptimized: true }` since GitHub Pages export can't run the Next.js image optimizer.

**Logging:** `src/utils/logger.ts` / `pinoLogger.ts` wrap `pino` for structured client-side logging (`logEvent`); this is currently unused by the live page but present for future use.
