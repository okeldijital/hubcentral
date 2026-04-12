import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Sidebar } from "@/components/Sidebar";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "All Guides | Practical No-Hype Resources for Small Teams",
  description: "Practical, no-hype guides for small teams — WordPress, AI Tools, Hosting, and Workflows.",
  openGraph: {
    title: "All Guides | Practical No-Hype Resources for Small Teams",
    description: "Practical, no-hype guides for small teams — WordPress, AI Tools, Hosting, and Workflows.",
    url: `${siteMetadata.siteUrl}/guides`,
    type: "website",
  },
};

export default function GuidesPage() {
  const allPosts = getAllPosts();
  
  // Grouping posts by pillar
  const wordpressPosts = allPosts.filter(post => 
    post.frontmatter.tags?.some(tag => tag.toLowerCase() === "wordpress") ||
    post.frontmatter.category?.toLowerCase() === "wordpress"
  );
  
  const hostingPosts = allPosts.filter(post => 
    post.frontmatter.tags?.some(tag => tag.toLowerCase() === "web-hosting" || tag.toLowerCase() === "hosting") ||
    post.frontmatter.category?.toLowerCase() === "hosting"
  );
  
  const aiPosts = allPosts.filter(post => 
    post.frontmatter.tags?.some(tag => tag.toLowerCase() === "ai tools" || tag.toLowerCase() === "ai") ||
    post.frontmatter.category?.toLowerCase() === "ai tools"
  );
  
  const workflowPosts = allPosts.filter(post => 
    post.frontmatter.tags?.some(tag => tag.toLowerCase() === "workflow" || tag.toLowerCase() === "automation") ||
    post.frontmatter.category?.toLowerCase() === "workflows"
  );

  const pillars = [
    { title: "WordPress Guides", href: "/wordpress", posts: wordpressPosts, color: "text-blue-500" },
    { title: "AI Tools", href: "/ai-tools", posts: aiPosts, color: "text-purple-500" },
    { title: "Hosting Guides", href: "/hosting", posts: hostingPosts, color: "text-amber-500" },
    { title: "Workflows", href: "/workflows", posts: workflowPosts, color: "text-emerald-500" },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <Breadcrumb pathname="/guides" />
      
      {/* HERO SECTION */}
      <section className="mt-8 mb-16 overflow-hidden rounded-3xl border border-[var(--border)] bg-[#050505] relative p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 hero-gradient opacity-40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 ring-1 ring-inset ring-amber-500/20">
             Master Directory
          </span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
              All Guides
          </h1>
          <p className="mb-10 text-lg md:text-xl text-amber-100/70 text-balance max-w-2xl mx-auto">
              Practical, no-hype guides for small teams — WordPress, AI Tools, Hosting, and Workflows.
          </p>
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-12">
        <main className="lg:col-span-8">
          
          {/* FEATURED PILLAR CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 mb-20">
            {pillars.map((pillar) => (
              <Link 
                key={pillar.href}
                href={pillar.href}
                className="card-hover group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-8"
              >
                <h3 className="mb-2 text-2xl font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mb-6 text-sm text-[var(--text-secondary)]">
                  Explore our detailed guides and recommendations for {pillar.title.toLowerCase()}.
                </p>
                <div className="mt-auto text-xs font-bold uppercase tracking-widest text-amber-600">
                  View Pillar →
                </div>
              </Link>
            ))}
          </div>

          {/* ARTICLES GROUPED BY PILLAR */}
          <div className="space-y-16">
            {pillars.map((pillar) => (
              <section key={`section-${pillar.href}`} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">{pillar.title}</h2>
                  <div className="h-px flex-1 bg-[var(--border)]"></div>
                  <Link href={pillar.href} className="text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-amber-500 transition-colors">
                    View All
                  </Link>
                </div>
                
                <div className="grid gap-4">
                  {pillar.posts.length > 0 ? (
                    pillar.posts.slice(0, 5).map((post) => (
                      <Link 
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4 hover:border-amber-500/30 transition-colors"
                      >
                        <h4 className="text-lg font-medium text-[var(--text-primary)] group-hover:text-amber-500 transition-colors">
                          {post.frontmatter.title}
                        </h4>
                        <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">
                          {post.readingTime} min read
                        </span>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-[var(--text-secondary)] italic">More guides coming soon.</p>
                  )}
                  {pillar.posts.length > 5 && (
                    <Link href={pillar.href} className="text-sm font-medium text-amber-600/70 hover:text-amber-500 transition-colors pt-2">
                      + {pillar.posts.length - 5} more articles in {pillar.title}
                    </Link>
                  )}
                </div>
              </section>
            ))}
          </div>
        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-24">
            <Sidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
