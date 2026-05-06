/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ini akan skip ESLint saat build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: Skip TypeScript checking jika ada error
    ignoreBuildErrors: true,
  },
};

export default nextConfig;