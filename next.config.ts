import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Match any path of ≥1 character, except if it starts with "dashboard", "login", or "register"
        source: "/:path((?!dashboard|login|register).+)",
        // Redirect to the same path under app.onchainrank.com
        destination: "https://app.onchainrank.com/:path",
        permanent: false, // 307 Temporary. Change to `true` for a 308 Permanent redirect.
      },
    ];
  },
};

export default nextConfig;
