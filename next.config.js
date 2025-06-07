/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3032/api/:path*', // Proxy API requests to backend
      },
    ];
  },
};

module.exports = nextConfig;
