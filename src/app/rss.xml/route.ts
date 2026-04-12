import { getAllPosts, formatDate } from "@/lib/mdx";
import { siteMetadata } from "@/lib/siteMetadata";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = siteMetadata.siteUrl;

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${post.frontmatter.title}</title>
      <description>${post.frontmatter.summary}</description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <pubDate>${new Date(
        post.frontmatter.date
      ).toUTCString()}</pubDate>
      <author>${post.frontmatter.author}</author>
      <guid isPermaLink="false">${baseUrl}/blog/${post.slug}</guid>
      ${post.frontmatter.tags
        .map((tag) => `<category>${tag}</category>`)
        .join("")}
    </item>`
    )
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteMetadata.title.default}</title>
    <description>${siteMetadata.description}</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}