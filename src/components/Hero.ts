import { Icons } from "./icons.ts";
import { assetUrl } from "../utils/asset-url.ts";

export function renderHero(): string {
  const gradWebp = assetUrl("assets/khue-graduation.webp");
  const gradJpg = assetUrl("assets/khue-graduation.jpg");

  return `
    <header class="hero-section container" id="hero-top">
      <div class="hero-split">
        <div class="hero-copy-col">
          <div class="hero-crest reveal-on-scroll delay-1">
            ${Icons.graduationCap}
          </div>

          <h1 class="hero-title reveal-on-scroll delay-1">
            Congratulations,
            <span class="hero-title-highlight">Thục Khuê!</span>
          </h1>

          <p class="hero-subtitle reveal-on-scroll delay-2">
            Một hành trình nỗ lực, một cột mốc đáng tự hào. Chúc mừng Thục Khuê bảo vệ thành công luận án Thạc sĩ.
          </p>

          <div class="hero-cta-group reveal-on-scroll delay-3">
            <button type="button" class="btn-primary" id="cta-scroll-message">
              Mở thiệp mừng ${Icons.arrowDown}
            </button>
            <button type="button" class="btn-secondary" id="btn-celebrate-hero">
              ${Icons.starCrest} Tung hoa chúc mừng
            </button>
          </div>
        </div>

        <figure class="hero-portrait-frame reveal-on-scroll reveal-scale delay-2" data-tilt-scroll="true">
          <div class="hero-portrait-media">
            <picture>
              <source srcset="${gradWebp}" type="image/webp" />
              <img
                src="${gradJpg}"
                alt="Thục Khuê rạng rỡ trong lễ phục tốt nghiệp"
                width="1080"
                height="731"
                fetchpriority="high"
                decoding="async"
                class="hero-portrait-img"
              />
            </picture>
          </div>
          <figcaption class="hero-portrait-caption">
            <span>Thục Khuê - Rạng rỡ trên hành trình tri thức</span>
            <span class="caption-seal">${Icons.laurelWreath}</span>
          </figcaption>
        </figure>
      </div>
    </header>
  `;
}
