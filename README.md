# MSight Landing Page (Vite + Vue + Tailwind + GSAP)

This is a production-grade landing page template for **MSight** using the University of Michigan color palette.

## Quick start

```bash
# in this folder
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Replace placeholders

- **GitHub / Docs** links: search for `(placeholder)` in `src/`.
- **Contact email**: `src/components/SiteFooter.vue`.
- **Performance numbers**: `src/sections/Performance.vue`.
- **Publications**: `src/sections/Publications.vue`.
- **Partner logos**: `src/sections/LogosMarquee.vue`.

## Media assets

This project includes a small subset of images/videos extracted from the slide deck:

- `public/assets/hero-split.png`
- `public/assets/fisheye-roundabout.png`
- `public/assets/architecture-1.png`
- `public/assets/architecture-2.png`
- `public/assets/deployment.png`
- `public/assets/demo-short.mp4`

Replace or add more media under `public/assets/`.

## Notes

- Tailwind v4 is installed via the official Vite plugin (`@tailwindcss/vite`).
- Scroll animations are implemented with GSAP + ScrollTrigger.
- Smooth scrolling uses Lenis.

