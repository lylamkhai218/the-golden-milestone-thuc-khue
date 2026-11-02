import { Icons } from "./icons.ts";
import { assetUrl } from "../utils/asset-url.ts";

export function renderInspiration(): string {
  const paintWebp = assetUrl("assets/khue-painting.webp");
  const paintJpg = assetUrl("assets/khue-painting.jpg");

  return `
    <section class="section container" id="inspiration">
      <div class="painting-editorial">
        <div class="painting-header reveal-on-scroll delay-1">
          <h2 class="section-title">Vẽ Nên Ước Mơ & Tỏa Sáng</h2>
          <p class="painting-intro">
            Khi tri thức hội ngộ cùng tâm hồn nghệ thuật và nguồn sáng nội tại của Thục Khuê.
          </p>
        </div>

        <figure class="painting-frame reveal-on-scroll reveal-scale delay-2" data-tilt-scroll="true">
          <div class="painting-media-wrap">
            <picture>
              <source srcset="${paintWebp}" type="image/webp" />
              <img
                src="${paintJpg}"
                alt="Thục Khuê bên giá vẽ dưới ánh nắng ấm áp"
                width="1080"
                height="720"
                loading="lazy"
                decoding="async"
                class="painting-img"
              />
            </picture>
          </div>

          <figcaption class="painting-caption-box reveal-on-scroll delay-2">
            <div class="painting-wish-icon">
              ${Icons.starCrest}
            </div>
            <blockquote class="painting-wish-quote">
              “Hãy tự do vẽ nên bức tranh ước mơ mà Khuê hằng ấp ủ, bằng bất cứ tia sáng ấm áp nào đang lấp lánh bên trong mình. Cứ vững vàng và tự tin tiến bước nhé, bởi trên hành trình này, chính Khuê đã là vầng sáng rực rỡ và đáng tự hào nhất.”
            </blockquote>
            <p class="painting-wish-sub">
              Dù là những gam màu phóng khoáng trên khung vải hay những lập luận sắc sảo nơi giảng đường, mọi nét vẽ xuất phát từ trái tim của Khuê đều tỏa ra nguồn năng lượng dịu dàng và cuốn hút.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  `;
}
