# KNOWLEDGE LOG & LESSONS LEARNED (APPEND-ONLY)

## [2026-11-02 15:00] Initial Scaffolding & Design Taste Auditing
- **Context:** Project initialization for `THE GOLDEN MILESTONE` dedicated to Thục Khuê from HKT.
- **Key Insight 1 (Graphic Standard):** Strict adherence to `RULE[user_global]`. All emojis (like graduation cap 🎓) must be replaced with crisp vector SVGs (monochrome or brand duotone) to maintain luxury editorial aesthetic and prevent garish Windows OS emoji rendering.
- **Key Insight 2 (Contrast & Accessibility):** On warm ivory (`#F8F1E3`), champagne gold (`#C5A052`) has a ~2.8:1 contrast ratio, failing WCAG AA for body text. Gold must be reserved for borders, badges, and accents; midnight navy (`#172B46`) provides 12.8:1 AAA contrast for copy.
- **Key Insight 3 (Anti-Slop Linter):** `design-taste-frontend` linter flags eyebrows, resting box-shadows, 1px hairlines, and gradient text. Replacing these with filled surfaces, tone steps, and solid brand typography elevates the design from "generic AI template" to refined editorial craft.
- **Key Insight 4 (Mobile-First Safari Quirks):** Avoid `100vh` due to mobile browser URL bar jump. Use `100svh`/`100dvh` along with `safe-area-inset` padding.
- **Key Insight 5 (Deployment Base Path):** Project site on GitHub Pages (`https://<user>.github.io/<repo>/`) requires Vite `base: '/<repo>/'` on GitHub Actions runner to ensure all script, CSS, and asset paths resolve without 404s.
