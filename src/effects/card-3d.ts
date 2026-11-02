import { prefersReducedMotion } from "../utils/motion-preference.ts";

export function initCard3DTilt(cardElementId: string): () => void {
  const card = document.getElementById(cardElementId);
  if (!card || prefersReducedMotion()) {
    return () => {};
  }

  const maxTilt = 10;
  let cachedRect: DOMRect | null = null;
  let rafId = 0;

  function handlePointerEnter(e: PointerEvent) {
    if (e.pointerType === "touch") return;
    cachedRect = card!.getBoundingClientRect();
    card!.style.transition = "transform 0.08s linear";
  }

  function handlePointerMove(e: PointerEvent) {
    if (e.pointerType === "touch") return;
    if (!cachedRect) {
      cachedRect = card!.getBoundingClientRect();
    }

    const clientX = e.clientX;
    const clientY = e.clientY;
    const rect = cachedRect;

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card!.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });
  }

  function resetTilt() {
    if (rafId) cancelAnimationFrame(rafId);
    cachedRect = null;
    card!.style.transition = "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
    card!.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }

  card.addEventListener("pointerenter", handlePointerEnter);
  card.addEventListener("pointermove", handlePointerMove);
  card.addEventListener("pointerleave", resetTilt);
  card.addEventListener("pointercancel", resetTilt);

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    card.removeEventListener("pointerenter", handlePointerEnter);
    card.removeEventListener("pointermove", handlePointerMove);
    card.removeEventListener("pointerleave", resetTilt);
    card.removeEventListener("pointercancel", resetTilt);
  };
}
