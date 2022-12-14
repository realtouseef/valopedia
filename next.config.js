/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.valorant-api.com"],
  },
};

module.exports = nextConfig;
