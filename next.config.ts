import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Isso força o Next a padronizar as barras no final das URLs e ajuda o rewrite a casar
  trailingSlash: false, 

  async rewrites() {
    return [
      // REGRA PARA O FEST (Dizendo explicitamente como lidar com a raiz do fest)
      {
        source: "/fest",
        destination: "https://arxum-fest.vercel.app/fest",
      },
      {
        source: "/fest/:path*",
        destination: "https://arxum-fest.vercel.app/fest/:path*",
      },

      // REGRA PARA O CALCULADORAS
      {
        source: "/calculadoras",
        destination: "https://arxum-calculadoras.vercel.app/calculadoras",
      },
      {
        source: "/calculadoras/:path*",
        destination: "https://arxum-calculadoras.vercel.app/calculadoras/:path*",
      },

      // Mantém os outros iguais, mas adicionando a linha limpa para cada um se quiser blindar:
      {
        source: "/suite/:path*",
        destination: "https://arxum-suite.vercel.app/suite/:path*",
      },
      {
        source: "/crew/:path*",
        destination: "https://arxum-crew.vercel.app/crew/:path*",
      },
      {
        source: "/poseidon/:path*",
        destination: "https://arxum-poseidon.vercel.app/poseidon/:path*",
      },
    ];
  },
};

export default nextConfig;