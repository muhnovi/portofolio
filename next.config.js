// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Kompresi untuk production
  compress: true,
  
  // Optimasi gambar
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 hari
  },
  
  // Production optimization
  swcMinify: true,
  reactStrictMode: true,
  
  // Remove console.log di production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // HTTP Headers untuk caching
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  
  // Tambahkan output standalone untuk deployment
  output: "standalone",
};

export default nextConfig;