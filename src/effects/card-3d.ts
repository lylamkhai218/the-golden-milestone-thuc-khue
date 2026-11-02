import { prefersReducedMotion } from "../utils/motion-preference.ts";

export function initCard3DTilt(cardElementId: string): () => void {
  const card = document.getElementById(cardElementId);
  if (!card || prefersReducedMotion()) {
    return () => {};
  }

  const maxTilt = 12; // Maximum degrees of rotation

  function handlePointerMove(e: PointerEvent) {
    const rect = card!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card!.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    card!.style.setProperty("--mouse-x", `${((x / rect.width) * 100).toFixed(1)}%`);
    card!.style.setProperty("--mouse-y", `${((y / rect.height) * 100).toFixed(1)}%`);
  }

  function handlePointerLeave() {
    card!.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }

  card.addEventListener("pointermove", handlePointerMove);
  card.addEventListener("pointerleave", handlePointerLeave);

  return () => {
    card.removeEventListener("pointermove", handlePointerMove);
    card.removeEventListener("pointerleave", handlePointerLeave);
  };
}
