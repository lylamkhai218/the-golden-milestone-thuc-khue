import { detectBrowser } from "./browser-detection.ts";

/**
 * Returns the clean canonical URL without any #hash fragment
 * so sharing or opening in an external browser never jumps to a mid-page section.
 */
export function getCleanPageUrl(rawUrl: string = window.location.href): string {
  try {
    const parsed = new URL(rawUrl);
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return rawUrl.split("#")[0] || rawUrl;
  }
}

/**
 * Constructs an Android Chrome intent URL with HTTPS fallback.
 * Must be triggered by a direct user gesture (click/tap).
 */
export function buildChromeIntentUrl(pageUrl: string): string {
  const cleanUrl = getCleanPageUrl(pageUrl);
  try {
    const target = new URL(cleanUrl);
    const fallback = encodeURIComponent(target.toString());

    return (
      `intent://${target.host}${target.pathname}${target.search}` +
      `#Intent;scheme=https;package=com.android.chrome;` +
      `S.browser_fallback_url=${fallback};end`
    );
  } catch {
    return cleanUrl;
  }
}

/**
 * Constructs Apple's native iOS Safari scheme URL (x-safari-https://).
 * Supported on iOS 15+ (including iOS 17/18/26/27) when WebView allows external schemes.
 */
export function buildSafariSchemeUrl(pageUrl: string): string {
  const cleanUrl = getCleanPageUrl(pageUrl);
  try {
    const target = new URL(cleanUrl);
    const scheme = target.protocol === "http:" ? "x-safari-http://" : "x-safari-https://";
    return `${scheme}${target.host}${target.pathname}${target.search}`;
  } catch {
    return cleanUrl.replace(/^https?:\/\//i, "x-safari-https://");
  }
}

/**
 * Attempts to launch the external system browser (Safari on iOS, Chrome on Android)
 * without causing an in-page jump or reload. If the host In-App WebView (e.g. Zalo iOS)
 * blocks custom URL schemes, automatically copies the clean link and triggers the fallback callback.
 */
export function tryOpenExternalBrowser(onFallbackModal?: (cleanUrl: string) => void): void {
  const cleanUrl = getCleanPageUrl(window.location.href);
  const browser = detectBrowser();

  if (browser.isAndroid) {
    window.location.href = buildChromeIntentUrl(cleanUrl);
    return;
  }

  if (browser.isIOS) {
    // Copy clean link proactively so user always has it on clipboard
    void copyLinkToClipboard(cleanUrl);

    const safariUrl = buildSafariSchemeUrl(cleanUrl);
    const startTime = Date.now();

    // Attempt native x-safari-https:// handoff via temporary anchor click
    const link = document.createElement("a");
    link.href = safariUrl;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // If Zalo / Messenger iOS WebView blocks the x-safari-https scheme,
    // show the in-place guide modal after 500ms without scrolling the page.
    window.setTimeout(() => {
      const elapsed = Date.now() - startTime;
      if (document.visibilityState === "visible" && elapsed < 1600) {
        onFallbackModal?.(cleanUrl);
      }
    }, 520);
    return;
  }

  // Desktop fallback
  window.open(cleanUrl, "_blank", "noopener,noreferrer");
}

/**
 * Copies the clean link to the clipboard.
 */
export async function copyLinkToClipboard(text?: string): Promise<boolean> {
  const cleanText = getCleanPageUrl(text ?? window.location.href);

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(cleanText);
      return true;
    } catch {
      // Fallback below
    }
  }

  // Fallback for older webviews
  try {
    const textArea = document.createElement("textarea");
    textArea.value = cleanText;
    textArea.setAttribute("readonly", "true");
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
