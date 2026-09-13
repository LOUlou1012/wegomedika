# Wego Medika Indonesia — Company Website

Static marketing site for **PT. Wego Medika Indonesia**, a medical device distributor in Indonesia (est. 11 April 2012). Single-page-app style site — one HTML file, multiple "pages" toggled via JS, no build tool, no framework, no backend.

## Stack & File Structure

Plain HTML/CSS/JS, opened directly via `file://` (double-click `index.html` works, no dev server needed).

- `index.html` — all markup, all "pages" (`#page-home`, `#page-products`, `#page-locations`, `#page-career`, `#page-contact`) live in the DOM at once; `.page.active` toggles visibility via `showPage(name, anchor)` in script.js.
- `style.css` — all styling, CSS custom properties in `:root` drive the whole design system (colors, radius, shadow).
- `i18n.js` — the EN/ZH/ID dictionary + `t()` / `applyLang()` / `setLang()`. **Loaded before `script.js`**, which is required: script.js calls `t()` during its init pass.
- `script.js` — page routing, product catalog data + rendering, modal, contact form deep-links, intro splash, scroll-reveal animations.
- `assets/locations/*.jpg` — real office/branch/warehouse photos, extracted from the company profile PDF (see below).
- `assets/products/*` — product photos, downloaded from wegomedika.com and self-hosted (commit `69707bb`).
- `assets/logos/*.png` — brand, partner, and Wego's own logos (`wego-nav.png` for the nav, `wego-full.png` for the splash + footer).
- `assets/coverage-map.jpg` — national coverage map, cropped from the company profile PDF at native PDF resolution (not a screenshot).

No npm, no package.json — do not introduce a build step unless explicitly asked.

### Boot order (matters — several things depend on it)

1. Inline `<script>` in `<head>` stamps `splash-active` / `splash-seen` onto `<html>` **before first paint**, reading `sessionStorage`. Doing this after DOMContentLoaded would flash the splash for returning visitors.
2. `<noscript>` block force-shows every `.reveal`-hidden element and hides `.splash`, so a JS failure can't leave a blank page or a stuck overlay.
3. The splash IIFE in `script.js` dismisses on a 2.2s timer, click, Esc, or Enter → `runAfterIntro()` drains `introQueue` (the stat count-up waits in there, so it isn't spent behind the overlay).
4. `applyLang(currentLang())` on `DOMContentLoaded`.

## Deploy / Git

Pushed to `https://github.com/LOUlou1012/wegomedika.git`, branch `main`. Repo was `git init`'d mid-project (wasn't a repo before). `.gitignore` excludes `.DS_Store`. Commit only when the user explicitly asks — they've been asking for pushes as discrete steps, not on every change.

## Contact channels — email + phone only

**WhatsApp was removed from the entire site** (user decision). There is no `wa.me` link, no WA icon, and no `--wa` colour token left anywhere — don't reintroduce one. The only two contact channels are:

- **Email `info@wegomedika.com` — the primary CTA.** Rendered as the filled brand-blue button everywhere (`.email-btn`, `.bmail`, `.m-email`, `.f-email`, `.big-email`, `.help-email`, `.a-email` on dark, `.fab-email`).
- **Phone `(021) 350 3011` — the secondary channel**, always a real `tel:+62213503011` link (white outline `.tel-btn`, `.btel`, `.m-tel`, `.big-tel`, `.a-tel`, plus the plain-link `.help-tel`).

`script.js` holds `EMAIL`, `TEL` (href form) and `TEL_DISPLAY` (human form) as constants at the top — use those, don't hardcode. The old `WA` constant, `waLink()` and `sendWA()` are gone.

Instagram and LinkedIn **stay** — they're treated as brand presence, not contact channels, and are still in the contact card's "Follow Us" row, the footer nav column, and the footer bottom social row. Only the WhatsApp entry was pulled from each of those three places.

The contact form now has a **single** action (`sendEmail()`); it still has no backend and just composes a `mailto:` from `buildMsg()`.

**Fax was removed too** (user decision, same pass as WhatsApp). The number `(021) 350 2667` no longer appears anywhere — the fax row is gone from the contact info card, and the "T. … · F. …" pairs in the footer and the Locations HQ card are now phone-only. The number is still in the company profile PDF if it ever needs to come back.

- Office phone `(021) 350 3011` and address (Wisma 67, Jl. Tanah Abang II No. 67, Jakarta Pusat) **are real**, sourced from the company profile PDF — no change needed. With WhatsApp gone there is **no placeholder contact data left on the site**.

## Content sources used this project

1. **`https://wegomedika.com`** (their live old WordPress/WooCommerce site) — scraped for: product catalog (`/product/`, 5 pages, 51 raw listings), Our Customers / Our Partners logos (Biosensors International, GGM, GED, Trikalibri, Wahana, Orkin, Total Logistics, Logwin, MS & Partners), footer/contact info. Product images and logos were originally hotlinked from their wp-content, but are now **downloaded and self-hosted** under `assets/` (commit `69707bb`) — nothing on the page depends on wegomedika.com staying up.
2. **`COMPANY PROFILE_Update 30 May 2025.pdf`** (in `~/Downloads`) — source of: Vision/Mission/Motto (English), Corporate Values (8 values incl. Belonging), office/branch/rep-office/warehouse addresses + real photos, ISO 9001:2015 + CDAKB certification facts, national coverage map, Board of Directors names+photos (NOT yet published to site — see below), business unit brand list (Disposable/Diagnostic/Intervention).
3. **`https://www.tawadahealthcare.com`** — design reference only (a competitor/peer healthcare distributor site). Colors, fonts, hero pattern, dark-section card pattern, and footer color were reverse-engineered from their actual CSS/HTML (not guessed) and adapted — see Design System below.

