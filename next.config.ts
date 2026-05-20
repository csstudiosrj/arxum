import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/suite/:path*",
        destination: "https://arxum-suite.vercel.app/suite/:path*",
      },
      {
        source: "/crew/:path*",
        destination: "https://arxum-crew.vercel.app/crew/:path*",
      },
      {
        source: "/fest/:path*",
        destination: "https://arxum-fest.vercel.app/fest/:path*",
      },
      {
        source: "/calculadoras/:path*",
        destination: "https://arxum-calculadoras.vercel.app/calculadoras/:path*",
      },
      {
        source: "/poseidon/:path*",
        destination: "https://arxum-poseidon.vercel.app/poseidon/:path*",
      },
    ];
  },
};

export default nextConfig;