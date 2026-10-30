# Foot & Ankle X-Ray Coach

A single-file, offline, interactive teaching app for **Australian podiatry undergraduate students**: foot & ankle plain X-ray interpretation.

## Run it
Download [`app/FootAnkleXRayCoach.html`](app/FootAnkleXRayCoach.html) and double-click it — it opens in any browser on any computer. No install, no server, works offline.

## What's inside
- **6 Learn modules** — standard views & weight-bearing vs non-weight-bearing; systematic reading checklist; key angles (HVA, IMA, Meary, calcaneal pitch, Böhler, Kite); Ottawa ankle/foot/knee rules and podiatrist MBS items (57521/57523/57527); accessory-ossicle pitfalls; diabetic-foot osteomyelitis vs Charcot (IWGDF/IDSA 2023).
- **11 annotated cases** — Jones vs avulsion fracture, Lisfranc, hallux valgus, hallux rigidus, calcaneal fracture, os trigonum, accessory navicular, osteomyelitis, Charcot, sesamoid fracture — each with multi-view schematics, "spot the finding" hotspots, an interactive 3-point angle-measurement tool, differential diagnoses, management pearls (Australian practice) and references.
- **26-question quiz** with explanations and SM-2-style spaced repetition.
- **Progress dashboard** — cases completed, hotspots found, quiz accuracy, due reviews, module checklists. Stored only in the browser's localStorage; no accounts, no tracking.

## Compliance
- Education only — not a medical device; does not diagnose/treat/cure/prevent anything (banner shown on load).
- All "radiographs" are **original SVG schematics** drawn in code (CC BY-NC-SA 4.0), labelled "educational schematic — not a patient image". No scraped or third-party images.
- Non-commercial educational distribution; aligned to Podiatry Board of Australia Professional Capabilities (2022), MBS note IN.0.6, IWGDF/IDSA 2023, Ottawa rules (Stiell 1993).
- WCAG 2.2 AA intent: keyboard-focusable controls, skip link, ARIA labels, reduced-motion support, high-contrast dark theme.

## Adding real clinical images later
Place licensed / de-identified image files next to the HTML and add per-image entries with source + licence metadata (see the footer of the app). Never add images with patient identifiers.

## Verification
- `node --check` on the extracted script: pass.
- jsdom smoke test: all 11 cases render SVG; hotspot tap registers "found"; measure tool computes angles; quiz feedback + spaced repetition persist; progress screen updates; zero runtime errors.