## i18n — three languages (EN default)

`i18n.js` holds one flat `I18N` object with three sibling dictionaries: `en`, `zh` (Mandarin), `id` (Bahasa Indonesia). **All three must carry the identical key set** — currently 267 each. Run the parity check below after every change; it has caught real drift.

- **EN is the default and the fallback.** `currentLang()` reads `localStorage.lang` and falls back to `'en'`; `t(key)` falls back `current → en → the key string itself`. The literal text in `index.html` is the **EN copy** and must stay in sync with `I18N.en` — it's what shows before `applyLang` runs and if JS dies.
- **Static markup** is translated by attribute, all handled in `applyLang()`:
  - `data-i18n` → `textContent` (the common case)
  - `data-i18n-html` → `innerHTML` — only where the string carries markup, e.g. the hero title's `<em>`
  - `data-i18n-placeholder` → `.placeholder`, `data-i18n-alt` → `.alt`
- **Dynamic markup** (product cards, category filters, modal, email message bodies) is built in `script.js` and pulls strings through `t()` at render time. That's why `applyLang()` ends by calling `renderFilters()` + `renderProducts()` — switching language has to re-render them.
- `CAT_DESC_FOR(id)` reads `cat.desc.<id>` directly out of `I18N` (not via `t()`, since it needs its own fallback chain) and lands on `modal.fallbackDesc` when a category has no description. `rapid-test` has no `cat.desc.*` key on purpose.
- Message templates use `{name}` placeholders replaced with `.replace()` — see `emailLink()`.
- Language switcher is flags-only (inline SVG `<symbol>` sprite at the top of `<body>`, referenced by `<use>` from both the desktop `.lang-switch` and the mobile `.mob-lang-switch`). Inactive flags are desaturated in CSS. `<html lang>` is updated too, via `HTML_LANG` (`zh` → `zh-CN`).

⚠️ **`data-i18n` overwrites `textContent`, wiping child elements.** Any element that mixes translated text with markup needs `data-i18n-html`, or must be split so the translated part is its own leaf node — this is why `.hs-num` / `.abt-stat-n` keep the number and the trailing "+" in separate spans, and why sentences with an inline link (`home.products.note1/2/3`, `career.apply.desc1/2`) are split into numbered fragments.

Parity check when adding keys:

```sh
python3 - <<'EOF'
import re
s = open('i18n.js').read()
ks = {l: set(re.findall(r'"([^"]+)":', re.search(r'^%s: \{(.*?)^\},?$' % l, s, re.S|re.M).group(1)))
      for l in ('en','zh','id')}
for l in ('zh','id'): print(l, 'missing:', sorted(ks['en'] - ks[l]))
EOF
```

## Design System (Tawada-inspired reskin)

Values live in `style.css` `:root`. Do not reintroduce Inter/DM Serif Display — the two-font system below is intentional and was a deliberate large redesign the user asked for ("rombak habis-habisan, bikin mirip Tawada").

- **Fonts**: `Hanken Grotesk` (headings, bold/800, sans — no serif anywhere) + `Be Vietnam Pro` (body text). Loaded via Google Fonts link in `index.html` `<head>`.
- **Colors**: brand blue `--blue-600:#0D77BD`, dark navy `--blue-800:#073C5F` (used for "About/Vision-Mission" and "Our Products" dark sections), near-black navy `--gray-900:#031826` (used for the "Why Wego Medika" dark section and hero overlay). Footer background is solid `var(--blue-600)`.
- **Radius**: buttons are full pills (`--r-pill:100px`) — every CTA-like button class was explicitly converted. Cards use enlarged `--r-md:20px` / `--r-lg:28px`.
- **Hero**: full-bleed rounded photo banner (`.hero-banner`, real HQ photo `assets/locations/hq_wisma67.jpg`) with dark gradient overlay + slow Ken Burns zoom, staggered entrance animation, a solid-white primary CTA (`.btn-solid-white`) beside a ghost secondary (`.btn-outline-white`), floating glass stats card (`.hero-stats-float`) overlapping the bottom edge, and a vertical scroll cue. Under 600px the overlay flips to a top-to-bottom gradient so copy stays legible over the bright glass.
- **"Why Wego Medika" section** (`.why-sec`): dark navy background, light (`--card-tint:#FAFAFA`) cards with bordered icon box — mirrors Tawada's "Discover Our Services" pattern.
- **Intro splash** (`.splash`): full-viewport overlay, "Welcome to" + `wego-full.png` + a loading bar, shown **once per browser session** (`sessionStorage.splashSeen`). Its ground is deliberately **light** (white → `--sky-50` → `--blue-50` wash): the logo is two-tone — a blue plate with a knocked-out white heart — so any single-colour recolour collapses the mark into a solid block. While `html.splash-active` is set, the hero entrance animations are held with `animation-play-state:paused` so they don't play unseen behind the overlay.

