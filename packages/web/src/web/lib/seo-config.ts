// Centralised SEO config. Single source of truth for the site origin and
// shared defaults used by the <Seo> component and the prerender/sitemap scripts.

export const SITE_ORIGIN = "https://junglethrill.africa";
export const SITE_NAME = "Jungle Thrill Africa";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;
export const TWITTER_HANDLE = ""; // add @handle if/when one exists

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function canonicalFor(pathname: string): string {
  // Normalise: no trailing slash except root
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE_ORIGIN}${clean === "" ? "/" : clean}`;
}
