import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set project root explicitly to avoid lockfile-based workspace root detection
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
