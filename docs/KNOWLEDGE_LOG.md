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
