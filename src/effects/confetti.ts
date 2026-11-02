import { prefersReducedMotion } from "../utils/motion-preference.ts";

interface ConfettiPiece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

/**
 * Triggers a single, purposeful burst of Champagne Gold & Ivory confetti.
 * Automatically cleans up after completion (~3.5 seconds).
 */
export function triggerCelebrationConfetti(): void {
  if (prefersReducedMotion()) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const palette = ["#C5A052", "#E7D4AA", "#A77B2D", "#172B46", "#FFFDF8"];
  const count = window.innerWidth < 768 ? 55 : 90;
  const pieces: ConfettiPiece[] = [];

  for (let i = 0; i < count; i++) {
    const angle = (Math.random() * Math.PI) / 1.4 + Math.PI * 1.15;
    const speed = Math.random() * 11 + 6;
    pieces.push({
      x: canvas.width * (0.25 + Math.random() * 0.5),
      y: canvas.height * 0.55,
      vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 4,
      vy: Math.sin(angle) * speed - Math.random() * 5,
      width: Math.random() * 9 + 5,
      height: Math.random() * 5 + 3,
      color: palette[Math.floor(Math.random() * palette.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.16,
      opacity: 1,
    });
  }

  const startTime = performance.now();
  const duration = 3600;

  function animate(now: number) {
    const elapsed = now - startTime;
    if (elapsed > duration || !ctx) {
      canvas.remove();
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const fadeStart = duration * 0.65;
    const globalFade = elapsed > fadeStart ? 1 - (elapsed - fadeStart) / (duration - fadeStart) : 1;

    for (const p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.26; // gravity
      p.vx *= 0.99; // air resistance
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(0, p.opacity * globalFade);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
