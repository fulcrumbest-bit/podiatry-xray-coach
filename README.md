# Foot & Ankle X-Ray Coach

A single-file, offline, interactive teaching app for **Australian podiatry undergraduate students**: foot & ankle plain X-ray interpretation.

## Run it
Download [`app/FootAnkleXRayCoach.html`](app/FootAnkleXRayCoach.html) and double-click it — it opens in any browser on any computer. **All 7 clinical images are embedded inside the file** (data URIs), so the single HTML file is fully self-contained: no install, no server, no images folder, works offline. (~600 KB total.)

## What's inside
- **6 Learn modules** — standard views & weight-bearing vs non-weight-bearing; systematic reading checklist; key angles (HVA, IMA, Meary, calcaneal pitch, Böhler, Kite); Ottawa ankle/foot/knee rules and podiatrist MBS items (57521/57523/57527); accessory-ossicle pitfalls; diabetic-foot osteomyelitis vs Charcot (IWGDF/IDSA 2023).
- **18 cases** — 11 original SVG schematic cases + **7 real clinical radiographs** (Lisfranc dislocation DP, Lisfranc fracture-dislocation lateral+CT, gout 1st MTP, Sever's apophysitis, normal lateral foot reference, AP/oblique foot, Lisfranc diagram). Each case has "spot the finding" hotspots, differential diagnoses, management pearls (Australian practice) and references.
- **Interactive viewer** — pinch/scroll zoom, drag pan, brightness/contrast (window/level), hover **loupe** (magnifier), **compare slider** (fade against the normal reference), **label mode**, and a 3-point **angle measurement** tool on schematic cases.
- **Quiz** — 26 MCQs with explanations and SM-2 spaced repetition, plus a timed **OSCE mode** (10 questions / 10 minutes, score + review at the end).
- **Progress dashboard** — cases completed, hotspots found, quiz accuracy, due reviews, module checklists. Stored only in the browser's localStorage; no accounts, no tracking.

## Compliance
- Education only — not a medical device; does not diagnose/treat/cure/prevent anything (banner shown on load).
- Schematic cases use **original SVG diagrams** drawn in code (CC BY-NC-SA 4.0), labelled "educational schematic — not a patient image".
- Real clinical images (also kept in `app/images/` for reference) are from **Wikimedia Commons only**, each with a verified open licence (CC0 / CC BY / CC BY-SA), embedded in the HTML and with its **attribution string shown in-app per case**. No images were taken from Radiopaedia or other sites whose terms prohibit reuse.
- Non-commercial educational distribution; aligned to Podiatry Board of Australia Professional Capabilities (2022), MBS note IN.0.6, IWGDF/IDSA 2023, Ottawa rules (Stiell 1993).
- WCAG 2.2 AA intent: keyboard-focusable controls, skip link, ARIA labels, reduced-motion support, high-contrast dark theme.

## Adding more real clinical images
Add a case entry in the `REAL_CASES` array in `app/FootAnkleXRayCoach.html` with `img` (a `data:` URI or a path that exists in `IMAGE_DATA`), `imgW/imgH`, `attr` (author + licence + source), and hotspot coordinates in % of image width/height. To embed a new image, add it to `IMAGE_DATA` (base64 data URI). Never add images with patient identifiers.

## Verification
- `node --check` on the extracted script: pass.
- jsdom smoke test: all 11 cases render SVG; hotspot tap registers "found"; measure tool computes angles; quiz feedback + spaced repetition persist; progress screen updates; zero runtime errors.
