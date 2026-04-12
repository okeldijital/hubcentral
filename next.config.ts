import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/category/guides",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/category/hosting",
        destination: "/hosting",
        permanent: true,
      },
      {
        source: "/workflows",
        destination: "/workflows-ai-small-teams-2026",
        permanent: true,
      },
      {
        source: "/category/editorial",
        destination: "/editorial",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
