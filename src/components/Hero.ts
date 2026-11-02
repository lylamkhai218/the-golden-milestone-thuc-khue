import { Icons } from "./icons.ts";

export function renderHero(): string {
  return `
    <header class="hero-section container">
      <div class="hero-crest reveal-on-scroll delay-1">
        ${Icons.graduationCap}
      </div>
      
      <h1 class="hero-title reveal-on-scroll delay-2">
        Congratulations,
        <span class="hero-title-highlight">Thục Khuê!</span>
      </h1>

      <p class="hero-subtitle reveal-on-scroll delay-3" style="font-size: var(--text-lg); font-weight: 500;">
        Buổi bảo vệ luận án Thạc sĩ · Cột mốc vàng đáng tự hào
      </p>

      <p class="reveal-on-scroll delay-3" style="max-width: 580px; margin: 0 auto var(--space-xl); color: var(--color-text-secondary); font-size: var(--text-base); line-height: 1.7;">
        Một hành trình nỗ lực, nghiên cứu và miệt mài. Món quà kỹ thuật số từ HKT gửi tặng tân Thạc sĩ tương lai.
      </p>

      <div class="hero-cta-group reveal-on-scroll delay-4">
        <a href="#message-card" class="btn-primary" id="cta-scroll-message">
          Mở thiệp mừng ${Icons.arrowDown}
        </a>
      </div>
    </header>
  `;
}
