// Stylesheets
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/motion.css";

// Components & Effects
import { renderBrowserHelp } from "./components/BrowserHelp.ts";
import { renderHero } from "./components/Hero.ts";
import { renderMilestone } from "./components/Milestone.ts";
import { renderInspiration } from "./components/Inspiration.ts";
import { renderMessageCard } from "./components/MessageCard.ts";
import { renderFooter } from "./components/Signature.ts";
import { Icons } from "./components/icons.ts";
import { initParticles } from "./effects/particles.ts";
import { initCard3DTilt } from "./effects/card-3d.ts";
import { prefersReducedMotion } from "./utils/motion-preference.ts";

function initApp() {
  const app = document.getElementById("app");
  if (!app) return;

  // Mount Application Shell
  app.innerHTML = `
    <canvas id="particles-canvas"></canvas>
    <div id="browser-alert-container"></div>
    <div class="page-wrapper">
      <header class="container">
        <nav class="top-nav">
          <div class="brand-badge">
            <span class="brand-badge-icon">${Icons.graduationCap}</span>
            <span>The Golden Milestone</span>
          </div>
          <div style="font-family: var(--font-serif); font-size: var(--text-xs); letter-spacing: 0.1em; color: var(--color-gold-dark);">
            FOR THỤC KHUÊ
          </div>
        </nav>
      </header>

      <main>
        ${renderHero()}
        ${renderMilestone()}
        ${renderInspiration()}
        ${renderMessageCard()}
      </main>

      ${renderFooter()}
    </div>
  `;

  // Mount In-App Browser Alert if needed
  const alertContainer = document.getElementById("browser-alert-container");
  const alertElement = renderBrowserHelp();
  if (alertContainer && alertElement) {
    alertContainer.appendChild(alertElement);
  }

  // Initialize Canvas Gold Particles
  initParticles("particles-canvas");

  // Initialize 3D Keepsake Tilt
  initCard3DTilt("interactive-card");

  // Initialize Scroll Reveals
  initScrollReveals();
}

function initScrollReveals() {
  if (prefersReducedMotion()) {
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      el.classList.add("is-revealed");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

// Start application
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
