import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Remove basePath if you add a custom domain (e.g. emilyh.me) in GitHub Pages settings
  basePath: "/emilyh_me2",
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
