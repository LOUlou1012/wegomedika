# Wego Medika Indonesia — Company Website

Static marketing site for **PT. Wego Medika Indonesia**, a medical device distributor in Indonesia (est. 11 April 2012). Single-page-app style site — one HTML file, multiple "pages" toggled via JS, no build tool, no framework, no backend.

## Stack & File Structure

Plain HTML/CSS/JS, opened directly via `file://` (double-click `index.html` works, no dev server needed).

- `index.html` — all markup, all "pages" (`#page-home`, `#page-products`, `#page-locations`, `#page-career`, `#page-contact`) live in the DOM at once; `.page.active` toggles visibility via `showPage(name, anchor)` in script.js.
- `style.css` — all styling, CSS custom properties in `:root` drive the whole design system (colors, radius, shadow).
- `script.js` — page routing, product catalog data + rendering, modal, contact form deep-links, scroll-reveal animations.
- `assets/locations/*.jpg` — real office/branch/warehouse photos, extracted from the company profile PDF (see below).
- `assets/coverage-map.jpg` — national coverage map, cropped from the company profile PDF at native PDF resolution (not a screenshot).

No npm, no package.json — do not introduce a build step unless explicitly asked.

## Deploy / Git

Pushed to `https://github.com/LOUlou1012/wegomedika.git`, branch `main`. Repo was `git init`'d mid-project (wasn't a repo before). `.gitignore` excludes `.DS_Store`. Commit only when the user explicitly asks — they've been asking for pushes as discrete steps, not on every change.

## ⚠️ Placeholder data — fix before going live

- **WhatsApp number `6281234567890` is a dummy placeholder** (obviously sequential digits), used in ~12 places across `index.html`/`script.js` (nav, hero, CTA sections, product WA links, contact form). **Must be replaced with the real WA Business number before launch.** Search for `6281234567890` to find all occurrences.
- Office phone `(021) 350 3011` / fax `(021) 350 2667` and address (Wisma 67, Jl. Tanah Abang II No. 67, Jakarta Pusat) **are real**, sourced from the company profile PDF — no change needed.

## Content sources used this project

1. **`https://wegomedika.com`** (their live old WordPress/WooCommerce site) — scraped for: product catalog (`/product/`, 5 pages, 51 raw listings), Our Customers / Our Partners logos (Biosensors International, GGM, GED, Trikalibri, Wahana, Orkin, Total Logistics, Logwin, MS & Partners), footer/contact info. Product images are still **hotlinked directly from wegomedika.com's wp-content** (not downloaded locally) — same for partner/customer logos. If that site ever goes down, those images break.
2. **`COMPANY PROFILE_Update 30 May 2025.pdf`** (in `~/Downloads`) — source of: Vision/Mission/Motto (English), Corporate Values (8 values incl. Belonging), office/branch/rep-office/warehouse addresses + real photos, ISO 9001:2015 + CDAKB certification facts, national coverage map, Board of Directors names+photos (NOT yet published to site — see below), business unit brand list (Disposable/Diagnostic/Intervention).
3. **`https://www.tawadahealthcare.com`** — design reference only (a competitor/peer healthcare distributor site). Colors, fonts, hero pattern, dark-section card pattern, and footer color were reverse-engineered from their actual CSS/HTML (not guessed) and adapted — see Design System below.

## Design System (Tawada-inspired reskin)

Values live in `style.css` `:root`. Do not reintroduce Inter/DM Serif Display — the two-font system below is intentional and was a deliberate large redesign the user asked for ("rombak habis-habisan, bikin mirip Tawada").

- **Fonts**: `Hanken Grotesk` (headings, bold/800, sans — no serif anywhere) + `Be Vietnam Pro` (body text). Loaded via Google Fonts link in `index.html` `<head>`.
- **Colors**: brand blue `--blue-600:#0D77BD`, dark navy `--blue-800:#073C5F` (used for "About/Vision-Mission" and "Our Products" dark sections), near-black navy `--gray-900:#031826` (used for the "Why Wego Medika" dark section and hero overlay). Footer background is solid `var(--blue-600)`.
- **Radius**: buttons are full pills (`--r-pill:100px`) — every CTA-like button class was explicitly converted. Cards use enlarged `--r-md:20px` / `--r-lg:28px`.
- **Hero**: full-bleed rounded photo banner (`.hero-banner`, real HQ photo `assets/locations/hq_wisma67.jpg`) with dark gradient overlay + slow Ken Burns zoom, staggered entrance animation, a solid-white primary CTA (`.btn-solid-white`) beside a ghost secondary (`.btn-outline-white`), floating glass stats card (`.hero-stats-float`) overlapping the bottom edge, and a vertical scroll cue. Under 600px the overlay flips to a top-to-bottom gradient so copy stays legible over the bright glass.
- **"Why Wego Medika" section** (`.why-sec`): dark navy background, light (`--card-tint:#FAFAFA`) cards with bordered icon box — mirrors Tawada's "Discover Our Services" pattern.

### Token layer (all in `style.css` `:root`)

Fluid type (`--t-display`…`--t-xs`), rhythm (`--sp-section`, `--sp-gutter`, `--shell:1240px`), radii (`--r-xs`…`--r-pill`), navy-tinted elevation (`--e-1`…`--e-4`, `--e-blue`, `--sh-btn`), motion (`--ease-out`, `--ease-io`, `--ease-spring`, `--dur*`), and `--grain` (an inline SVG turbulence data-URI used as a film-grain `::after` on every dark surface). **Prefer composing from these over new hardcoded values.**

⚠️ **CSS math needs spaces around the operator** — `clamp(2rem,1.5rem+2vw,3rem)` is invalid and gets silently dropped by the browser; write `1.5rem + 2vw`. This has already bitten this project once.

