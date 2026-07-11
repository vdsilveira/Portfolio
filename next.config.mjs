/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/Portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
