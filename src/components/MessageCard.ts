import { Icons } from "./icons.ts";

export function renderMessageCard(): string {
  return `
    <section class="section container message-section" id="message-card">
      <h2 class="section-title reveal-on-scroll">Lời Chúc Từ Trái Tim</h2>

      <div class="keepsake-card-container reveal-on-scroll delay-1">
        <div class="keepsake-card" id="interactive-card">
          <div class="card-inner-frame">
            <div class="card-crest-top">
              ${Icons.graduationCap}
            </div>

            <blockquote class="card-message-text">
              “Chúc Thục Khuê có một buổi bảo vệ luận án thạc sĩ thật suôn sẻ và thành công nhé! Sau hành trình dài nỗ lực, nghiên cứu và miệt mài, mong Khuê sẽ thật tự tin, bình tĩnh, lập luận sắc bén để chinh phục hội đồng và đạt được kết quả xứng đáng nhất. Chúc mừng tân Thạc sĩ tương lai!”
            </blockquote>

            <div style="margin: var(--space-xl) auto; max-width: 540px; border-radius: var(--radius-sm); overflow: hidden;">
              <picture>
                <source srcset="./assets/celebration-card.webp" type="image/webp" />
                <img
                  src="./assets/celebration-card.png"
                  alt="Thiệp chúc mừng Thục Khuê"
                  width="1671"
                  height="941"
                  loading="lazy"
                  decoding="async"
                  style="width: 100%; height: auto; display: block;"
                />
              </picture>
            </div>

            <div class="signature-block">
              <p class="signature-handwriting">From HKT</p>
              <p class="signature-names">Hoàng · Khải · Tâm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
