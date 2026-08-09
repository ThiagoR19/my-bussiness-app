import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.14'],
  turbopack: {
    root: __dirname,
  }
};

export default nextConfig;
