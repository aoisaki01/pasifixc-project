/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Object for Flaticon (if you still need it)
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      // Separate object for YouTube's image server
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
};

module.exports = nextConfig;