import { Icons } from "./icons.ts";

export function renderMilestone(): string {
  return `
    <section class="section container" id="milestone">
      <div class="milestone-section">
        <div class="grid-2col" style="align-items: center;">
          <div class="reveal-on-scroll delay-1" style="border-radius: var(--radius-md); overflow: hidden; background: rgba(0,0,0,0.2);">
            <picture>
              <source srcset="./assets/khue-graduation.webp" type="image/webp" />
              <img
                src="./assets/khue-graduation.jpg"
                alt="Thục Khuê trong ngày tốt nghiệp"
                width="1080"
                height="731"
                loading="lazy"
                decoding="async"
                style="width: 100%; height: auto; object-fit: cover; display: block;"
              />
            </picture>
          </div>

          <div class="reveal-on-scroll delay-2" style="display: flex; flex-direction: column; gap: var(--space-md);">
            <h2 class="milestone-title">Hành Trình Tri Thức & Sự Tận Tụy</h2>
            
            <p class="milestone-lead">
              Mỗi đêm miệt mài nghiên cứu, từng trang tài liệu và thử thách học thuật đã hội tụ lại trong ngày bảo vệ luận án hôm nay.
            </p>

            <p style="font-size: var(--text-base); color: var(--color-ivory-dark); line-height: 1.75;">
              Đối diện hội đồng với sự tự tin, làm chủ đề tài và bảo vệ thành công công trình nghiên cứu đầy tâm huyết. Đây là dấu son khẳng định năng lực chuyên môn và mở ra những nấc thang mới trên con đường học thuật, sự nghiệp của Thục Khuê.
            </p>

            <div style="display: flex; align-items: center; gap: var(--space-sm); margin-top: var(--space-xs); color: var(--color-gold-light);">
              <span style="width: 24px; height: 24px;">${Icons.laurelWreath}</span>
              <span style="font-family: var(--font-serif); font-size: var(--text-base); font-style: italic;">
                Dấu mốc tự hào của tân Thạc sĩ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
