import { detectBrowser } from "../utils/browser-detection.ts";
import {
  buildChromeIntentUrl,
  getCleanPageUrl,
  tryOpenExternalBrowser,
  copyLinkToClipboard,
} from "../utils/external-browser.ts";
import { Icons } from "./icons.ts";

/**
 * Displays an in-place modal overlay (no page scroll/jump) when an iOS In-App WebView
 * (such as Zalo or Messenger on iPhone) blocks automatic external Safari handoff.
 */
export function showExternalBrowserModal(): void {
  const existing = document.getElementById("safari-guide-modal");
  if (existing) {
    existing.remove();
  }

  const cleanUrl = getCleanPageUrl(window.location.href);
  const overlay = document.createElement("div");
  overlay.id = "safari-guide-modal";
  overlay.className = "safari-modal-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "safari-modal-title");

  overlay.innerHTML = `
    <div class="safari-modal-card">
      <div class="safari-modal-header">
        <span class="safari-modal-icon">${Icons.compass}</span>
        <h3 class="safari-modal-title" id="safari-modal-title">
          Mở trang trong trình duyệt Safari
        </h3>
        <button type="button" class="btn-close-modal" id="btn-close-safari-modal" aria-label="Đóng hướng dẫn">
          ${Icons.close}
        </button>
      </div>

      <div class="safari-modal-badge">
        ${Icons.check} Đã tự động sao chép liên kết trang
      </div>

      <p class="safari-modal-desc">
        Trình duyệt tích hợp trong Zalo / Messenger trên iPhone hạn chế tự động chuyển sang ứng dụng ngoài. Bạn có thể mở Safari ngay bằng 1 trong 2 cách:
      </p>

      <ol class="safari-modal-steps">
        <li>
          <strong>Cách 1 (Nhanh nhất):</strong> Chạm vào biểu tượng menu <strong>⋯</strong> ở góc trên bên phải màn hình ứng dụng, sau đó chọn <strong>Mở bằng Safari</strong> (Open in Safari).
        </li>
        <li>
          <strong>Cách 2:</strong> Mở ứng dụng <strong>Safari</strong> trên iPhone, chạm vào thanh địa chỉ và chọn <strong>Dán và Đi</strong> (liên kết đã được chép sẵn).
        </li>
      </ol>

      <div class="safari-modal-actions">
        <button type="button" class="btn-primary safari-modal-btn" id="btn-modal-copy-again">
          ${Icons.copy} Sao chép lại liên kết
        </button>
        <button type="button" class="btn-secondary safari-modal-btn" id="btn-modal-done">
          Đã hiểu
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const closeModal = () => overlay.remove();

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  overlay.querySelector("#btn-close-safari-modal")?.addEventListener("click", closeModal);
  overlay.querySelector("#btn-modal-done")?.addEventListener("click", closeModal);

  const btnCopyAgain = overlay.querySelector("#btn-modal-copy-again");
  btnCopyAgain?.addEventListener("click", async () => {
    const ok = await copyLinkToClipboard(cleanUrl);
    if (ok && btnCopyAgain) {
      btnCopyAgain.innerHTML = `${Icons.check} Đã sao chép thành công`;
    }
  });
}

export function renderBrowserHelp(forceShow = false): HTMLElement | null {
  const browser = detectBrowser();
  if (!browser.isInApp && !forceShow) {
    return null;
  }

  const bar = document.createElement("aside");
  bar.className = "browser-alert-bar";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Hướng dẫn mở trình duyệt ngoài");

  const currentUrl = getCleanPageUrl(window.location.href);

  let message = "Để có trải nghiệm 3D mượt mà nhất, bạn có thể mở trang này bằng Safari hoặc Chrome.";
  let manualGuide = "Nếu ứng dụng chặn tự bật trình duyệt: chọn menu (⋯) góc trên phải -> Mở bằng Safari / Chrome.";
  let primaryCtaHtml = "";

  if (browser.isAndroid) {
    message = "Bạn đang xem trong trình duyệt tích hợp. Hãy mở bằng Chrome để trải nghiệm trọn vẹn nhất.";
    manualGuide = "Nếu Chrome không tự mở: chọn biểu tượng menu (⋮) góc trên của ứng dụng -> Mở bằng trình duyệt.";
    const chromeIntent = buildChromeIntentUrl(currentUrl);
    primaryCtaHtml = `
      <a href="${chromeIntent}" class="btn-pill-small">
        Mở bằng Chrome ${Icons.externalLink}
      </a>
    `;
  } else {
    message = "Bạn đang xem trong trình duyệt tích hợp. Hãy mở bằng Safari để trải nghiệm trọn vẹn nhất.";
    manualGuide = "Nếu chưa tự chuyển: chọn biểu tượng menu (⋯) góc trên phải của Zalo -> Mở bằng Safari.";
    primaryCtaHtml = `
      <button type="button" class="btn-pill-small" id="btn-open-safari">
        Mở bằng Safari ${Icons.externalLink}
      </button>
    `;
  }

  bar.innerHTML = `
    <div class="browser-alert-content">
      <span class="browser-alert-icon">${Icons.compass}</span>
      <div class="browser-alert-text">
        <p class="browser-alert-main">${message}</p>
        <p class="browser-alert-sub">${manualGuide}</p>
      </div>
    </div>
    <div class="browser-alert-actions">
      ${primaryCtaHtml}
      <button type="button" class="btn-pill-small" id="btn-copy-link">
        Sao chép link ${Icons.copy}
      </button>
      <button type="button" class="btn-close-bar" id="btn-close-alert" aria-label="Đóng thông báo">
        ${Icons.close}
      </button>
    </div>
  `;

  // Bind event listeners synchronously
  const btnClose = bar.querySelector("#btn-close-alert");
  btnClose?.addEventListener("click", () => {
    bar.remove();
  });

  const btnSafari = bar.querySelector("#btn-open-safari");
  btnSafari?.addEventListener("click", () => {
    tryOpenExternalBrowser(() => {
      showExternalBrowserModal();
    });
  });

  let copyTimeoutId: ReturnType<typeof setTimeout> | undefined;
  const btnCopy = bar.querySelector("#btn-copy-link");
  btnCopy?.addEventListener("click", async () => {
    const ok = await copyLinkToClipboard(currentUrl);
    if (ok && btnCopy) {
      if (copyTimeoutId) clearTimeout(copyTimeoutId);
      btnCopy.innerHTML = `Đã sao chép ${Icons.check}`;
      copyTimeoutId = setTimeout(() => {
        btnCopy.innerHTML = `Sao chép link ${Icons.copy}`;
      }, 2200);
    }
  });

  return bar;
}
