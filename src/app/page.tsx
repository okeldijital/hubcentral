import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { getAllPosts } from "@/lib/mdx";
import { Sidebar } from "@/components/Sidebar";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.find(post => post.frontmatter.featured) || allPosts[0];
  const recentPosts = allPosts.filter(post => post.slug !== featuredPost?.slug).slice(0, 6);

  const categories = [
    {
      name: "AI Tools",
      slug: "ai-tools",
      description: "Generative AI applications, prompt workflows, and writing assistants.",
      icon: "🤖"
    },
    {
      name: "WordPress",
      slug: "wordpress",
      description: "Core optimization, theme building, and plugin management.",
      icon: "🔧"
    },
    {
      name: "Hosting",
      slug: "hosting",
      description: "Server architecture, budget hosts, and caching strategies.",
      icon: "🖥️"
    },
    {
      name: "Guides",
      slug: "guides",
      description: "Step-by-step tutorials and process documentation.",
      icon: "📖"
    }
  ];

  return (
    <div className="flex flex-col flex-1">
      {/* HERO SECTION */}
      <section className="border-b border-[var(--border)] text-[var(--foreground)] relative overflow-hidden bg-[#050505]">
        {/* Cinematic Galaxy Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/hero-galaxy.svg')" }}
        ></div>
        
        {/* Subtle decorative overlays */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505] pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)] to-transparent opacity-30"></div>
        
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 md:px-6 md:pt-32 md:pb-32 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
              Practical AI & Workflows for Small Teams in 2026 – No Hype, Real Systems.
            </h1>
            <p className="mb-10 text-lg md:text-xl text-[var(--text-secondary)] text-[#a8a89c] text-balance max-w-2xl mx-auto leading-relaxed">
              The complete playbook from definition to safe AI integration — helping you build scalable systems that actually save time.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/workflows-ai-small-teams-2026"
                className="rounded-lg bg-[var(--brand)] px-8 py-4 text-lg font-bold text-white hover:bg-[var(--brand-hover)] transition-all active:scale-95 shadow-xl shadow-amber-500/20"
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
            <svg className="h-5 w-5 text-[var(--brand)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            No AI-Generated Fluff
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-[var(--brand)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Updated for 2026
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-[var(--brand)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Tested real-world workflows
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* FEATURED POST */}
            {featuredPost && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px w-8 bg-[var(--brand)]"></span>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--brand-text)]">Featured Article</h2>
                </div>
                
                <Link 
                  href={`/blog/${featuredPost.slug}`} 
                  className="card-hover group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm"
                >
                  {featuredPost.frontmatter.image && (
                    <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-[var(--surface-2)]">
                      <img
                        src={featuredPost.frontmatter.image}
                        alt={featuredPost.frontmatter.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex w-full md:w-1/2 flex-col justify-center p-8 lg:p-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.frontmatter.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--brand-light)] px-3 py-1 text-xs font-semibold text-[var(--brand-text)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-text)] transition-colors text-balance">
                      {featuredPost.frontmatter.title}
                    </h3>
                    <p className="mb-6 text-sm text-[var(--text-secondary)] line-clamp-3">
                      {featuredPost.frontmatter.summary}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] font-medium mt-auto">
                      <span>{featuredPost.frontmatter.author}</span>
                      <span>•</span>
                      <time dateTime={featuredPost.frontmatter.date}>
                        {new Date(featuredPost.frontmatter.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </time>
                    </div>
                  </div>
                </Link>
              </section>
            )}

            {/* LATEST POSTS GRID */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Latest Knowledge</h2>
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-[var(--brand-text)] hover:text-[var(--brand-hover)] flex items-center gap-1"
                >
                  View all <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
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
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontmatter.tags.slice(0, 1).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-text)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-text)] transition-colors leading-tight">
                      {post.frontmatter.title}
                    </h3>
                    <p className="mb-4 text-xs text-[var(--text-secondary)] line-clamp-2 flex-grow">
                      {post.frontmatter.summary}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)]">
                      <time>
                        {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
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
              <div className="flex items-center gap-3 mb-8">
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
                      <h3 className="text-base font-bold text-[var(--text-primary)]">
                        {cat.name}
                      </h3>
                      <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR AREA */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
      
      {/* FINAL CTA */}
      <section className="bg-[var(--brand)] py-16 text-white text-center px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to upgrade your workflows?</h2>
          <p className="text-amber-100 mb-8 text-lg">Join small teams getting actionable tips every week.</p>
          <NewsletterForm variant="hero" placeholder="Email address" buttonText="Sign Up Free" />
        </div>
      </section>
    </div>
  );
}
