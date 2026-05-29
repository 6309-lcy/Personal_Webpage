import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',                    // Required for GitHub Pages static hosting
  trailingSlash: true,                 // Recommended for GitHub Pages
  images: {
    unoptimized: true,                 // Required for static export
  },
  // Deploying to https://6309-lcy.github.io/Personal_Webpage/
  basePath: '/Personal_Webpage',
  assetPrefix: '/Personal_Webpage/',
};

export default nextConfig;
