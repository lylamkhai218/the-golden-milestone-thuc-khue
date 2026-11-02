/**
 * Constructs an Android Chrome intent URL with HTTPS fallback.
 * Must be triggered by a direct user gesture (click/tap).
 */
export function buildChromeIntentUrl(pageUrl: string): string {
  try {
    const target = new URL(pageUrl);
    const fallback = encodeURIComponent(target.toString());

    return (
      `intent://${target.host}${target.pathname}${target.search}${target.hash}` +
      `#Intent;scheme=https;package=com.android.chrome;` +
      `S.browser_fallback_url=${fallback};end`
    );
  } catch {
    return pageUrl;
  }
}

/**
 * Best-effort external browser opener for iOS.
 * Web pages cannot force native Safari without user permission.
 */
export function tryOpenExternalOnIOS(url: string): void {
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Copies the current link to the clipboard.
 */
export async function copyLinkToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }

  // Fallback for older webviews
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
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
