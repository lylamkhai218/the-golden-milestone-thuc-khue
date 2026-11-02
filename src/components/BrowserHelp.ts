import { detectBrowser } from "../utils/browser-detection.ts";
import { buildChromeIntentUrl, tryOpenExternalOnIOS, copyLinkToClipboard } from "../utils/external-browser.ts";
import { Icons } from "./icons.ts";

export function renderBrowserHelp(): HTMLElement | null {
  const browser = detectBrowser();
  if (!browser.isInApp) {
    return null;
  }

  const bar = document.createElement("aside");
  bar.className = "browser-alert-bar";
  bar.setAttribute("role", "alert");
  bar.setAttribute("aria-label", "Thông báo trình duyệt");

  const currentUrl = window.location.href;

  let message = "Để có trải nghiệm mượt mà và trọn vẹn nhất, bạn nên mở trang bằng trình duyệt chính.";
  let ctaHtml = "";

  if (browser.isAndroid) {
    message = "Bạn đang xem trong ứng dụng. Hãy mở bằng Chrome để xem chuyển động tốt nhất.";
    const chromeIntent = buildChromeIntentUrl(currentUrl);
    ctaHtml = `
      <a href="${chromeIntent}" class="btn-pill-small">
        Mở bằng Chrome ${Icons.externalLink}
      </a>
    `;
  } else if (browser.isIOS) {
    message = "Bạn đang xem trong ứng dụng. Hãy mở bằng Safari để trải nghiệm trọn vẹn.";
    ctaHtml = `
      <button type="button" class="btn-pill-small" id="btn-open-safari">
        Thử mở Safari ${Icons.externalLink}
      </button>
      <button type="button" class="btn-pill-small" id="btn-copy-link">
        Sao chép link ${Icons.copy}
      </button>
    `;
  }

  bar.innerHTML = `
    <div class="browser-alert-content">
      <span class="browser-alert-icon">${Icons.compass}</span>
      <span>${message}</span>
    </div>
    <div class="browser-alert-actions">
      ${ctaHtml}
      <button type="button" class="btn-close-bar" id="btn-close-alert" aria-label="Đóng thông báo">
        ${Icons.close}
      </button>
    </div>
  `;

  // Event handlers
  setTimeout(() => {
    const btnClose = bar.querySelector("#btn-close-alert");
    btnClose?.addEventListener("click", () => {
      bar.remove();
    });

    const btnSafari = bar.querySelector("#btn-open-safari");
    btnSafari?.addEventListener("click", () => {
      tryOpenExternalOnIOS(currentUrl);
    });

    const btnCopy = bar.querySelector("#btn-copy-link");
    btnCopy?.addEventListener("click", async () => {
      const ok = await copyLinkToClipboard(currentUrl);
      if (ok && btnCopy) {
        btnCopy.innerHTML = `Đã sao chép ${Icons.check}`;
        setTimeout(() => {
          if (btnCopy) btnCopy.innerHTML = `Sao chép link ${Icons.copy}`;
        }, 2000);
      }
    });
  }, 0);

  return bar;
}
