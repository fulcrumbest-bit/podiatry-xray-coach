# Foot & Ankle X-Ray Coach — web app (v9)

Modern React + Vite + Tailwind + Framer Motion rebuild of the X-ray coach, served as an installable PWA on GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
```

## Deploy to GitHub Pages

```bash
npm run build
git checkout gh-pages
rm -rf assets index.html manifest.webmanifest sw.js icon-192.png icon-512.png
cp -r web/dist/* .
git add -A && git commit -m "deploy v9" && git push
```

## What's inside

- `src/data/content.js` — 8 learning modules, 37 quiz items, 20 real clinical cases (text)
- `src/data/images.js` — the 20 real radiographs as inlined base64 (Wikimedia Commons, CC0/PD/CC BY/CC BY-SA; attribution per case in-app)
- `src/components/Viewer.jsx` — PACS-style viewer: pan/zoom, loupe, W/L, invert, 3-point angle, hotspot reveal
- `src/views/` — Home, Learn, Cases, CaseDetail (4-step clinical flow), Quiz (SRS practice, timed OSCE, anatomy drill), Progress
- `src/store.js` — XP/levels/badges/streaks, SM-2 spaced repetition, localStorage persistence

Education only — not a medical device. Progress stays on the device.
