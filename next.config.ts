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
    ];
  },
};

export default nextConfig;
