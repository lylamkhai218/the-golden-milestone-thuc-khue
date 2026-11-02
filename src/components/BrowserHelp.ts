import { detectBrowser } from "../utils/browser-detection.ts";
import { buildChromeIntentUrl, tryOpenExternalOnIOS, copyLinkToClipboard } from "../utils/external-browser.ts";
import { Icons } from "./icons.ts";

export function renderBrowserHelp(forceShow = false): HTMLElement | null {
  const browser = detectBrowser();
  if (!browser.isInApp && !forceShow) {
    return null;
  }

  const bar = document.createElement("aside");
  bar.className = "browser-alert-bar";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Hướng dẫn mở trình duyệt ngoài");

  const currentUrl = window.location.href;

  let message = "Để có trải nghiệm mượt mà nhất, bạn có thể mở trang này bằng Safari hoặc Chrome.";
  let manualGuide = "Nếu chưa mở được: hãy sao chép liên kết bên cạnh và dán vào thanh địa chỉ Safari hoặc Chrome.";
  let primaryCtaHtml = "";

  if (browser.isAndroid) {
    message = "Bạn đang xem trong trình duyệt tích hợp. Hãy mở bằng Chrome để trải nghiệm trọn vẹn nhất.";
    manualGuide = "Nếu Chrome không tự mở: chọn biểu tượng menu (⋮) góc trên của ứng dụng → Mở bằng trình duyệt.";
    const chromeIntent = buildChromeIntentUrl(currentUrl);
    primaryCtaHtml = `
      <a href="${chromeIntent}" class="btn-pill-small">
        Mở bằng Chrome ${Icons.externalLink}
      </a>
    `;
  } else if (browser.isIOS) {
    message = "Bạn đang xem trong trình duyệt tích hợp. Hãy mở bằng Safari để trải nghiệm trọn vẹn nhất.";
    manualGuide = "Nếu chưa mở được: chọn biểu tượng Chia sẻ hoặc menu (⋯) của ứng dụng → Mở bằng Safari / Open in Safari.";
    primaryCtaHtml = `
      <button type="button" class="btn-pill-small" id="btn-open-safari">
        Thử mở bằng Safari ${Icons.externalLink}
      </button>
    `;
  } else {
    primaryCtaHtml = `
      <button type="button" class="btn-pill-small" id="btn-open-safari">
        Mở cửa sổ mới ${Icons.externalLink}
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
    tryOpenExternalOnIOS(currentUrl);
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
