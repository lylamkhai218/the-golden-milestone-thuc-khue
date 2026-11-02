import { prefersReducedMotion } from "../utils/motion-preference.ts";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedY: number;
  speedX: number;
  opacity: number;
  phase: number;
  pulseSpeed: number;
}

export function initParticles(canvasId: string): () => void {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas || prefersReducedMotion()) {
    return () => {};
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let animationFrameId = 0;
  let isRunning = true;
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;

  const colors = ["#C5A052", "#E7D4AA", "#E9D39D", "#F8EBCB"];
  const particles: Particle[] = [];

  function applyCanvasSize(w: number, h: number) {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function handleResize() {
    const newW = window.innerWidth;
    const newH = window.innerHeight;
    // Ignore minor vertical address-bar shifts on mobile Safari/Chrome
    if (newW === viewportWidth && Math.abs(newH - viewportHeight) < 120) {
      return;
    }
    viewportWidth = newW;
    viewportHeight = newH;
    applyCanvasSize(viewportWidth, viewportHeight);
  }

  window.addEventListener("resize", handleResize);
  applyCanvasSize(viewportWidth, viewportHeight);

  const particleCount = viewportWidth < 768 ? 22 : 38;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * viewportWidth,
      y: Math.random() * viewportHeight,
      radius: Math.random() * 1.8 + 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: -(Math.random() * 0.32 + 0.14),
      speedX: (Math.random() - 0.5) * 0.18,
      opacity: Math.random() * 0.5 + 0.2,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.025 + 0.01,
    });
  }

  function render() {
    if (!ctx || !canvas || !isRunning) return;

    ctx.clearRect(0, 0, viewportWidth, viewportHeight);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.phase += p.pulseSpeed;
      p.opacity += Math.sin(p.phase) * 0.005;

      if (p.opacity < 0.12) p.opacity = 0.12;
      if (p.opacity > 0.75) p.opacity = 0.75;

      if (p.y < -10) {
        p.y = viewportHeight + 10;
        p.x = Math.random() * viewportWidth;
      }
      if (p.x < -10) p.x = viewportWidth + 10;
      if (p.x > viewportWidth + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    animationFrameId = requestAnimationFrame(render);
  }

  render();

  const handleVisibility = () => {
    if (document.hidden) {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    } else if (!isRunning) {
      isRunning = true;
      render();
    }
  };
  document.addEventListener("visibilitychange", handleVisibility);

  return () => {
    isRunning = false;
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", handleResize);
    document.removeEventListener("visibilitychange", handleVisibility);
  };
}
