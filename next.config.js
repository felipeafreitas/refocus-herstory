/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'refocusherstory.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
