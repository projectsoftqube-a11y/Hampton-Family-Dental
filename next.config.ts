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
    ];
  },
};

export default nextConfig;
