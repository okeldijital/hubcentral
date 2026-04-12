import { NextResponse } from 'next/server';
import { getAllPosts, getAllCategories } from "@/lib/mdx";

export async function GET() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  
  // Use env var or fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL 
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '') 
    : "https://hub.okeldijital.africa";

  const staticRoutes = ["", "/about", "/blog", "/editorial", "/workflows-ai-small-teams-2026", "/hosting", "/wordpress", "/ai-tools", "/guides"];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Static routes
  staticRoutes.forEach(route => {
    xml += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? '1.0' : '0.6'}</priority>
  </url>`;
  });

  // Category routes
  Object.keys(categories).forEach(cat => {
    xml += `
  <url>
    <loc>${baseUrl}/category/${cat.replace(/\s+/g, "-")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Post routes
  posts.forEach(post => {
    xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.frontmatter.lastmod || post.frontmatter.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}