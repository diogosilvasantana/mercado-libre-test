// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http", // Alterado para 'http' conforme mostrado no erro
        hostname: "http2.mlstatic.com",
        pathname: "/**", // Permitir qualquer caminho neste domínio
      },
      {
        protocol: "https", // Alterado para 'http' conforme mostrado no erro
        hostname: "http2.mlstatic.com",
        pathname: "/**", // Permitir qualquer caminho neste domínio
      },
    ],
  },
};

export default nextConfig;
