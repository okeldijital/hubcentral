import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface PostFrontmatter {
  title: string;
  date: string;
  lastmod?: string;
  summary: string;
  description?: string;
  tags: string[];
  category?: string; // New field
  image?: string;
  author: string;
  draft?: boolean;
  featured?: boolean; // New field
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: number; // Pre-computed
}

export function getWordCount(content: string): number {
  return content.split(/\s+/).filter((word) => word.length > 0).length;
}

export function getReadingTime(content: string): number {
  const words = getWordCount(content);
  // Average reading speed is ~238 words per minute, we use 200 for technical content
  const minutes = Math.ceil(words / 200);
  return minutes > 0 ? minutes : 1;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(blogDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: getReadingTime(content)
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && post.frontmatter && !post.frontmatter.draft)
    .sort((a, b) => (new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()));

  return posts;
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.frontmatter.tags?.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getPostsByCategory(categorySlug: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => {
    // either matches category field exactly, or matches one of the tags
    if (post.frontmatter.category?.toLowerCase() === categorySlug.replace(/-/g, " ")) return true;
    return post.frontmatter.tags?.some(t => t.toLowerCase() === categorySlug.replace(/-/g, " "));
  });
}

export function getAllTags(): Record<string, number> {
  const posts = getAllPosts();
  const tags: Record<string, number> = {};

  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => {
      const normalizedTag = tag.toLowerCase();
      tags[normalizedTag] = (tags[normalizedTag] || 0) + 1;
    });
  });

  return tags;
}

export function getAllCategories(): Record<string, number> {
  const posts = getAllPosts();
  const categories: Record<string, number> = {};

  posts.forEach((post) => {
    // If it has explicit category, count it
    if (post.frontmatter.category) {
      const category = post.frontmatter.category.toLowerCase();
      categories[category] = (categories[category] || 0) + 1;
    } else {
      // Otherwise use the first tag as category
      const firstTag = post.frontmatter.tags?.[0]?.toLowerCase();
      if (firstTag) {
        categories[firstTag] = (categories[firstTag] || 0) + 1;
      }
    }
  });

  return categories;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}