### Token layer (all in `style.css` `:root`)

Fluid type (`--t-display`…`--t-xs`), rhythm (`--sp-section`, `--sp-gutter`, `--shell:1240px`), radii (`--r-xs`…`--r-pill`), navy-tinted elevation (`--e-1`…`--e-4`, `--e-blue`, `--sh-btn`), motion (`--ease-out`, `--ease-io`, `--ease-spring`, `--dur*`), and `--grain` (an inline SVG turbulence data-URI used as a film-grain `::after` on every dark surface). **Prefer composing from these over new hardcoded values.**

**Sidebar scroll isolation.** `.sidebar` on the Products page is `position:sticky` **and its own scroll container** (`max-height` capped to the viewport below the sticky offset, `overflow-y:auto`, `overscroll-behavior:contain`). Before that it was sticky only, so scrolling with the cursor over the category list scrolled the *page* — the sidebar stayed pinned and the product grid moved, which read as a bug. The `padding-inline:6px` / `margin-inline:-6px` pair exists so the `.sb-block` card shadows aren't clipped by the new overflow box while the content stays at the same x. The stacked breakpoint resets all of it.

⚠️ **CSS math needs spaces around the operator** — `clamp(2rem,1.5rem+2vw,3rem)` is invalid and gets silently dropped by the browser; write `1.5rem + 2vw`. This has already bitten this project once.

### Animation conventions

- Scroll reveal: add `.reveal` to a single element or `.reveal-group` to a parent (its direct children stagger 80ms apart). A single observer in script.js handles both. The older `revealOnScroll(gridId, cardSelector)` helper (`.in-view`-based) is still wired up for the value/partner/logo/location grids — either is fine, don't add a third mechanism.
- **Use `animation-fill-mode: backwards`, never `both`,** for entrance animations. `both` pins the final `transform` at animation priority and permanently kills the card hover lifts. Where the end state must persist (`.reveal.in`), set it as a normal declaration and keep fill at `backwards`.
- A `<noscript>` block in `index.html` `<head>` force-shows all reveal-hidden elements, so JS failure can't leave the page blank.
- `@media (prefers-reduced-motion:reduce)` neutralizes all of it — keep new animation inside that safety net.

Other script.js additions: scroll-driven nav state (`nav.scrolled`), `.scroll-prog` progress bar, back-to-top FAB, and `countUp()` for `.cnt[data-count]` stat numbers. In `.hs-num` / `.abt-stat-n` the bare `<span>` is the trailing "+" (styled accent) and `.cnt` is the number — don't merge them.

⚠️ **Never name a global used from an inline `onclick` after a DOM property.** Inline handlers resolve identifiers against the element first, so `onclick="scrollTop()"` silently hit the element's numeric `Element.scrollTop` and threw instead of calling the global. The back-to-top FAB is `goTop()` for this reason — same trap applies to `title`, `name`, `id`, `children`, `remove`, etc.

## Page inventory

- **Home**: intro splash (first visit of the session) → hero banner → floating stats → Why Wego Medika (dark) + certification strip → Company Values (8 cards) → Our Products (brand distribution, renamed from "Our Partners") → Our Partners (logistics/legal/calibration, logo wall) → About/Vision-Mission (dark) → final CTA. The old "Our Customers" logo wall and "How It Works" sections have both been **removed** — that's why `assets/logos/GGM.png` and `biosensor.png` are now unreferenced.
- **Products**: sidebar filter (category + search) + product grid + modal detail. `PRODUCTS` array in script.js — 115 items (37 Abbott, 15 WEGO, 14 Cordis, 12 BD, 9 Lorne, 9 Proline, 8 Biosensors, 6 Sansico, 5 Afinion). Two different provenances, don't conflate them: the first 50 (27 Abbott instruments + Cordis + WEGO) mirror the live wegomedika.com catalog 1:1 (see "known content oddity" below) and have **no** per-product description; the 65 newer ones (10 Abbott reagents/consumables, 5 Afinion, 12 BD, 9 Lorne, 9 Proline, 6 Sansico, 8 Biosensors, 6 WEGO) came from PDFs supplied by the Wego team and each carry a `desc` key (see "Per-product descriptions" below). `CATS_LIST()` still offers **`wemed` and `rapid-test`, both with zero products** — deliberately, see Open items.
- **Locations**: national coverage map → HQ (Jakarta Pusat) → 3 branches (Medan, Makassar, **Surabaya**) → 2 rep offices (Yogyakarta, Semarang) → 1 warehouse (Jakarta Utara). Real photos + addresses from the company profile PDF. HQ is a full-row feature card `.loc-hq` (image left / detail right); branches and rep offices use the standard `.loc-card`. Photos mix portrait and landscape, so `.loc-img img` is `object-fit:cover` to keep the grid uniform. Surabaya was **moved from rep office to branch** — its photo file is still named `rep_surabaya.jpg`, which is expected, not a mismatch. The warehouse is now a **single photo-less `.loc-plain` card** (icon + address); the four `assets/locations/warehouse_*.jpg` files are left in the repo but unreferenced.
- **Career**: Vision/Mission/Motto cards, hiring positions, apply CTA (email primary + phone secondary).
- **Contact**: info card (phone/email/address + Follow Us row), form (composes a `mailto:`, no backend), embedded Google Map.

