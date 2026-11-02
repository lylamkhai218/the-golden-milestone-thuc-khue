export interface BrowserInfo {
  isIOS: boolean;
  isAndroid: boolean;
  isInApp: boolean;
  isFacebook: boolean;
  isZalo: boolean;
}

/**
 * Heuristic browser and environment detection.
 * Designed to provide graceful guidance for in-app browser users (Zalo, Facebook).
 */
export function detectBrowser(): BrowserInfo {
  if (typeof navigator === "undefined" || !navigator.userAgent) {
    return {
      isIOS: false,
      isAndroid: false,
      isInApp: false,
      isFacebook: false,
      isZalo: false,
    };
  }

  const ua = navigator.userAgent;

  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  const isFacebook = /FBAN|FBAV|FB_IAB|FB4A|Messenger/i.test(ua);
  const isZalo = /Zalo/i.test(ua);
  const isInstagram = /Instagram/i.test(ua);

  const isStandalone = Boolean((navigator as { standalone?: boolean }).standalone);
  const isWebView =
    /; wv|Version\/4\.0.*Chrome/i.test(ua) ||
    (isIOS && !isStandalone && !/Safari/i.test(ua) && /AppleWebKit/i.test(ua));

  const isInApp = isFacebook || isZalo || isInstagram || isWebView;

  return {
    isIOS,
    isAndroid,
    isInApp,
    isFacebook,
    isZalo,
  };
}
