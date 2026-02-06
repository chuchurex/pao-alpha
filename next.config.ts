import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permitir imágenes de Sanity CDN
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
