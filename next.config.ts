import type { NextConfig } from "next";

const isPreview = process.env.IS_PREVIEW === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isPreview ? `/pr-preview-${process.env.PR_NUMBER}` : "",
  assetPrefix: isPreview ? `/pr-preview-${process.env.PR_NUMBER}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
