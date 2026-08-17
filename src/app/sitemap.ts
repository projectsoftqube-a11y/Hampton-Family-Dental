import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPublishedPosts } from "@/lib/blog";

/**
 * Computed per request, not at build time.
 *
 * `export const revalidate` does not opt a metadata route into ISR the way it
 * does a page: sitemap.xml was still emitted as a build-time static file, so a
 * post scheduled after the last deploy never reached the sitemap. Confirmed in
 * production — /blog carried X-Nextjs-Stale-Time and picked the post up, while
 * /sitemap.xml had no such header and kept serving the build-time snapshot.
 *
 * A sitemap is cheap to render and is only fetched by crawlers, so computing
 * it on demand costs nothing and is always correct.
 */
export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/specials",
    "/blog",
    ...getPublishedPosts().map((post) => `/blog/${post.slug}`),
    "/general-dentistry",
    "/restorative-dentistry",
    "/cosmetic-dentistry",
    "/general-dentistry/oral-hygiene",
    "/general-dentistry/checkups-and-x-rays",
    "/general-dentistry/emergency-dentistry",
    "/general-dentistry/tooth-extraction",
    "/general-dentistry/oral-cancer-screening",
    "/general-dentistry/perio-protect",
    "/restorative-dentistry/dental-implants",
    "/restorative-dentistry/dental-crowns",
    "/restorative-dentistry/dental-bridges",
    "/restorative-dentistry/dental-fillings",
    "/restorative-dentistry/root-canal",
    "/restorative-dentistry/dentures",
    "/cosmetic-dentistry/porcelain-veneers",
    "/cosmetic-dentistry/invisalign",
    "/cosmetic-dentistry/clear-correct",
    "/cosmetic-dentistry/teeth-whitening",
    "/cosmetic-dentistry/dental-bonding",
    "/cosmetic-dentistry/smile-makeover",
    "/about/our-story",
    "/about/dr-jeffrey-brenner",
    "/about/dr-keyur-dudhat",
    "/about/patient-reviews",
    "/patient-information/why-choose-us",
    "/patient-information/new-patients",
    "/patient-information/scheduling",
    "/patient-information/emergency-scheduling",
    "/patient-information/insurance-and-payment",
    "/patient-information/financing-options",
    "/areas-we-serve",
    "/areas-we-serve/dentist-southampton-pa",
    "/areas-we-serve/dentist-richboro-pa",
    "/areas-we-serve/dentist-warminster-pa",
    "/areas-we-serve/dentist-newtown-pa",
    "/areas-we-serve/dentist-holland-pa",
    "/areas-we-serve/dentist-feasterville-pa",
    "/areas-we-serve/dentist-huntingdon-valley-pa",
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1.0 : 0.7,
  }));
}
