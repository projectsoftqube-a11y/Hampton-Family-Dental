import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    /*
      Next's default re-encode quality is 75, which reads as soft on the
      photographic images — especially on a 2x display, where they are already
      being scaled up. 90 costs a modest number of bytes (AVIF/WebP are
      efficient at this end of the curve) and removes the compression half of
      the blurriness users reported.

      In Next 16 `qualities` is an allowlist, not a default: a `quality` prop
      whose value is not listed here is coerced to the nearest entry. 75 stays
      in the list so any image left at the default still optimizes normally.

      Note this only governs Next's re-encode of the source file — it cannot
      add detail a small source never had.
    */
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/dental-implants",
        destination: "/restorative-dentistry/dental-implants",
        permanent: true,
      },
      {
        source: "/dental-crowns",
        destination: "/restorative-dentistry/dental-crowns",
        permanent: true,
      },
      {
        source: "/crowns",
        destination: "/restorative-dentistry/dental-crowns",
        permanent: true,
      },
      {
        source: "/dental-bridges",
        destination: "/restorative-dentistry/dental-bridges",
        permanent: true,
      },
      {
        source: "/bridges",
        destination: "/restorative-dentistry/dental-bridges",
        permanent: true,
      },
      {
        source: "/dental-fillings",
        destination: "/restorative-dentistry/dental-fillings",
        permanent: true,
      },
      {
        source: "/fillings",
        destination: "/restorative-dentistry/dental-fillings",
        permanent: true,
      },
      {
        source: "/root-canal",
        destination: "/restorative-dentistry/root-canal",
        permanent: true,
      },
      {
        source: "/dentures",
        destination: "/restorative-dentistry/dentures",
        permanent: true,
      },
      {
        source: "/veneers",
        destination: "/cosmetic-dentistry/porcelain-veneers",
        permanent: true,
      },
      {
        source: "/porcelain-veneers",
        destination: "/cosmetic-dentistry/porcelain-veneers",
        permanent: true,
      },
      {
        source: "/clearcorrect",
        destination: "/cosmetic-dentistry/clear-correct",
        permanent: true,
      },
      {
        source: "/clear-correct",
        destination: "/cosmetic-dentistry/clear-correct",
        permanent: true,
      },
      {
        source: "/whitening",
        destination: "/cosmetic-dentistry/teeth-whitening",
        permanent: true,
      },
      {
        source: "/teeth-whitening",
        destination: "/cosmetic-dentistry/teeth-whitening",
        permanent: true,
      },
      {
        source: "/dental-bonding",
        destination: "/cosmetic-dentistry/dental-bonding",
        permanent: true,
      },
      {
        source: "/smile-makeover",
        destination: "/cosmetic-dentistry/smile-makeover",
        permanent: true,
      },
      {
        source: "/our-story",
        destination: "/about/our-story",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about/our-story",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
