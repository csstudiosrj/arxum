import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // CREW
      {
        source: "/crew",
        destination: "https://arxum-crew.vercel.app/crew",
      },
      {
        source: "/crew/:path*",
        destination: "https://arxum-crew.vercel.app/crew/:path*",
      },

      // FEST
      {
        source: "/fest",
        destination: "https://arxum-fest.vercel.app/fest",
      },
      {
        source: "/fest/:path*",
        destination: "https://arxum-fest.vercel.app/fest/:path*",
      },

      // CALCULADORAS
      {
        source: "/calculadoras",
        destination: "https://arxum-calculadoras.vercel.app/calculadoras",
      },
      {
        source: "/calculadoras/:path*",
        destination: "https://arxum-calculadoras.vercel.app/calculadoras/:path*",
      },

      // SUITE
      {
        source: "/suite",
        destination: "https://arxum-suite.vercel.app/suite",
      },
      {
        source: "/suite/:path*",
        destination: "https://arxum-suite.vercel.app/suite/:path*",
      },

      // POSEIDON
      {
        source: "/poseidon",
        destination: "https://arxum-poseidon.vercel.app/poseidon",
      },
      {
        source: "/poseidon/:path*",
        destination: "https://arxum-poseidon.vercel.app/poseidon/:path*",
      },

      // DESCOMPLICAÍ
      {
        source: "/descomplicai",
        destination: "https://descomplicai-lovat.vercel.app/descomplicai",
      },
      {
        source: "/descomplicai/:path*",
        destination: "https://descomplicai-lovat.vercel.app/descomplicai/:path*",
      },
    ];
  },
};

export default nextConfig;
