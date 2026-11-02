import { Icons } from "./icons.ts";
import { assetUrl } from "../utils/asset-url.ts";

export function renderFooter(): string {
  const commWebp = assetUrl("assets/khue-commemorative.webp");
  const commJpg = assetUrl("assets/khue-commemorative.jpg");

  return `
    <section class="section container" id="keepsake-banner">
      <div class="commemorative-box reveal-on-scroll reveal-scale delay-1" data-tilt-scroll="true">
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
            <source srcset="${commWebp}" type="image/webp" />
            <img
              src="${commJpg}"
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
        From HKT (Hoàng - Khải - Tâm)
      </p>

      <div class="footer-tools">
        <button type="button" class="btn-back-to-top" id="btn-back-to-top">
          ${Icons.arrowUp} Quay về đầu trang
        </button>
        <button type="button" class="btn-footer-link" id="btn-footer-copy">
          ${Icons.copy} Sao chép liên kết trang
        </button>
        <button type="button" class="btn-footer-link" id="btn-footer-external">
          ${Icons.compass} Mở bằng trình duyệt ngoài
        </button>
      </div>

      <p class="footer-copyright">
        © Copyright Thục Khuê, HKT. All rights reserved.
      </p>
    </footer>
  `;
}
