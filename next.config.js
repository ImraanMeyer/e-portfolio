/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubActions ? '/e-portfolio' : '',
  assetPrefix: isGithubActions ? '/e-portfolio/' : '',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

