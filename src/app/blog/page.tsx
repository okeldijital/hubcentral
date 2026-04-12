import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <header className="mb-10 border-b border-[var(--border)] pb-8">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
          The Hub Central Library
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
          Practical guides, tested workflows, and unbiased tools reviews for small teams. No fluff, just signal.
        </p>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded-full bg-[var(--text-primary)] px-4 py-2 text-sm font-bold text-[var(--background)]">
            All Knowledge
          </span>
          {Object.entries(categories)
            .sort(([, a], [, b]) => b - a)
            .map(([cat]) => (
            <Link
              key={cat}
              href={`/category/${cat.replace(/\s+/g, "-")}`}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-1)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:border-[var(--brand)] hover:text-[var(--text-primary)] transition-colors capitalize"
            >
              {cat}
            </Link>
          ))}
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card-hover group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5"
          >
            {post.frontmatter.image && (
              <div className="mb-5 aspect-[16/10] overflow-hidden rounded-lg bg-[var(--surface-2)]">
                <img
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.frontmatter.category ? (
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-text)]">
                  {post.frontmatter.category}
                </span>
              ) : post.frontmatter.tags && post.frontmatter.tags.length > 0 ? (
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-text)]">
                  {post.frontmatter.tags[0]}
                </span>
              ) : null}
              <span className="ml-auto text-xs font-medium text-[var(--text-faint)]">
                {post.readingTime} min read
              </span>
            </div>
            <h2 className="mb-3 text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-text)] transition-colors">
              {post.frontmatter.title}
            </h2>
            <p className="mb-4 text-sm text-[var(--text-secondary)] line-clamp-2 flex-grow">
              {post.frontmatter.summary}
            </p>
            <time className="text-xs font-medium text-[var(--text-muted)] mt-auto pt-4 border-t border-[var(--border-subtle)]">
               {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                 month: "long",
                 day: "numeric",
                 year: "numeric"
               })}
            </time>
          </Link>
        ))}
      </div>
    </div>
  );
}