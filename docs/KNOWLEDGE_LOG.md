# KNOWLEDGE LOG & LESSONS LEARNED (APPEND-ONLY)

## [2026-11-02 15:00] Initial Scaffolding & Design Taste Auditing
- **Context:** Project initialization for `THE GOLDEN MILESTONE` dedicated to Thục Khuê from HKT.
- **Key Insight 1 (Graphic Standard):** Strict adherence to `RULE[user_global]`. All emojis (like graduation cap 🎓) must be replaced with crisp vector SVGs (monochrome or brand duotone) to maintain luxury editorial aesthetic and prevent garish Windows OS emoji rendering.
- **Key Insight 2 (Contrast & Accessibility):** On warm ivory (`#F8F1E3`), champagne gold (`#C5A052`) has a ~2.8:1 contrast ratio, failing WCAG AA for body text. Gold must be reserved for borders, badges, and accents; midnight navy (`#172B46`) provides 12.8:1 AAA contrast for copy.
- **Key Insight 3 (Anti-Slop Linter):** `design-taste-frontend` linter flags eyebrows, resting box-shadows, 1px hairlines, and gradient text. Replacing these with filled surfaces, tone steps, and solid brand typography elevates the design from "generic AI template" to refined editorial craft.
- **Key Insight 4 (Mobile-First Safari Quirks):** Avoid `100vh` due to mobile browser URL bar jump. Use `100svh`/`100dvh` along with `safe-area-inset` padding.
- **Key Insight 5 (Deployment Base Path):** Project site on GitHub Pages (`https://<user>.github.io/<repo>/`) requires Vite `base: '/<repo>/'` on GitHub Actions runner to ensure all script, CSS, and asset paths resolve without 404s.

## [2026-11-02 15:06] Tasteskill Gate Verification & Edge-Text Prevention
- **Observation:** `inspect.mjs` failed on mobile 390px with `[edge-text]` when `.hero-section` and `.site-footer` defined `padding: var(--space) 0 var(--space)`. This inadvertently zeroed out `.container`'s horizontal padding.
- **Resolution:** Defined vertical-only padding (`padding-top` and `padding-bottom`) on nested sections, preserving the 24px/32px horizontal gutters of `.container`.
- **Result:** Passing the gate with **0 FAIL** across desktop (1440px), tablet (768px), and mobile (390px). Total production bundle size stands at only 8.8 kB gzip.

## [2026-11-02 15:15] Integration of Personal Artwork & Mortarboard Identity
- **Asset Ingestion & WebP Optimization:** Integrated `Ảnh Khuê vẽ tranh.jpg` into `public/assets/khue-painting.webp` (100 KB) and `Ảnh thumbnail link.png` into `public/assets/og-image.jpg` (270 KB) to prevent network lag on social preview bots (Zalo/Facebook).
- **Poetic Editorial Copy Refinement:** Refined the raw wish under the painting into: *“Hãy tự do vẽ nên chân trời ước mơ mà Khuê hằng khao khát, bằng trọn vẹn niềm say mê và nguồn sáng rực rỡ nhất nơi tâm hồn. Cứ vững vàng và tự tin tiến bước, bởi trên hành trình này, Khuê luôn là vầng sáng đặc biệt và đáng tự hào nhất.”*
- **Favicon Vector Mortarboard:** Crafted a classic academic Mortarboard square graduation cap (diamond geometry with tassel and brush in Champagne Gold on Midnight Navy) for `favicon.svg`, `favicon.ico`, and `apple-touch-icon.png`.
- **Quality Audit:** Zero FAIL on tasteskill inspector across 1440px, 768px, and 390px viewports.

