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
    ];
  },
};

export default nextConfig;
