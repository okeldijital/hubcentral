import { MetadataRoute } from "next";
import { getAllPosts, getAllCategories } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const categories = getAllCategories();
  
  // Use env var or fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL 
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '') 
    : "https://hub.okeldijital.africa";

  const postsSitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.lastmod || post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categorySitemap = Object.keys(categories).map((cat) => ({
    url: `${baseUrl}/category/${cat.replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticRoutes = ["", "/about", "/blog", "/editorial", "/workflows-ai-small-teams-2026", "/hosting", "/wordpress", "/ai-tools", "/guides"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.6,
    })
  );

  return [...staticRoutes, ...categorySitemap, ...postsSitemap];
}