import Link from "next/link";
import { Metadata } from "next";
import { getAllCategories, getPostsByCategory } from "@/lib/mdx";
import { Sidebar } from "@/components/Sidebar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return Object.keys(categories).map((cat) => ({
    slug: cat.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ");
  
  return {
    title: `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Guides`,
    description: `Browse all Hub Central articles about ${categoryName}. Practical guides for small teams.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ");
  const posts = getPostsByCategory(categoryName);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <header className="mb-10 flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[var(--brand-light)] px-3 py-1 text-sm font-semibold uppercase tracking-widest text-[var(--brand-text)]">
          Category
        </div>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl capitalize">
          {categoryName}
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
          {posts.length} practical guide{posts.length !== 1 ? 's' : ''} to help your team master {categoryName}.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
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
                     <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-text)]">
                       {categoryName}
                     </span>
                     <span className="ml-auto text-xs font-medium text-[var(--text-faint)]">
                       {post.readingTime} min read
                     </span>
                   </div>
                   <h3 className="mb-3 text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-text)] transition-colors">
                     {post.frontmatter.title}
                   </h3>
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
          ) : (
            <div className="text-center py-20 bg-[var(--surface-1)] rounded-xl border border-[var(--border)]">
              <p className="text-lg text-[var(--text-muted)]">
                We are still writing the ultimate guides for this category.
              </p>
            </div>
          )}
        </div>
        
        <aside className="lg:col-span-4">
          <div className="sticky top-24">
            <Sidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
