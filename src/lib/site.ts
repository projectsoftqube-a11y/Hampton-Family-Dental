/**
 * The site's public origin. Drives every canonical, og:url, robots.txt Host
 * and sitemap entry.
 *
 * The fallback MUST be the real production domain. It used to be the
 * hampton-family-dental.vercel.app preview URL, and because
 * NEXT_PUBLIC_SITE_URL was never set in production, every page shipped a
 * canonical pointing at the preview host — telling Google to index a domain
 * the site does not actually live on, and splitting ranking signals in two.
 *
 * NEXT_PUBLIC_SITE_URL still overrides this, so preview deployments can point
 * at themselves if that is ever wanted.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.hamptonfamilydentist.com";

export function absoluteUrl(path = "") {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
