import { getAllPosts } from "@/lib/mdx";

/**
 * Find related posts based on shared tags
 */
export function getRelatedPosts(currentSlug: string, limit = 3): Array<{
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image?: string;
}> {
  const currentPost = getAllPosts().find((p) => p.slug === currentSlug);
  
  if (!currentPost) return [];
  
  const currentTags = new Set((currentPost.frontmatter.tags || []).map(tag => tag.toLowerCase()));
  
  const related = getAllPosts()
    .filter(post => 
      post.slug !== currentSlug && 
      (post.frontmatter.tags || []).some(tag => currentTags.has(tag.toLowerCase()))
    )
    .sort((a, b) => {
      // Sort by number of shared tags (descending)
      const aShared = (a.frontmatter.tags || []).filter(tag => currentTags.has(tag.toLowerCase())).length;
      const bShared = (b.frontmatter.tags || []).filter(tag => currentTags.has(tag.toLowerCase())).length;
      return bShared - aShared;
    })
    .slice(0, limit)
    .map(post => ({
      slug: post.slug,
      title: post.frontmatter.title,
      summary: post.frontmatter.summary,
      tags: post.frontmatter.tags,
      image: post.frontmatter.image
    }));
  
  return related;
}

/**
 * Get internal link suggestions for content
 */
export function getInternalLinkSuggestions(content: string): Array<{
  text: string;
  href: string;
  context: string;
}> {
  const posts = getAllPosts();
  const suggestions: Array<{ text: string; href: string; context: string }> = [];
  
  // Simple implementation - in production you'd use NLP for better entity extraction
  posts.forEach(post => {
    const words = post.frontmatter.title.toLowerCase().split(/\s+/);
    words.forEach(word => {
      if (word.length > 3 && content.toLowerCase().includes(word)) {
        suggestions.push({
          text: post.frontmatter.title,
          href: `/blog/${post.slug}`,
          context: word
        });
      }
    });
  });
  
  // Deduplicate and limit
  const unique = Array.from(new Map(suggestions.map(item => [item.href, item])).values());
  return unique.slice(0, 5);
}

/**
 * Generate breadcrumbs for current path
 */
export function getBreadcrumbs(pathname: string): Array<{
  label: string;
  href: string;
}> {
  const breadcrumbs = [{ label: "Home", href: "/" }];
  
  if (pathname === "/") return breadcrumbs;
  
  const segments = pathname.split("/").filter(Boolean);
  
  if (segments.length > 0) {
    let currentPath = "";
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Handle blog posts
      if (index === 0 && segment === "blog" && segments.length > 1) {
        breadcrumbs.push({ label: "Blog", href: "/blog" });
        if (segments.length > 2) {
          // This is a blog post - we'd need to fetch the title
          breadcrumbs.push({ 
            label: segments[segments.length - 1], // Simplified - in reality get from post data
            href: pathname
          });
        }
      } 
      // Handle tag pages or pillar pages
      else if (index === 0 && segment !== "blog" && segments.length === 1) {
        let label = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        // Specific fixes for acronyms
        if (segment === "workflows-ai-small-teams-2026") label = "AI Workflows Playbook 2026";
        if (segment === "wordpress") label = "WordPress";
        if (segment === "ai-tools") label = "AI Tools";
        
        breadcrumbs.push({ 
          label: label,
          href: currentPath
        });
      }
    });
  }
  
  return breadcrumbs;
}