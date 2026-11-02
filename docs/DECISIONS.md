# Architectural & Design Decisions

## 1. Design Direction: Academic Luxury / Editorial Celebration
- **Adopted Direction:** `name-as-monument` (from `design-taste-frontend` curated catalog).
- **Core Visual Idea:** The name "Thục Khuê" and the Master's defense milestone are treated as editorial architecture.
- **Color Discipline:** Warm Ivory (`#F8F1E3`) background for warmth and paper feel; Midnight Navy (`#172B46`) for crisp text (12.8:1 contrast ratio, WCAG AAA compliant); Champagne Gold (`#C5A052`) for accents, academic crests, and badges. Gold is strictly prohibited on small body text to prevent low contrast on mobile screens.
- **Anti-Slop Compliance:**
  - Absolute ban on Windows emojis (replaced with vector SVG crests).
  - No hairline dividers or floating cards with artificial drop shadows. Surfaces separated by clean tone steps.
  - Headlines strictly capped at 2 lines across all viewports using fluid `clamp()`.

## 2. Technical Stack: Vanilla TypeScript + Vite + Static CSS
- **Framework Choice:** Vanilla TypeScript without heavy component frameworks (React/Vue). Total production bundle is under 9 kB gzipped.
- **Viewport Resilience:** Utilizes `100svh` and `100dvh` with `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` to handle iOS Safari address bar collapse and iPhone notch/home bar.
- **Browser Heuristics:** Seamless in-app browser detection (Zalo / Facebook Messenger) providing non-intrusive guidance, Android Chrome `intent:` launch, and iOS best-effort link copy with no forced redirects.

## 3. Deployment Configuration: GitHub Pages
- **Target URL:** `https://lylamkhai218.github.io/the-golden-milestone-thuc-khue/`
- **Vite Base Path:** Dynamic configuration set to `/the-golden-milestone-thuc-khue/` on GitHub Actions, `./` for local development.
- **CI/CD:** Automated GitHub Actions workflow `.github/workflows/deploy.yml` on push to `main`.