## Per-product descriptions

The modal's description block runs through `PROD_DESC(p)`: **`t(p.desc)` → `CAT_DESC_FOR(p.cat)`**. So a product may carry `desc:"<i18n key>"` for its own write-up; anything without one still falls back to the brand-level blurb, which is how all 50 of the original Abbott/Cordis/WEGO items still work.

`p.desc` holds an **i18n key, not literal text** — the write-up has to exist in all three dictionaries. Keys live under `prod.desc.*`. The strings are injected as `innerHTML` (the modal is built by template literal), so `<br>` and `•` are fine for structure — but keep it to inline markup, since it lands inside a `<p>` where a `<ul>` would be invalid HTML.

**`descVars` for near-identical variants.** `PROD_DESC` fills `{placeholder}` tokens from an optional `descVars` object on the product. Use it when listings differ only by a size/gauge — the two `BD Nexiva` entries and the two `BD Spinal Needle` gauges share one translated write-up each, instead of six near-duplicate strings that would drift apart. Every `{token}` in a string must be supplied, or it renders literally.

### Names are never translated — descriptions are

User decision, applies to the whole Products tab:

- **Product names** — `PRODUCTS[].name` is a plain string, never an i18n key. It's the principal's own listing title and reads identically in EN/ZH/ID, including Indonesian-prefixed INAPROC titles like *"Reagen Skrining Darah ALINITY i HBsAg Next…"*. Don't "translate", tidy, or normalise these — **not even when the same brand is spelled two different ways across the client's own listings** (see Sansico's `d3TEKS1`/`dETEKS1` below). The user has corrected this once already; the client owns the naming.
- **Brand names** — the `cat.*` labels are byte-identical across all three dictionaries (`Abbott`, `Afinion`, `Cordis`, `WEGO`, `WEMED`, `Rapid Test`). ZH used to carry 雅培 / 科迪斯 / 快速检测; those were removed. Brand names inside ZH descriptions were switched to Latin script for the same reason.
- `cat.all` ("All Products" / 全部产品 / Semua Produk) is a **UI label, not a brand** — it stays translated. Same for every other `products.*` string.

Only `cat.desc.*`, `prod.desc.*` and `cat.catalogNote.*` carry real prose, and those do get translated.

### Extracting product photos from the supplied PDFs

The Wego team sends product sheets as PDFs (`~/Downloads`, e.g. `AFNION WEGO.pdf`, `ABBOT WEGO.pdf`). Photos come out of the PDF's **embedded image XObjects** via PyMuPDF — not screenshotted, so they keep native resolution:

```python
import fitz
d = fitz.open('/path/to.pdf')
for pno in range(len(d)):
    for info in d[pno].get_images(full=True):
        px = fitz.Pixmap(d, info[0])          # info[0] is the xref
        while px.width > 760: px.shrink(1)    # shrink(1) halves; keeps files ~10-40 KB
        px.save('assets/products/name.jpg', jpg_quality=88)
```

⚠️ **There is no `pdfimages` / `mutool` / `qpdf` / `ghostscript` / ImageMagick on this machine.** PyMuPDF (`import fitz`) is the only working tool for this — don't waste a turn discovering that again.

In these PDFs the layout is **image directly above its caption**, so `get_images()` order matches product order. Still **read every extracted image back** before wiring it up — that check is what caught the HBsAg mismatch below. Card and modal both use `object-fit:contain`, so mixed aspect ratios are fine.

### Afinion (the `afinion` category)

Afinion™ is Abbott's point-of-care line, but it gets **its own category rather than folding into `abbott`** because it sits under a different INAPROC seller — **ALERE HEALTH**, not PT Abbott Products Indonesia — so it needs its own `CATALOG_URL` entry and its own catalogue caveat.

Its 5 products, photos, and Indonesian write-ups came from **`AFNION WEGO.pdf`** (supplied by the Wego team, `~/Downloads`). The photos were extracted with PyMuPDF straight from the PDF's embedded image XObjects (`fitz.Pixmap(doc, xref)`), not screenshotted, then halved and saved as `assets/products/afinion-*.jpg`. Note there is **no `pdfimages`/`mutool`/`ImageMagick` on this machine** — PyMuPDF (`import fitz`) is the working tool for this.

The ID strings are the PDF's own wording (typos fixed: "pemetiksaan" → "pemeriksaan", "catridge" → "cartridge"); EN and ZH are translations of it.

### Abbott reagents & consumables (10 items)

From **`ABBOT WEGO.pdf`** (Wego team, `~/Downloads`), added into the existing `abbott` category — reagents, calibrators, controls and spare parts, as opposed to the 27 instrument listings scraped from wegomedika.com. `prod.desc.ab*` keys. Photos are real shelf/bench photos, not studio renders, so they're visually scruffier than the rest of the grid — that's the source material, not a processing bug.

Two source oddities, both **left as-is on purpose** (same policy as the Cordis naming oddity below):

- **`Reagen Skrining Darah ALINITY i HBsAg Next Qualitative Reagent Kit 2 x 600 Test`** — the caption says *HBsAg **Next**, 2 x 600 Test*, but the box in the photo reads *HBsAg **Qualitative II** Reagent Kit*, REF `08P1022`, *2 x 100*. The caption is the INAPROC listing title, so it wins for the product name; the photo is the one the Wego team supplied. **Raised with the user and settled: leave it** — "gapapa karena dari sumber client kek gitu." The mismatch is the client's, not ours to reconcile.
- **`Perialistic Pump Tubing 91485-01`** — "Perialistic" is a typo for "Peristaltic" in the source listing. Kept verbatim so it stays greppable against their catalogue.

The other eight were verified against the REF numbers legible in the photos (`04U7302`→`4U73.02`, `07P6810`→`7P68.10`, `01E0224`→`1E02.24`, `08P1140`→`8P11.40`) — all correct.

### Becton Dickinson (the `bd` category, 12 items)

From **`BECTON DICKINSON WEGO.pdf`** (Wego team). Category id `bd`, label `Becton Dickinson`, badge `BD`, `CATALOG_URL.bd` → `https://katalog.inaproc.id/becton-dickinson-indonesia`. Mixed range: peripheral vascular catheters (Ultraverse, Conquest, Rotarex), IV access (Nexiva, Posiflush, Vacutainer), anaesthesia needles, and microbiology media (BBL TAXO P, Mannitol Salt Agar) plus a flow-cytometry kit.

- The three catheter listings carry **long REF code lists** (Ultraverse alone has 34). They're in the `prod.desc.*` strings after a `<br>`, identical across all three languages since they're part numbers.
- **`bd-spinal-needle.jpg` is referenced by two products** (25 G and 27 G). That's not an oversight — the source PDF uses one byte-identical photo for both gauges (verified by hashing the decoded pixmaps). Stored once, `descVars.gauge` supplies the difference.
- `Rotarex S Rotational Catheter`'s image is a **marketing banner** ("Atherectomy + Thrombectomy"), not a product shot — that's what the PDF contains.

### Lorne (the `lorne` category, 9 items)

From **`LORNE WEGO.pdf`** (Wego team). Lorne Laboratories, UK ("LORNE LABORATORIES / GREAT BRITAIN" is legible on the reagent tub in the photos). Blood grouping (ABO + Rh D), syphilis RPR kits, CRP latex, and febrile antigen reagents. Listed on INAPROC under the seller **Rafa Topaz Utama**, not under Lorne's own name — so, like Afinion, brand ≠ seller, and `cat.catalogNote.lorne` says so explicitly.

**This PDF's source language is English**, unlike the Afinion/Abbott/BD ones — so here EN is verbatim from the source and *ID and ZH are the translations*. Don't assume the ID string is always the original.

9 products share **6 description keys and 7 image files**, deliberately:

- `prod.desc.lorneAbo` is used by all three ABO reagents (Anti-A, Anti-A,B, Anti-B) — the source gives them identical text.
- `prod.desc.lorneSalmonella` is used by both Salmonella reagents (Paratyphi BH, Typhi H), which also **share `lorne-salmonella-reagents.jpg`**.
- The two RPR Carbon Kit sizes (500 and 150 Test/Kit) **share `lorne-rpr-carbon-kit.jpg`** but have different text.

Reusing one `desc` key across products is a supported pattern — `PROD_DESC` just resolves the key, nothing assumes a 1:1 mapping. Image duplication was confirmed by hashing the decoded pixmaps, not guessed. Cap colours cross-check the mapping: Anti-A blue `600010`, Anti-B yellow `610010`, Anti-A,B white `620010`, Anti-D grey `740010`.

### Proline (the `proline` category, 9 items)

From **`Proline Wego.pdf`** (Wego team). PT Prodia Diagnostic Line Tbk's **own** INAPROC storefront (`.../prodia-diagnostic-line`) — brand and seller match here, unlike Afinion/Lorne.

**Three of the nine are calibration SERVICES, not goods** — `Kalibrasi Timbangan Bayi Mekanik dan Digital`, `Kalibrasi Instrumen Photometer`, `Kalibrasi Instrumen Hematologi 5 diff`. They're onsite medical device testing/calibration with results filed into the Ministry of Health's ASPAK system. They sit in `PRODUCTS` alongside real goods, under a page titled "Product Catalog", with "Email"/"Call" CTAs in the modal. **Raised with the user and settled: leave them as they are** ("diemin aja dulu gapapa"). Don't propose splitting them into a Services section.

Also note the listings carry **four different manufacturer marks** — PROLINE, DYMIND, SNIBE and DIMI (DIMI is PT Dirui Medical Indonesia) — but all sit under the single Proline/Prodia seller, so they share one category rather than getting one each.

Source oddity, **resolved by merging**: page 1's first image is byte-identical to the `Kalibrasi Instrumen Photometer` banner on page 5, and its caption reads literally `(tidak diberikan desc)`. Treated as the same listing pasted twice — one product, using the page-5 description. If the Wego team meant it as a *separate* listing that genuinely has no description on INAPROC, it needs re-adding.

The images are **full marketing banners** (title text, KEMENKES AKD number, TKDN badge, INAPROC logo baked in), not isolated product shots, so this category looks different from the rest of the grid. That's the source material.

Source language is Indonesian; EN and ZH are translations.

### Sansico (the `sansico` category, 6 items)

From **`SANSICO.pdf`** (Wego team). Seller **Sansico Natura Resources**; the kits themselves carry two marks, **dETEKS1** and **Everlife**. All six are immunochromatographic rapid tests (hepatitis B surface antigen and antibody, malaria Pf/Pan, HIV 1/2, and a 5-parameter drugs-of-abuse panel), boxed in 25s.

This category overlaps the still-empty `rapid-test` category — `CATS_LIST()` offers a `Sansico` filter full of rapid tests *and* a `Rapid Test` filter with zero products, side by side. **Settled: that is intentional.** Built as `sansico` to stay consistent with every other brand-named category, and the user confirmed the empty `rapid-test` category stays because it mirrors what the client wants.

Two source oddities:

- **Brand spelling is inconsistent in the source, and stays that way.** The PDF writes `d3TEKS1` on pages 1–2 and `dETEKS1` on page 4, for the same brand. Rendering the box logo at 14× zoom shows it actually reads **dETEKSI** (a stylised `E` that looks like a `3`, and a final `i`). These were briefly normalised to `dETEKS1`; **the user reverted that — "penulisan nama product jangan ubah, itu dari client punya."** Each name and description now carries the spelling its own caption used. So `d3TEKS1 HBsAg` and `dETEKS1 Malaria` coexist on the site **on purpose**; do not "fix" it.
- **`Multidrug Rapid Test 5 Parameter (OPI, MET, COC, AMP, THC)`** — this listing's caption in the PDF is a description with **no product name at all**. The title is read off the box art, with no brand prefix added (an earlier `dETEKS1 ` prefix was removed as invented). Worth confirming against the real listing title.

The two malaria entries (Everlife and dETEKS1) have near-identical descriptions — the dETEKS1 one just omits the box-contents sentence. Separate keys rather than shared, because they genuinely differ at the end.

Source language is Indonesian; EN and ZH are translations. Typos fixed along the way: `lacate` → `lactate`, `standart` → `standar`, `mancakup` → `mencakup`, `Immunodeciency` → `Immunodeficiency`, `National Institute on Drugs Abuse` → `Drug Abuse`.

### Biosensors (the `biosensors` category, 8 items)

From **`BIOSENSORS.pdf`** (Wego team). Biosensors International interventional cardiology, on their own INAPROC storefront (`.../biosensors-intervensional-teknologi`). BA9 (Biolimus A9) stents, a drug-coated balloon, intravascular lithotripsy, and IVUS/FFR physiology hardware.

**Source language is English**, like the Lorne PDF — EN is verbatim, ID and ZH are the translations. Badge is `BIOSENSORS`, the longest one on the site (10 chars); `.pc-badge` is 10px with no width cap, so it renders at roughly 92px inside a 238px-minimum card — it fits, but a longer badge than this would need checking.

This PDF's layout still puts **the image above its caption**, but captions frequently **spill onto the next page**, and pages 3, 7 and 9 are image-only. Map by position (`get_image_rects` + `get_text('blocks')` y-coords), not by page — see the extraction note above.

Three things worth knowing, all **left as the client wrote them**:

- **`BioMatrix VI Drug Eluting Coronary Stent System (BMX6 DES)`** — the caption says *BioMatrix VI*, but the poster image is for *BioMatrix **alpha*** (`BioMatrix·α`). Same class of mismatch as the Abbott HBsAg one, and settled the same way: the client's source wins, don't reconcile it.
- **`BioAscend Biolimus A9 Drug-Coated PTCA Balloon Catheter`** — its caption carries **no product name**, just a description starting "The product consists of a balloon catheter…". Title read off the poster art, same as Sansico's Multidrug.
- **`IVUS Console`** — also unnamed in the caption; the title is the description's own opening phrase. The machine in the photo is branded *Insight Lifetech*.

One deliberate edit: the IVUS Console description's source ends "The following figure shows the structure of the pullback unit." That sentence was **dropped** — it points at a figure that has no counterpart on the site, so it would dangle.

### The WEGO extras (6 of the 15 `wego` items)

From **`Untitled document.pdf`** (Wego team) — a Google Docs export, not an INAPROC page dump, so **there is no catalogue URL** for these and no `CATALOG_URL.wego`. That is correct, not an omission.

⚠️ **These deliberately overlap other categories.** The batch is mostly **Cordis**-branded (Biopsy Forceps, S.M.A.R.T CONTROL, SABER, AVIATOR Plus) plus a **PROLINE** analyzer and a **SELUTION/MedAlliance** balloon — all filed under `wego` because the client asked for it: *"kalo ada yang sama dengan category lain gapapa, itu permintaan client."* **Do not dedupe these or re-file them.** None is an exact name-duplicate of an existing Cordis/Proline entry.

They were **first added under `wemed` by mistake and moved to `wego`** on the user's correction; image files and `prod.desc.wego*` keys were renamed to match, so nothing still says "wemed".

Three names arrived carrying literal **`[register]` / `[tradermark]`** tokens — broken ®/™ glyphs in the client's document (note the misspelling, "tradermark"). They were kept verbatim at first under the never-change-a-name rule, then **the user asked for them to be dropped outright** ("untuk simbol ilangin aja gapapa"). They are now deleted, with no ®/™ put back and the rest of each name untouched — e.g. `S.M.A.R.T CONTROL Nitinol Stent System ( Type C10060MV )`.

Also from the source, left alone: the S.M.A.R.T CONTROL box photo is labelled `REF C14080MV` while the heading says `( Type C10060MV )`. Same class as the Abbott HBsAg mismatch; the client's text wins.

These descriptions are the first to use **`<strong>`** for the source's section headings ("Deskripsi", "Tujuan Penggunaan", "Indikasi"). Inline markup inside the `<p>` is fine; the `<ul>` restriction above still applies.

Source language is Indonesian; EN and ZH are translations. Typos fixed: `urinaslisis` → `urinalisis`, `dimaksdukan` → `dimaksudkan`, `sekalipakai` → `sekali pakai`.

## ⚠️ script.js was truncated once — how, and what it cost

A Python edit did `s = s[:index_of_block] + new_block`, which **silently deleted everything after the PRODUCTS array** — all ~350 lines of functions. `node --check` still passed, because a file containing only constants and an array is perfectly valid JavaScript. **A syntax check is not a completeness check.** Check `wc -l` and `grep -c 'function '` after any structural rewrite, and prefer a targeted `.replace(old, new)` with an asserted match count over slicing by index.

Recovery was awkward and is worth understanding, because it says something about this repo's state: `git show HEAD:script.js` gives a version that still has **WhatsApp throughout**, no intro splash, no catalogue links and no per-product descriptions — i.e. **a large amount of this project has never been committed.** Rebuilding meant taking the intact PRODUCTS head, appending the committed tail, and re-applying every uncommitted change from scratch. The pieces re-applied were: the whole WhatsApp removal (`waLink`, `sendWA`, `.bwa`, `.m-wa`, `.empty-wa`, the `WA` constant), email+phone actions in the card and modal, `CATALOG_URL`/`catalogLink`/`CATALOG_NOTE_FOR`, `PROD_DESC`, `catalogBar`, the modal catalogue section, the intro splash with `introQueue`/`runAfterIntro`, and removal of the `#procSteps` observer (that element no longer exists in index.html, so the unguarded `.observe(null)` in the committed version would throw and kill the rest of the script).

**Commit early.** The next time this happens there may be nothing close to recover from. VSCode local history was checked and held nothing for this file.

## Per-product catalogue links

Each product may carry its own `url:"https://..."` in the `PRODUCTS` array. `catalogLink(p)` in `script.js` resolves it as **`p.url` → `CATALOG_URL[p.cat]` → `""`**, and the modal renders the "Official catalogue" section only when the result is non-empty. To wire up a specific product, just add `url:` to that item — nothing else needs touching. A brand with no `CATALOG_URL` entry (currently Cordis and WEGO) simply renders no link.

`CATALOG_URL` currently has seven entries, all INAPROC seller storefronts: `abbott` → `.../abbott-products-indonesia`, `afinion` → `.../alere-health?catalogueSearch=afinion`, `bd` → `.../becton-dickinson-indonesia`, `lorne` → `.../rafa-topaz-utama?catalogueSearch=lorne`, `proline` → `.../prodia-diagnostic-line`, `sansico` → `.../sansico-natura-resources?catalogueSearch=rapid`, and `biosensors` → `.../biosensors-intervensional-teknologi`. Note two of the seven sit under a **third-party seller** (Alere Health, Rafa Topaz Utama) rather than the brand's own storefront.

**The same map also drives the "Click here to see more" bar under the product grid** (`catalogBar()` in script.js, `.cat-note` in style.css). It is **category-scoped**: it renders only while that brand's filter is active (never on "All"), and only if the brand has a `CATALOG_URL` entry — so today it appears under Abbott, Afinion, BD, Biosensors, Lorne, Proline and Sansico, and nowhere else. It also renders under the empty state, which is deliberate: an empty category with a catalogue link still gives the visitor somewhere to go.

To wire up another brand later, the whole change is:

1. add `cordis: "https://…"` (etc.) to `CATALOG_URL`, and
2. optionally add a `cat.catalogNote.<id>` string to all three i18n dicts for a brand-specific blurb.

`CATALOG_NOTE_FOR(id)` reads `cat.catalogNote.<id>` straight out of `I18N` (same pattern as `CAT_DESC_FOR`) and falls back to the generic `products.more.descFallback`. `{brand}` in `products.more.title` / `products.more.emailSubject` / the fallback blurb is replaced with the category label at render time.

⚠️ **That INAPROC link is Abbott's own seller storefront on LKPP's government e-catalogue, not Wego's catalogue.** Prices there are government-procurement prices set by Abbott's own entity (PT Abbott Products Indonesia, Jakarta Selatan — verified: the address/postcode on the page matches). This is why the modal copy (`modal.catalogNote`) explicitly says pricing there is for government procurement and asks the visitor to contact Wego for a distribution offer — keep that caveat if you touch the wording.

### Don't retry scraping INAPROC — it doesn't work

An attempt to import the Abbott product list from `katalog.inaproc.id` failed, and the reasons are structural, not transient:

- `WebFetch` → **HTTP 403** (both with and without `?page=1`).
- `curl` with a browser UA → **HTTP 200 but zero product data**. The page is a Next.js app that renders products client-side; the served HTML has no `nama_produk` / `harga` / `slug` anywhere, and the pagination text comes through empty (`"1 10 Data Total"`).
- Four guessed REST endpoints under `/api/...` → all **404** (they return the SPA shell).
- Grepping ~500 KB of the app's JS chunks surfaced only `/api/client_log/batch` — no product endpoint. INAPROC is a government procurement platform; the catalogue sits behind a buyer account.

**Re-verified (2026-08-12), same result** — plus two new findings that close the question for good:

- Decoding the page's full Next.js RSC payload (the 26 `self.__next_f.push(...)` chunks, ~49 KB) shows seller data only — `initialDataStore`, company profile, KBLI codes. Zero product objects: `produk`/`harga`/`price` appear **0 times**, and every hit for `product` is just the string `production` inside the asset CDN path.
- **`https://katalog.inaproc.id/robots.txt` explicitly `Disallow: /api/`** (and `/_next/`). So even if a product endpoint were found, hitting it is against their robots policy. `sitemap.xml` lists three URLs total and no product pages.

If the full Abbott range is ever needed on the site, **get the list from the Wego team** (what they actually distribute) rather than scraping a principal's government storefront. The site links out to INAPROC instead — see "Per-product catalogue links" above.

## Known content oddity (don't "fix" without checking source)

One Cordis product is literally titled `"CORDIS EXOSEAL Vascular Closure Device / CORDIS PRECISE & PRECISE RX Nitinol Stent System"` in `script.js`. This isn't a scraping bug — verified it's a genuine distinct product on the live wegomedika.com site with its own URL slug, just badly named on their end (likely a copy-paste mistake by whoever manages their WooCommerce store). Left as-is intentionally.

## Open items — need higher-ups input before proceeding

- **Vision/Mission wording conflict**: the company profile PDF says "To become a leading key player in providing solution for health care with high quality" / "...committed to be a partner for the customers...", but an earlier "higher-ups" chat message gave different wording ("To be a premier provider of affordable, high-quality healthcare solutions" / "Driven by innovation..."). The site currently uses the **second (chat message) version**. Flagged, not resolved — ask which is authoritative.
- **Board of Directors** (Agusten/President Director, Yudi Priantoro/Director, Jamie Quek Yang Ming/Director of Operational) — photos exist in the company profile PDF but were **not** added to the site; real identifiable people's photos need explicit go-ahead first.
- **Full brand portfolio expansion**: the PDF's "Business Units" page lists ~15 brands across Disposable/Diagnostic/Intervention (GGM, LILY Medical, LELTEK, iDSmed, BD, WEMED by Wantai, IMI Medika, ProLiNE, DYMIND, arkray, Biosensors, Kaneka Medical, Cordis, Abbott, WEGO). Partly underway — the user is feeding brands in one PDF at a time, and **Afinion, BD, Lorne, Proline, Sansico and Biosensors have landed in the Products catalogue**. The **homepage "Our Products" section deliberately still shows only the original four cards** (Abbott/Cordis/WEGO/WEMED).

  **RESOLVED — do not add homepage cards for the new brands.** The user's reason: *"masih belum mendapatkan persetujuan untuk pakai logo brand orang"* — Wego does not yet have permission to display these principals' logos. This is a **rights** question, not a design one, so don't offer to build the cards, mock up placeholder logos, or "just use the brand name as text" until the user says permission came through. New brands keep landing in the Products catalogue only.
- **Empty product categories — intentional, stop asking.** `wemed` and `rapid-test` both hold zero products; the sidebar shows them at `0` and the home page's WEMED card (`showPage('products','wemed')`) lands the visitor on the empty state. The user settled this: the empty categories mirror what the client wants. (A batch was briefly filed under `wemed` and then moved to `wego` at the user's correction — see the WEGO section.)
  - **RESOLVED — leave the empty categories alone.** The six Sansico items *are* rapid tests, so the sidebar shows a populated `Sansico` next to an empty `Rapid Test`. Raised with the user; answer was **"kalo untuk rapid test kosong gapapa karena kita ikutin client maunya."** The empty `rapid-test` (and `wemed`) categories are the client's structure — **keep them, stop offering to remove them.**

