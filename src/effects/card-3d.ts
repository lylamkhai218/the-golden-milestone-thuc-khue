import { prefersReducedMotion } from "../utils/motion-preference.ts";
import { triggerCelebrationConfetti } from "./confetti.ts";

/**
 * 3D Interactive & Ambient Tilt Engine for the Keepsake Card.
 * Works on BOTH Mobile (Touch + Scroll-driven + Ambient 3D wave + Gyroscope)
 * and Desktop (Pointer hover + Scroll-driven + Keyboard accessibility).
 */
export function initCard3DTilt(cardElementId: string): () => void {
  const card = document.getElementById(cardElementId);
  if (!card || prefersReducedMotion()) {
    return () => {};
  }

  const glareEl = card.querySelector<HTMLElement>(".keepsake-card-glare");
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "region");
  card.setAttribute("aria-label", "Thiệp chúc mừng 3D - Chạm để tung pháo hoa chúc mừng");

  const maxTouchPointerTilt = 14;
  let isInteracting = false;
  let isInViewport = false;
  let pointerRotateX = 0;
  let pointerRotateY = 0;
  let currentRotateX = 0;
  let currentRotateY = 0;
  let currentGlareX = 50;
  let currentGlareY = 50;
  let targetGlareX = 50;
  let targetGlareY = 50;
  let gyroRotateX = 0;
  let gyroRotateY = 0;
  let hasGyro = false;
  let rafId = 0;

  function updateFromClientCoords(clientX: number, clientY: number) {
    const rect = card!.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    pointerRotateX = ((y - centerY) / centerY) * -maxTouchPointerTilt;
    pointerRotateY = ((x - centerX) / centerX) * maxTouchPointerTilt;
    targetGlareX = (x / rect.width) * 100;
    targetGlareY = (y / rect.height) * 100;
  }

  function handlePointerDown(e: PointerEvent) {
    isInteracting = true;
    updateFromClientCoords(e.clientX, e.clientY);
  }

  function handlePointerMove(e: PointerEvent) {
    isInteracting = true;
    updateFromClientCoords(e.clientX, e.clientY);
  }

  function handlePointerEnd() {
    isInteracting = false;
  }

  function handleTouchStart(e: TouchEvent) {
    if (e.touches.length > 0) {
      isInteracting = true;
      updateFromClientCoords(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function handleTouchMove(e: TouchEvent) {
    if (e.touches.length > 0) {
      isInteracting = true;
      updateFromClientCoords(e.touches[0].clientX, e.touches[0].clientY);
    }
  }

  function handleTouchEnd() {
    isInteracting = false;
  }

  function handleDeviceOrientation(e: DeviceOrientationEvent) {
    if (e.beta === null || e.gamma === null) return;
    hasGyro = true;
    const clampedGamma = Math.max(-30, Math.min(30, e.gamma));
    const clampedBeta = Math.max(20, Math.min(70, e.beta)) - 45;
    gyroRotateY = (clampedGamma / 30) * 10;
    gyroRotateX = (clampedBeta / 25) * -8;
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerCelebrationConfetti();
    }
  }

  function handleClick() {
    triggerCelebrationConfetti();
  }

  function animate(timestamp: number) {
    if (!isInViewport || prefersReducedMotion()) {
      rafId = 0;
      return;
    }

    let targetX = 0;
    let targetY = 0;

    if (isInteracting) {
      targetX = pointerRotateX;
      targetY = pointerRotateY;
    } else {
      // Combine scroll position tilt + ambient 3D floating wave so mobile always shows rich 3D depth
      const rect = card!.getBoundingClientRect();
      const viewportH = window.innerHeight || 800;
      const cardCenterY = rect.top + rect.height / 2;
      const normalizedScroll = Math.max(-1, Math.min(1, (cardCenterY - viewportH / 2) / (viewportH * 0.55)));

      const t = timestamp * 0.0018;
      const waveX = Math.sin(t) * 5.2;
      const waveY = Math.cos(t * 0.85) * 7.5;
      const scrollTiltX = normalizedScroll * -6.5;
      const scrollTiltY = Math.sin(normalizedScroll * Math.PI) * 5.0;

      targetX = waveX + scrollTiltX + (hasGyro ? gyroRotateX * 0.6 : 0);
      targetY = waveY + scrollTiltY + (hasGyro ? gyroRotateY * 0.6 : 0);

      targetGlareX = 50 + (targetY / maxTouchPointerTilt) * 38;
      targetGlareY = 50 - (targetX / maxTouchPointerTilt) * 38;
    }

    // Smooth spring interpolation
    currentRotateX += (targetX - currentRotateX) * 0.12;
    currentRotateY += (targetY - currentRotateY) * 0.12;
    currentGlareX += (targetGlareX - currentGlareX) * 0.14;
    currentGlareY += (targetGlareY - currentGlareY) * 0.14;

    const scale = isInteracting ? 1.025 : 1.01;
    const liftZ = isInteracting ? 14 : 6;

    card!.style.transform = `perspective(850px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateZ(${liftZ}px) scale3d(${scale}, ${scale}, 1)`;

    if (glareEl) {
      const glareShiftX = (currentGlareX - 50) * 1.4;
      const glareShiftY = (currentGlareY - 50) * 0.6;
      glareEl.style.opacity = isInteracting ? "0.85" : "0.55";
      glareEl.style.transform = `translate3d(${glareShiftX.toFixed(1)}%, ${glareShiftY.toFixed(1)}%, 0) rotate(26deg)`;
    }

    rafId = requestAnimationFrame(animate);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isInViewport = entry.isIntersecting;
        if (isInViewport && !rafId) {
          rafId = requestAnimationFrame(animate);
        } else if (!isInViewport && rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      });
    },
    { threshold: 0.05 }
  );

  observer.observe(card);

  card.addEventListener("pointerdown", handlePointerDown);
  card.addEventListener("pointermove", handlePointerMove);
  card.addEventListener("pointerleave", handlePointerEnd);
  card.addEventListener("pointercancel", handlePointerEnd);
  card.addEventListener("pointerup", handlePointerEnd);
  card.addEventListener("touchstart", handleTouchStart, { passive: true });
  card.addEventListener("touchmove", handleTouchMove, { passive: true });
  card.addEventListener("touchend", handleTouchEnd, { passive: true });
  card.addEventListener("touchcancel", handleTouchEnd, { passive: true });
  card.addEventListener("keydown", handleKeyDown);
  card.addEventListener("click", handleClick);
  window.addEventListener("deviceorientation", handleDeviceOrientation, { passive: true });

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    observer.disconnect();
    card.removeEventListener("pointerdown", handlePointerDown);
    card.removeEventListener("pointermove", handlePointerMove);
    card.removeEventListener("pointerleave", handlePointerEnd);
    card.removeEventListener("pointercancel", handlePointerEnd);
    card.removeEventListener("pointerup", handlePointerEnd);
    card.removeEventListener("touchstart", handleTouchStart);
    card.removeEventListener("touchmove", handleTouchMove);
    card.removeEventListener("touchend", handleTouchEnd);
    card.removeEventListener("touchcancel", handleTouchEnd);
    card.removeEventListener("keydown", handleKeyDown);
    card.removeEventListener("click", handleClick);
    window.removeEventListener("deviceorientation", handleDeviceOrientation);
  };
}

/**
 * Adds scroll-driven 3D perspective tilt to editorial portrait frames & boxes
 * so scrolling on mobile or desktop creates a tangible 3D depth effect.
 */
export function initScroll3DFrames(): () => void {
  if (prefersReducedMotion()) {
    return () => {};
  }

  const frames = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt-scroll="true"]'));
  if (frames.length === 0) {
    return () => {};
  }

  let ticking = false;

  function updateFramesOnScroll() {
    ticking = false;
    if (prefersReducedMotion()) return;

    const viewportH = window.innerHeight || 800;
    for (const frame of frames) {
      if (!frame.classList.contains("is-revealed")) continue;
      const rect = frame.getBoundingClientRect();
      if (rect.bottom < -50 || rect.top > viewportH + 50) continue;

      const centerOffset = (rect.top + rect.height / 2 - viewportH / 2) / (viewportH * 0.6);
      const clamped = Math.max(-1, Math.min(1, centerOffset));

      const rotateX = clamped * -5.5;
      const rotateY = clamped * 3.5;
      const translateY = clamped * -8;

      frame.style.transform = `perspective(1000px) translate3d(0, ${translateY.toFixed(1)}px, 0) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateFramesOnScroll);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  requestAnimationFrame(updateFramesOnScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}
