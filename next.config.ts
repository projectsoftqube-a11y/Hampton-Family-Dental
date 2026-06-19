import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
    ];
  },
};

export default nextConfig;
