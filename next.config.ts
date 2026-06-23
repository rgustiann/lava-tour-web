import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["outthink-identical-helpline.ngrok-free.dev"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
