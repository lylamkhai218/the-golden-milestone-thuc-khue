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
import { triggerCelebrationConfetti } from "./effects/confetti.ts";
import { copyLinkToClipboard } from "./utils/external-browser.ts";
import { prefersReducedMotion } from "./utils/motion-preference.ts";

function initApp() {
  const app = document.getElementById("app");
  if (!app) return;

  // Mount Application Shell
  app.innerHTML = `
    <canvas id="particles-canvas" aria-hidden="true"></canvas>
    <div id="browser-alert-container"></div>
    <div class="page-wrapper">
      <div class="container">
        <nav class="top-nav" aria-label="Điều hướng chính">
          <div class="brand-badge">
            <span class="brand-badge-icon">${Icons.graduationCap}</span>
            <span>The Golden Milestone</span>
          </div>
          <div class="top-nav-recipient">
            FOR THỤC KHUÊ
          </div>
        </nav>
      </div>

      <main>
        ${renderHero()}
        ${renderMilestone()}
        ${renderInspiration()}
        ${renderMessageCard()}
        ${renderFooter()}
      </main>
    </div>
  `;

  // Mount In-App Browser Alert if needed
  const alertContainer = document.getElementById("browser-alert-container");
  const alertElement = renderBrowserHelp(false);
  if (alertContainer && alertElement) {
    alertContainer.appendChild(alertElement);
  }

  // Initialize Canvas Gold Particles
  initParticles("particles-canvas");

  // Initialize 3D Keepsake Tilt
  initCard3DTilt("interactive-card");

  // Initialize Confetti Moment Triggers
  const btnHeroCelebrate = document.getElementById("btn-celebrate-hero");
  const btnCardCelebrate = document.getElementById("btn-celebrate-card");
  btnHeroCelebrate?.addEventListener("click", () => triggerCelebrationConfetti());
  btnCardCelebrate?.addEventListener("click", () => triggerCelebrationConfetti());

  // Initialize Footer Copy Button
  let footerCopyTimeoutId: ReturnType<typeof setTimeout> | undefined;
  const btnFooterCopy = document.getElementById("btn-footer-copy");
  btnFooterCopy?.addEventListener("click", async () => {
    const ok = await copyLinkToClipboard(window.location.href);
    if (ok && btnFooterCopy) {
      if (footerCopyTimeoutId) clearTimeout(footerCopyTimeoutId);
      btnFooterCopy.innerHTML = `${Icons.check} Đã sao chép liên kết`;
      footerCopyTimeoutId = setTimeout(() => {
        btnFooterCopy.innerHTML = `${Icons.copy} Sao chép liên kết trang`;
      }, 2200);
    }
  });

  // Initialize Footer External Browser Helper Button
  const btnFooterExternal = document.getElementById("btn-footer-external");
  btnFooterExternal?.addEventListener("click", () => {
    if (!alertContainer) return;
    alertContainer.innerHTML = "";
    const forcedAlert = renderBrowserHelp(true);
    if (forcedAlert) {
      alertContainer.appendChild(forcedAlert);
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
  });

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
