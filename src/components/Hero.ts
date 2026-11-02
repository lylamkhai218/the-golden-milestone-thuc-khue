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

      <p class="hero-subtitle reveal-on-scroll delay-3">
        Một hành trình nỗ lực, một cột mốc đáng tự hào.
        Chúc mừng Thục Khuê bảo vệ thành công luận án Thạc sĩ.
      </p>

      <div class="hero-cta-group reveal-on-scroll delay-4">
        <a href="#message-card" class="btn-primary" id="cta-scroll-message">
          Mở thiệp mừng ${Icons.arrowDown}
        </a>
      </div>
    </header>
  `;
}
