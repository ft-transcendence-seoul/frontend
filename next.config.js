/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ec2-15-164-74-198.ap-northeast-2.compute.amazonaws.com",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
