/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
