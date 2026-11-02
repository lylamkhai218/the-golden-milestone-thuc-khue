import { Icons } from "./icons.ts";

export function renderFooter(): string {
  return `
    <section class="section container" id="keepsake-banner">
      <div class="commemorative-box reveal-on-scroll delay-1">
        <div class="commemorative-header">
          <h2 class="section-title" style="margin-bottom: var(--space-xs);">
            Dấu Ấn Kỷ Niệm Từ HKT
          </h2>
          <p class="commemorative-sub">
            Thành tựu này là của Khuê. Niềm tự hào này là của chúng mình.
          </p>
        </div>

        <figure class="commemorative-figure">
          <picture>
            <source srcset="./assets/khue-commemorative.webp" type="image/webp" />
            <img
              src="./assets/og-image.jpg"
              alt="Ấn phẩm chúc mừng Thục Khuê bảo vệ luận án Thạc sĩ thành công từ HKT"
              width="1200"
              height="802"
              loading="lazy"
              decoding="async"
              class="commemorative-img"
            />
          </picture>
        </figure>
      </div>
    </section>

    <footer class="site-footer container reveal-on-scroll">
      <div class="footer-seal">
        ${Icons.graduationCap}
      </div>
      <p class="footer-quote">
        “The achievement is yours. The pride is ours.”
      </p>
      <p class="footer-sub">
        Made with pride, for Thục Khuê · THE GOLDEN MILESTONE
        <br />
        With love, HKT (Hoàng · Khải · Tâm)
      </p>
      <div class="footer-tools">
        <button type="button" class="btn-footer-link" id="btn-footer-copy">
          ${Icons.copy} Sao chép liên kết trang
        </button>
      </div>
    </footer>
  `;
}