## Known content inconsistencies (unresolved, flagged not fixed)

- **Years in business don't agree.** The About heading says "Nearly *20 years*", the stat counters say "12+", and the company was founded 11 April 2012 (so 14 as of 2026). All three appear in `index.html` and in all three `I18N` dictionaries — fixing means touching every copy.
- **Footer still reads `© 2024`** (`.ft-copy` in `index.html`, not translated / not a token).

## Working conventions observed this session

- User writes in Indonesian, casual/direct tone ("rombak mampus mampusan", "coba aja dulu kalo bingung ga usah"). Match that register in chat. **Site copy is a different matter**: it used to be a fixed Indonesian/English mix, but is now a proper three-language site with **English as the default and fallback** — write new copy in EN first, then add the `zh` and `id` translations in the same commit.
- When given ambiguous/big content decisions (which brands to add, whose photos to publish, conflicting official wording), the user prefers **pause and ask** over guessing — confirmed via `AskUserQuestion` several times this session, always well received.
- For anything scraped from a real website, verify actual counts/categories against the live site (e.g. WooCommerce result counts) rather than trusting a single page fetch — this caught real mapping bugs earlier (Locations photo mismatches, Cordis product miscount).
- User re-opens the site in browser after each change (`open index.html`) to eyeball it — keep doing that after edits rather than only asserting correctness from code review.
