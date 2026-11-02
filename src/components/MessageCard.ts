import { Icons } from "./icons.ts";

export function renderMessageCard(): string {
  return `
    <section class="section container" id="message-card">
      <div class="painting-header reveal-on-scroll delay-1">
        <h2 class="section-title">Lời Chúc Từ Trái Tim</h2>
        <p class="painting-intro">
          Tấm thiệp viết tay và trọn vẹn tâm tình từ Hoàng, Khải và Tâm gửi đến Thục Khuê.
        </p>
      </div>

      <div class="message-showcase-split">
        <div class="keepsake-card-container reveal-on-scroll delay-1">
          <div class="keepsake-card" id="interactive-card">
            <picture>
              <source srcset="./assets/celebration-card.webp" type="image/webp" />
              <img
                src="./assets/celebration-card.png"
                alt="Thiệp viết tay chúc mừng tân Thạc sĩ Thục Khuê từ HKT"
                width="1671"
                height="941"
                loading="lazy"
                decoding="async"
                class="keepsake-postcard-img"
              />
            </picture>
          </div>
          <p class="keepsake-hint">
            Di chuyển trên mặt thiệp để xem góc nghiêng 3D
          </p>
        </div>

        <div class="message-dedication-col reveal-on-scroll delay-2">
          <blockquote class="card-message-text">
            “Chúc Thục Khuê có một buổi bảo vệ luận án thạc sĩ thật suôn sẻ và thành công nhé! Sau hành trình dài nỗ lực, nghiên cứu và miệt mài, mong Khuê sẽ thật tự tin, bình tĩnh, lập luận sắc bén để chinh phục hội đồng và đạt được kết quả xứng đáng nhất. Chúc mừng tân Thạc sĩ tương lai!”
          </blockquote>

          <div class="signature-block" style="text-align: left; margin-top: var(--space-md);">
            <p class="signature-handwriting">From HKT</p>
            <p class="signature-names">Hoàng · Khải · Tâm</p>
          </div>

          <div class="message-actions">
            <button type="button" class="btn-primary" id="btn-celebrate-card">
              ${Icons.starCrest} Pháo hoa chúc mừng
            </button>
            <a
              href="./assets/celebration-card.png"
              download="Thiep-Chuc-Mung-Thuc-Khue-HKT.png"
              class="btn-secondary"
            >
              ${Icons.download} Lưu thiệp kỷ niệm
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