### Animation conventions

- Scroll reveal: add `.reveal` to a single element or `.reveal-group` to a parent (its direct children stagger 80ms apart). A single observer in script.js handles both. The older `revealOnScroll(gridId, cardSelector)` helper (`.in-view`-based) is still wired up for the value/partner/logo/location grids — either is fine, don't add a third mechanism.
- **Use `animation-fill-mode: backwards`, never `both`,** for entrance animations. `both` pins the final `transform` at animation priority and permanently kills the card hover lifts. Where the end state must persist (`.reveal.in`), set it as a normal declaration and keep fill at `backwards`.
- A `<noscript>` block in `index.html` `<head>` force-shows all reveal-hidden elements, so JS failure can't leave the page blank.
- `@media (prefers-reduced-motion:reduce)` neutralizes all of it — keep new animation inside that safety net.

Other script.js additions: scroll-driven nav state (`nav.scrolled`), `.scroll-prog` progress bar, back-to-top FAB, and `countUp()` for `.cnt[data-count]` stat numbers. In `.hs-num` / `.abt-stat-n` the bare `<span>` is the trailing "+" (styled accent) and `.cnt` is the number — don't merge them.

⚠️ **Never name a global used from an inline `onclick` after a DOM property.** Inline handlers resolve identifiers against the element first, so `onclick="scrollTop()"` silently hit the element's numeric `Element.scrollTop` and threw instead of calling the global. The back-to-top FAB is `goTop()` for this reason — same trap applies to `title`, `name`, `id`, `children`, `remove`, etc.

## Page inventory

- **Home**: hero banner → floating stats → Why Wego Medika (dark) → Company Values (8 cards) → Our Products (brand distribution, renamed from "Our Partners") → Our Customers (logo wall) → Our Partners (logistics/legal/calibration partners, logo wall) → How It Works → About/Vision-Mission → **Our Branch** (coverage map) → final CTA.
- **Products**: sidebar filter (category + search) + product grid + modal detail. `PRODUCTS` array in script.js — 50 items (27 Abbott, 14 Cordis, 9 WEGO), rebuilt to mirror the live wegomedika.com catalog 1:1 (see "known content oddity" below).
- **Locations**: HQ, 2 branches (Medan, Makassar), 3 rep offices (Yogyakarta, Semarang, Surabaya), 1 warehouse (Jakarta Utara) — real photos + addresses from the company profile PDF. HQ is a full-row feature card (image left / detail right); everything else uses the standard `.loc-card`. Photos mix portrait and landscape, so `.loc-img img` is `object-fit:cover` to keep the grid uniform. The warehouse renders as 4 standard cards, one per interior photo — they are 4 views of the *same* building, so badge/city/address intentionally repeat. The user explicitly asked for all photos visible at once in the Representative Offices layout; a single card with a thumbnail switcher was tried and rejected, so don't "fix" the repetition by collapsing it back.
- **Career**: Vision/Mission/Motto cards, hiring positions, apply CTA.
- **Contact**: info card, form (deep-links to WA/email, no backend), embedded Google Map.

## Known content oddity (don't "fix" without checking source)

One Cordis product is literally titled `"CORDIS EXOSEAL Vascular Closure Device / CORDIS PRECISE & PRECISE RX Nitinol Stent System"` in `script.js`. This isn't a scraping bug — verified it's a genuine distinct product on the live wegomedika.com site with its own URL slug, just badly named on their end (likely a copy-paste mistake by whoever manages their WooCommerce store). Left as-is intentionally.

## Open items — need higher-ups input before proceeding

- **Vision/Mission wording conflict**: the company profile PDF says "To become a leading key player in providing solution for health care with high quality" / "...committed to be a partner for the customers...", but an earlier "higher-ups" chat message gave different wording ("To be a premier provider of affordable, high-quality healthcare solutions" / "Driven by innovation..."). The site currently uses the **second (chat message) version**. Flagged, not resolved — ask which is authoritative.
- **Board of Directors** (Agusten/President Director, Yudi Priantoro/Director, Jamie Quek Yang Ming/Director of Operational) — photos exist in the company profile PDF but were **not** added to the site; real identifiable people's photos need explicit go-ahead first.
- **Full brand portfolio expansion**: the PDF's "Business Units" page lists ~15 brands across Disposable/Diagnostic/Intervention (GGM, LILY Medical, LELTEK, iDSmed, BD, WEMED by Wantai, IMI Medika, ProLiNE, DYMIND, arkray, Biosensors, Kaneka Medical, Cordis, Abbott, WEGO) — site's "Our Products" section still only shows Abbott/Cordis/WEGO/WEMED. Not expanded yet; no logo assets on hand for most of these.
- Product/location images are hotlinked from external sources (wegomedika.com); consider downloading + self-hosting if the source site's reliability is a concern.

## Working conventions observed this session

- User writes in Indonesian, casual/direct tone ("rombak mampus mampusan", "coba aja dulu kalo bingung ga usah"). Match that register in chat, keep site copy itself bilingual as-is (Indonesian body copy, English section eyebrows/Vision-Mission — this mix was already the site's convention before this project and was preserved).
- When given ambiguous/big content decisions (which brands to add, whose photos to publish, conflicting official wording), the user prefers **pause and ask** over guessing — confirmed via `AskUserQuestion` several times this session, always well received.
- For anything scraped from a real website, verify actual counts/categories against the live site (e.g. WooCommerce result counts) rather than trusting a single page fetch — this caught real mapping bugs earlier (Locations photo mismatches, Cordis product miscount).
- User re-opens the site in browser after each change (`open index.html`) to eyeball it — keep doing that after edits rather than only asserting correctness from code review.
