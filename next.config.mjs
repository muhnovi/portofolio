/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    // Nonaktifkan ESLint saat build untuk menghindari error
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: hanya jika ada type errors
    ignoreBuildErrors: false,
  },
};

export default nextConfig;