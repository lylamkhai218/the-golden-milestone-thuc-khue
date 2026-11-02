/**
 * Resolves a public asset path safely across local dev, local preview,
 * and GitHub Pages project subpaths (/the-golden-milestone-thuc-khue/).
 */
export function assetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL || "./";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = relativePath.replace(/^\.?\//, "");
  return `${normalizedBase}${cleanPath}`;
}
