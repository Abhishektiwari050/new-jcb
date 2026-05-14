import type { NextConfig } from "next";
import path from "path";

const nextConfig: any = {
  outputFileTracingRoot: path.join(__dirname),
  experimental: {},
  // Some versions use this
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