## [2026-11-02 15:32] Visual Screenshot Critique & Editorial Layout Overhaul
- **Visual Audit Findings:** Inspecting actual rendered screenshots (`desktop-fold.jpg`, `mobile-fold.jpg`, `desktop-page-01.jpg`) revealed that a centered text-only hero and stacked identical 2-column blocks felt generic, while `Congratulations,` clipped slightly at 390px when `--text-monument` started at `3.5rem`.
- **Resolution 1 (Asymmetric Hero + Portrait):** Restructured [Hero.ts](file:///D:/Pictures/congratulations_khue/src/components/Hero.ts) into an asymmetric magazine cover pairing monumental typography (`clamp(2.5rem, 1.35rem + 5.2vw, 5.25rem)`) with Khuê's graduation portrait (`khue-graduation.webp`) right on the first screen.
- **Resolution 2 (Distinct Section Geometries):**
  - [Milestone.ts](file:///D:/Pictures/congratulations_khue/src/components/Milestone.ts): Converted to a full-bleed Midnight Navy (`#172B46`) band with an academic honor ledger (`<dl>`).
  - [Inspiration.ts](file:///D:/Pictures/congratulations_khue/src/components/Inspiration.ts): Framed `Ảnh Khuê vẽ tranh` as a gallery piece with the refined wish directly beneath the canvas (`<figcaption>`).
  - [MessageCard.ts](file:///D:/Pictures/congratulations_khue/src/components/MessageCard.ts): Separated the 3D-tilting handwritten postcard (`celebration-card.webp`) into the left column and the printed dedication + HKT signature + confetti/download actions into the right column.
  - [Signature.ts](file:///D:/Pictures/congratulations_khue/src/components/Signature.ts): Added the commemorative banner (`khue-commemorative.webp`) and clipboard link helper.
- **Verification:** Passed `lint.mjs` (0 FAIL) and `inspect.mjs` (0 FAIL across 1440px, 768px, 390px, 4 real images).


---

## [2026-11-02 15:46 GMT+7] — Senior FE & QA UAT Review, Fixes, Human-Centric README & GitHub Release

- **Task 1 — Senior FE & Lead QA UAT Findings Resolved (9/9 Fixed):**
  - Added [`asset-url.ts`](../src/utils/asset-url.ts) and [`vite-env.d.ts`](../src/vite-env.d.ts) so all dynamic `<picture>` / `<img>` paths resolve safely with `import.meta.env.BASE_URL` on both local dev (`./`) and GitHub Pages (`/the-golden-milestone-thuc-khue/`).
  - Updated [`Inspiration.ts`](../src/components/Inspiration.ts) with the refined heartfelt caption beneath `khue-painting.webp` and upgraded `khue-commemorative.webp` to `1200x802` full resolution.
  - Regenerated [`og-image.jpg`](../public/assets/og-image.jpg) (`1200x630`, `<250 KB`) preserving 100% of the commemorative portrait over a `#172B46` blurred backdrop with subtle gold framing lines, and cleaned up unused duplicate OG PNG files.
  - Restored verbatim congratulatory body copy and signature in [`MessageCard.ts`](../src/components/MessageCard.ts) (`From HKT (Hoàng - Khải - Tâm)`) with monochrome/duotone SVG vector icons (zero Windows OS emojis).
  - Added full keyboard accessibility (`tabindex="0"`, `role="region"`, `focus-visible` outline, and `Enter` / `Space` confetti trigger) to [`card-3d.ts`](../src/effects/card-3d.ts) and wired live `onReducedMotionChange` listeners in [`main.ts`](../src/main.ts).
- **Task 2 — Storytelling `README.md`:**
  - Crafted [`README.md`](../README.md) opening with a warm, human narrative celebrating Thục Khuê's Master's thesis defense and the 4 emotional chapters from **HKT (Hoàng · Khải · Tâm)**, followed by full technical documentation.
- **Verification Results:**
  - `npm run check` (`tsc --noEmit`): **0 errors**
  - `npm run build` (`vite build`): **Built in 200ms**
  - `design-taste-frontend` `lint.mjs`: **0 FAIL**
  - `design-taste-frontend` `inspect.mjs` (`1440px`, `768px`, `390px`, `320px`): **0 FAIL across all 4 viewports**


---

## [2026-11-02 15:52 GMT+7] — GitHub Pages Enablement & Deployment Fix

- **Root Cause of Run #1 (`41415586670`) Failure:**
  - The `build` job passed 100%, but the `deploy` job (`actions/deploy-pages@v4`) returned `HttpError: Not Found (status: 404) — Ensure GitHub Pages has been enabled` because the newly created repository did not have GitHub Pages (`build_type: "workflow"`) activated in repository settings yet.
- **Resolution:**
  - Programmatically enabled GitHub Pages (`POST /repos/lylamkhai218/the-golden-milestone-thuc-khue/pages` with `{"build_type": "workflow"}`) via the GitHub REST API.
  - Added `actions/configure-pages@v5` to [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) before `actions/upload-pages-artifact@v3` to ensure environment metadata is always configured prior to deployment.


---

## [2026-11-02 16:17 GMT+7] — Real-Device iPhone 13 (iOS 27 / Zalo In-App Browser) UAT Fixes (6/6 Resolved)

- **1. Safari External Browser Launch without Section Jump ([`external-browser.ts`](../src/utils/external-browser.ts), [`BrowserHelp.ts`](../src/components/BrowserHelp.ts), [`main.ts`](../src/main.ts)):**
  - Replaced `window.open(currentUrl, "_blank")` and `window.scrollTo` on `#btn-open-safari` and `#btn-footer-external` with `tryOpenExternalBrowser()` using `getCleanPageUrl()` (hash-free) and Apple's native `x-safari-https://` URI scheme.
  - Added an in-place centered modal overlay (`showExternalBrowserModal()`) that auto-copies the clean URL and provides a 2-step guide when Zalo on iPhone blocks custom URI schemes, with zero page jump.
- **2. Copy Adjustments on Message Card ([`MessageCard.ts`](../src/components/MessageCard.ts)):**
  - Removed `"viết tay"` from the intro copy and image `alt` attribute.
  - Removed `<p class="keepsake-hint">Di chuyển trên mặt thiệp để xem góc nghiêng 3D</p>`.
- **3. Removed `"Món quà kỹ thuật số từ HKT"` & Replaced All `—` with `-` ([`Hero.ts`](../src/components/Hero.ts), [`Milestone.ts`](../src/components/Milestone.ts), [`index.html`](../index.html), [`site.webmanifest`](../public/site.webmanifest), [`README.md`](../README.md)):**
  - Removed the `hero-lead-prose` paragraph (`"Món quà kỹ thuật số từ HKT..."`) from `Hero.ts`.
  - Replaced every em-dash (`—`) and en-dash (`–`) across all source files, meta tags, manifest, and README with a single hyphen (`-`).
- **4. Mobile-First 3D Tilt & Scroll Reveal Effects ([`card-3d.ts`](../src/effects/card-3d.ts), [`motion.css`](../src/styles/motion.css), [`components.css`](../src/styles/components.css), [`main.ts`](../src/main.ts)):**
  - Removed `if (e.pointerType === "touch") return;` in `card-3d.ts` so touch events (`touchstart`/`touchmove` and `pointermove`) tilt the 3D card with dynamic specular gold glare (`.keepsake-card-glare`).
  - Added continuous ambient 3D floating + scroll-driven 3D tilt on `#interactive-card` and `[data-tilt-scroll="true"]` portrait frames so 3D depth is clearly visible while scrolling on iPhone without needing a mouse cursor.
  - Added top gold scroll progress bar (`#scroll-progress-bar`) and upgraded `.reveal-on-scroll` with 3D perspective (`perspective(900px) translate3d(0, 48px, 0) rotateX(9deg) scale(0.94)`) and bi-directional re-reveal when scrolling back up.
- **5. Prevented Zalo Link from Forcing Jump to `#message-card` ([`index.html`](../index.html), [`Hero.ts`](../src/components/Hero.ts), [`main.ts`](../src/main.ts)):**
  - Added synchronous `<head>` script in `index.html` setting `history.scrollRestoration = "manual"`, stripping `window.location.hash` via `history.replaceState`, and calling `window.scrollTo(0, 0)` before `#app` mounts.
  - Changed `#cta-scroll-message` (`Mở thiệp mừng`) from `<a href="#message-card">` to `<button type="button">` using smooth JS scroll so `#message-card` never enters the URL bar.
- **6. Footer Back-to-Top Button & Copyright ([`Signature.ts`](../src/components/Signature.ts), [`icons.ts`](../src/components/icons.ts), [`main.ts`](../src/main.ts)):**
  - Added `#btn-back-to-top` (`Quay về đầu trang` with `Icons.arrowUp`) and `© Copyright Thục Khuê, HKT. All rights reserved.` at the bottom of the footer.
