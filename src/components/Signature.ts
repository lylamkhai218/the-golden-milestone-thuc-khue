import { Icons } from "./icons.ts";

export function renderFooter(): string {
  return `
    <footer class="site-footer container reveal-on-scroll">
      <div style="width: 32px; height: 32px; margin: 0 auto var(--space-md); color: var(--color-gold-dark);">
        ${Icons.academicSeal}
      </div>
      <p class="footer-quote">
        “The achievement is yours. The pride is ours.”
      </p>
      <p class="footer-sub">
        THE GOLDEN MILESTONE — Món quà kỷ niệm dành riêng cho Thục Khuê
        <br />
        Từ Hoàng · Khải · Tâm
      </p>
    </footer>
  `;
}
