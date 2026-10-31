import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/for-colleagues",
        destination: "/start",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
