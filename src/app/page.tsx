import type { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { getAllPosts } from "@/lib/mdx";
import { Sidebar } from "@/components/Sidebar";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  description:
    "Practical AI & WordPress guides for small teams in 2026. Honest workflows, hosting tips, and AI integration strategies that actually deliver ROI — no hype, just what works.",
};

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.find((post) => post.frontmatter.featured) || allPosts[0];
  const recentPosts = allPosts.filter((post) => post.slug !== featuredPost?.slug).slice(0, 6);

  const categories = [
    {
      name: "AI Tools",
      slug: "ai-tools",
      description: "Generative AI applications, prompt workflows, and writing assistants.",
      icon: "🤖",
    },
    {
      name: "WordPress",
      slug: "wordpress",
      description: "Core optimization, theme building, and plugin management.",
      icon: "🔧",
    },
    {
      name: "Hosting",
      slug: "hosting",
      description: "Server architecture, budget hosts, and caching strategies.",
      icon: "🖥️",
    },
    {
      name: "Guides",
      slug: "guides",
      description: "Step-by-step tutorials and process documentation.",
      icon: "📖",
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[#050505] text-[var(--foreground)]">
        {/* Cinematic Galaxy Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/hero-galaxy.svg')" }}
        ></div>

        {/* Subtle decorative overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-30"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-20 md:px-6 md:pb-32 md:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Practical AI & Workflows for Small Teams in 2026 – No Hype, Real Systems.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-balance text-lg leading-relaxed text-[#a8a89c] text-[var(--text-secondary)] md:text-xl">
              The complete playbook from definition to safe AI integration — helping you build
              scalable systems that actually save time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/workflows-ai-small-teams-2026"
                className="rounded-lg bg-[var(--brand)] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-amber-500/20 transition-all hover:bg-[var(--brand-hover)] active:scale-95"
              >
                Start with the Pillar Guide
              </Link>
              <NewsletterForm variant="hero" buttonText="Join 2,400+ Pros" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-1)] py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-4 px-4 text-sm font-medium text-[var(--text-muted)] md:px-6">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-[var(--brand)]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            No AI-Generated Fluff
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-[var(--brand)]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            Updated for 2026
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-[var(--brand)]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            Tested real-world workflows
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* MAIN CONTENT AREA */}
          <div className="space-y-20 lg:col-span-8">
            {/* FEATURED POST */}
            {featuredPost && (
              <section>
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--brand)]"></span>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-text)]">
                    Featured Article
                  </h2>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm md:flex-row"
                >
                  {featuredPost.frontmatter.image && (
                    <div className="aspect-video w-full overflow-hidden bg-[var(--surface-2)] md:aspect-auto md:w-1/2">
                      <img
                        src={featuredPost.frontmatter.image}
                        alt={featuredPost.frontmatter.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-10">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {featuredPost.frontmatter.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--brand-light)] px-3 py-1 text-xs font-semibold text-[var(--brand-text)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-4 text-balance text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--brand-text)]">
                      {featuredPost.frontmatter.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 text-sm text-[var(--text-secondary)]">
                      {featuredPost.frontmatter.summary}
                    </p>
                    <div className="mt-auto flex items-center gap-3 text-xs font-medium text-[var(--text-muted)]">
                      <span>{featuredPost.frontmatter.author}</span>
                      <span>•</span>
                      <time dateTime={featuredPost.frontmatter.date}>
                        {new Date(featuredPost.frontmatter.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              </section>
            )}

            {/* LATEST POSTS GRID */}
            <section>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Latest Knowledge</h2>
                <Link
                  href="/blog"
                  className="flex items-center gap-1 text-sm font-semibold text-[var(--brand-text)] hover:text-[var(--brand-hover)]"
                >
                  View all{" "}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {recentPosts.map((post) => (
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
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.frontmatter.tags.slice(0, 1).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-text)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-3 text-lg font-bold leading-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--brand-text)]">
                      {post.frontmatter.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 flex-grow text-xs text-[var(--text-secondary)]">
                      {post.frontmatter.summary}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 text-[10px] text-[var(--text-muted)]">
                      <time>
                        {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span>5 min read</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* TOPICS SECTION */}
            <section>
              <div className="mb-8 flex items-center gap-3">
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Browse by Topic</h2>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={
                      cat.slug === "wordpress"
                        ? "/wordpress"
                        : cat.slug === "ai-tools"
                          ? "/ai-tools"
                          : `/category/${cat.slug}`
                    }
                    className="card-hover flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 hover:border-[var(--brand)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-light)] text-2xl">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--text-primary)]">{cat.name}</h3>
                      <p className="line-clamp-1 text-[10px] leading-relaxed text-[var(--text-secondary)]">
                        {cat.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR AREA */}
          <aside className="space-y-8 lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="bg-[var(--brand)] px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to upgrade your workflows?</h2>
          <p className="mb-8 text-lg text-amber-100">
            Join small teams getting actionable tips every week.
          </p>
          <NewsletterForm variant="hero" placeholder="Email address" buttonText="Sign Up Free" />
        </div>
      </section>
    </div>
  );
}
