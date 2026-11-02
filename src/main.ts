// Stylesheets
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/motion.css";

// Components & Effects
import { renderBrowserHelp, showExternalBrowserModal } from "./components/BrowserHelp.ts";
import { renderHero } from "./components/Hero.ts";
import { renderMilestone } from "./components/Milestone.ts";
import { renderInspiration } from "./components/Inspiration.ts";
import { renderMessageCard } from "./components/MessageCard.ts";
import { renderFooter } from "./components/Signature.ts";
import { Icons } from "./components/icons.ts";
import { initParticles } from "./effects/particles.ts";
import { initCard3DTilt, initScroll3DFrames } from "./effects/card-3d.ts";
import { triggerCelebrationConfetti } from "./effects/confetti.ts";
import { copyLinkToClipboard, getCleanPageUrl, tryOpenExternalBrowser } from "./utils/external-browser.ts";
import { prefersReducedMotion } from "./utils/motion-preference.ts";

function forceStartAtTop(): void {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);
}

function initApp() {
  forceStartAtTop();

  const app = document.getElementById("app");
  if (!app) return;

  // Mount Application Shell
  app.innerHTML = `
    <div class="scroll-progress-track" aria-hidden="true">
      <div class="scroll-progress-bar" id="scroll-progress-bar"></div>
    </div>
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

  // Ensure initial scroll position is locked at top after DOM injection
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });

  window.addEventListener("pageshow", (e) => {
    if (e.persisted || window.location.hash) {
      forceStartAtTop();
    }
  });

  // Mount In-App Browser Alert if needed
  const alertContainer = document.getElementById("browser-alert-container");
  const alertElement = renderBrowserHelp(false);
  if (alertContainer && alertElement) {
    alertContainer.appendChild(alertElement);
  }

  // Initialize Canvas Gold Particles
  initParticles("particles-canvas");

  // Initialize 3D Keepsake Tilt & 3D Scroll Frames (Mobile + Desktop)
  initCard3DTilt("interactive-card");
  initScroll3DFrames();

  // Initialize Scroll Progress Indicator
  initScrollProgress();

  // Initialize Hero CTA ("Mở thiệp mừng") without mutating URL hash
  const btnScrollMessage = document.getElementById("cta-scroll-message");
  btnScrollMessage?.addEventListener("click", () => {
    const target = document.getElementById("message-card");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 16;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    }
  });

  // Initialize Confetti Moment Triggers
  const btnHeroCelebrate = document.getElementById("btn-celebrate-hero");
  const btnCardCelebrate = document.getElementById("btn-celebrate-card");
  btnHeroCelebrate?.addEventListener("click", () => triggerCelebrationConfetti());
  btnCardCelebrate?.addEventListener("click", () => triggerCelebrationConfetti());

  // Initialize Footer Back to Top Button
  const btnBackToTop = document.getElementById("btn-back-to-top");
  btnBackToTop?.addEventListener("click", () => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  });

  // Initialize Footer Copy Button (always copies clean URL without hash)
  let footerCopyTimeoutId: ReturnType<typeof setTimeout> | undefined;
  const btnFooterCopy = document.getElementById("btn-footer-copy");
  btnFooterCopy?.addEventListener("click", async () => {
    const ok = await copyLinkToClipboard(getCleanPageUrl(window.location.href));
    if (ok && btnFooterCopy) {
      if (footerCopyTimeoutId) clearTimeout(footerCopyTimeoutId);
      btnFooterCopy.innerHTML = `${Icons.check} Đã sao chép liên kết`;
      footerCopyTimeoutId = setTimeout(() => {
        btnFooterCopy.innerHTML = `${Icons.copy} Sao chép liên kết trang`;
      }, 2200);
    }
  });

  // Initialize Footer External Browser Helper Button (launches external browser or modal without jumping page)
  const btnFooterExternal = document.getElementById("btn-footer-external");
  btnFooterExternal?.addEventListener("click", () => {
    tryOpenExternalBrowser(() => {
      showExternalBrowserModal();
    });
  });

  // Initialize Scroll Reveals
  initScrollReveals();
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress-bar");
  if (!bar) return;

  let ticking = false;
  function updateProgress() {
    ticking = false;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    bar!.style.width = `${progress.toFixed(1)}%`;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateProgress);
      }
    },
    { passive: true }
  );
  requestAnimationFrame(updateProgress);
}

function initScrollReveals() {
  const allElements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");

  if (prefersReducedMotion()) {
    allElements.forEach((el) => {
      el.classList.add("is-revealed");
    });
    return;
  }

  // Stagger-reveal the top Hero section smoothly right on first frame
  const heroElements = document.querySelectorAll<HTMLElement>("#hero-top .reveal-on-scroll");
  requestAnimationFrame(() => {
    heroElements.forEach((el) => {
      el.classList.add("is-revealed");
    });
  });

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
      threshold: 0.14,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  allElements.forEach((el) => {
    if (!el.closest("#hero-top")) {
      observer.observe(el);
    }
  });

  // Re-arm scroll reveals when user taps "Quay về đầu trang" so scrolling down again replays animations
  const btnBackToTop = document.getElementById("btn-back-to-top");
  btnBackToTop?.addEventListener("click", () => {
    window.setTimeout(() => {
      allElements.forEach((el) => {
        if (!el.closest("#hero-top") && el.getBoundingClientRect().top > window.innerHeight) {
          el.classList.remove("is-revealed");
          observer.observe(el);
        }
      });
    }, 450);
  });
}

// Start application
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
