/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true, // required for App Router
  },
};

module.exports = nextConfig;
