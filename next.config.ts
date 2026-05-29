import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',                    // Required for GitHub Pages static hosting
  trailingSlash: true,                 // Recommended for GitHub Pages
  images: {
    unoptimized: true,                 // Required for static export
  },
  // If deploying to https://username.github.io/repo-name/
  // Uncomment and set the correct base path:
  // basePath: '/Personal_Webpage',
  // assetPrefix: '/Personal_Webpage/',
};

export default nextConfig;
