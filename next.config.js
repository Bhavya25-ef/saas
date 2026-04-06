/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'img.clerk.com',
      'cdn.uploadcare.com',
      'drive-thirdparty.googleusercontent.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Removed custom webpack externals to maintain compatibility with Turbopack in Next.js 16+
  // webpack: (config) => {
  //   config.externals.push('pino-pretty', 'lokijs', 'encoding');
  //   return config;
  // },
}

module.exports = nextConfig
