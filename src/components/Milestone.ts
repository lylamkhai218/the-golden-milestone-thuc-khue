import { Icons } from "./icons.ts";

export function renderMilestone(): string {
  return `
    <section class="milestone-band" id="milestone">
      <div class="container">
        <div class="milestone-split">
          <div class="milestone-narrative">
            <h2 class="milestone-title reveal-on-scroll delay-1">
              Hành Trình Tri Thức & Sự Tận Tụy
            </h2>

            <p class="milestone-statement reveal-on-scroll delay-2">
              “Mỗi nỗ lực đều xứng đáng được ghi nhận. Hôm nay là một cột mốc đặc biệt trên hành trình chinh phục tri thức của Khuê.”
            </p>

            <p class="milestone-body reveal-on-scroll delay-3">
              Sau những tháng ngày miệt mài nghiên cứu, trăn trở cùng từng trang luận án, khoảnh khắc đứng trước hội đồng bảo vệ chính là lúc bản lĩnh, trí tuệ và niềm đam mê của Khuê tỏa sáng trọn vẹn nhất.
            </p>
          </div>

          <dl class="milestone-ledger reveal-on-scroll reveal-scale delay-2" data-tilt-scroll="true">
            <div class="ledger-item reveal-on-scroll delay-1">
              <dt class="ledger-term">${Icons.graduationCap} Chủ nhân cột mốc</dt>
              <dd class="ledger-desc">Tân Thạc sĩ tương lai Thục Khuê</dd>
            </div>
            <div class="ledger-item reveal-on-scroll delay-2">
              <dt class="ledger-term">${Icons.academicSeal} Dấu ấn học thuật</dt>
              <dd class="ledger-desc">Lễ Bảo vệ Luận án Thạc sĩ</dd>
            </div>
            <div class="ledger-item reveal-on-scroll delay-3">
              <dt class="ledger-term">${Icons.shield} Bản lĩnh hội đồng</dt>
              <dd class="ledger-desc">Tự tin · Bình tĩnh · Lập luận sắc bén</dd>
            </div>
            <div class="ledger-item reveal-on-scroll delay-4">
              <dt class="ledger-term">${Icons.laurelWreath} Người đồng hành gửi tặng</dt>
              <dd class="ledger-desc">HKT - Hoàng · Khải · Tâm</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  `;
}
