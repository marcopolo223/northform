import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { qualities: [75, 92] },
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
