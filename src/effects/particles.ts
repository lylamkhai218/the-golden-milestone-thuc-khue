import { prefersReducedMotion } from "../utils/motion-preference.ts";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedY: number;
  speedX: number;
  opacity: number;
  pulseSpeed: number;
}

export function initParticles(canvasId: string): () => void {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas || prefersReducedMotion()) {
    return () => {};
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let animationFrameId: number;
  let isRunning = true;

  const colors = ["#C5A052", "#E7D4AA", "#E9D39D", "#F8EBCB"];
  const particles: Particle[] = [];

  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  const particleCount = window.innerWidth < 768 ? 24 : 42;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: -(Math.random() * 0.35 + 0.15),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    });
  }

  function render() {
    if (!ctx || !canvas || !isRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.006;

      if (p.opacity < 0.1) p.opacity = 0.1;
      if (p.opacity > 0.8) p.opacity = 0.8;

      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

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

  // Pause when tab not visible to preserve battery
  const handleVisibility = () => {
    if (document.hidden) {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      if (!isRunning) {
        isRunning = true;
        render();
      }
    }
  };
  document.addEventListener("visibilitychange", handleVisibility);

  return () => {
    isRunning = false;
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", handleVisibility);
  };
}
