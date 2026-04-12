import Link from "next/link";
import { getRelatedPosts } from "@/lib/internal-linking";

export function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedPosts(currentSlug, 2);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 mb-12 border-t border-[var(--border)] pt-12">
      <h3 className="mb-6 text-xl font-bold text-[var(--text-primary)] relative inline-block">
        Keep Reading
        <span className="absolute -bottom-2 left-0 h-1 w-1/2 bg-[var(--brand)] rounded-full"></span>
      </h3>
      
      <div className="grid gap-6 sm:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group card-hover flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-1)]"
          >
            {post.image && (
              <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--surface-2)]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-col flex-1 p-5">
              <h4 className="mb-2 text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-text)] transition-colors">
                {post.title}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                {post.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
