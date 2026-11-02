import { Icons } from "./icons.ts";

export function renderInspiration(): string {
  return `
    <section class="section container" id="inspiration">
      <div style="background-color: var(--color-ivory-light); border-radius: var(--radius-lg); padding: var(--space-2xl) var(--page-margin);">
        <div class="grid-2col" style="align-items: center;">
          <div class="reveal-on-scroll delay-1" style="border-radius: var(--radius-md); overflow: hidden; background: rgba(0,0,0,0.04);">
            <picture>
              <source srcset="./assets/khue-painting.webp" type="image/webp" />
              <img
                src="./assets/khue-painting.jpg"
                alt="Thục Khuê vẽ tranh"
                width="1080"
                height="720"
                loading="lazy"
                decoding="async"
                style="width: 100%; height: auto; object-fit: cover; display: block;"
              />
            </picture>
          </div>

          <div class="reveal-on-scroll delay-2" style="display: flex; flex-direction: column; gap: var(--space-md);">
            <h2 style="font-family: var(--font-serif); font-size: var(--text-2xl); font-weight: 600; line-height: 1.15; color: var(--color-navy);">
              Vẽ Nên Ước Mơ & Tỏa Sáng
            </h2>

            <blockquote style="font-family: var(--font-serif); font-size: var(--text-lg); font-style: italic; color: var(--color-navy); line-height: 1.8; border-left: 3px solid var(--color-gold); padding-left: var(--space-md); margin: var(--space-xs) 0;">
              “Hãy tự do vẽ nên chân trời ước mơ mà Khuê hằng khao khát, bằng trọn vẹn niềm say mê và nguồn sáng rực rỡ nhất nơi tâm hồn. Cứ vững vàng và tự tin tiến bước, bởi trên hành trình này, Khuê luôn là vầng sáng đặc biệt và đáng tự hào nhất.”
            </blockquote>

            <p style="font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.75;">
              Hội họa hay khoa học đều bắt đầu từ một nét vẽ đam mê. Mong rằng những ngày tháng sắp tới của Khuê sẽ luôn ngập tràn cảm hứng, tự do sáng tạo và gặt hái thêm nhiều thành tựu rực rỡ.
            </p>

            <div style="display: flex; align-items: center; gap: var(--space-sm); color: var(--color-gold-dark); margin-top: var(--space-2xs);">
              <span style="width: 20px; height: 20px;">${Icons.compass}</span>
              <span style="font-family: var(--font-serif); font-size: var(--text-base); font-weight: 600;">
                Tin tưởng vào nguồn sáng bên trong bạn
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
