import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Sidebar } from "@/components/Sidebar";
import { getAllPosts } from "@/lib/mdx";
import MidArticleAd from "@/components/MidArticleAd";
import SidebarAd from "@/components/SidebarAd";

export const metadata: Metadata = {
  title: "Editorial | Practical No-Hype Guides for Small Teams",
  description:
    "Practical, no-hype guides and insights for small teams — WordPress, Hosting, AI Tools, Workflows and more.",
  openGraph: {
    title: "Editorial | Practical No-Hype Guides for Small Teams",
    description:
      "Practical, no-hype guides and insights for small teams — WordPress, Hosting, AI Tools, Workflows and more.",
    url: `${siteMetadata.siteUrl}/editorial`,
    type: "website",
  },
};

export default function EditorialPillarPage() {
  const allPosts = getAllPosts();

  // Grouping posts by pillar
  const wordpressPosts = allPosts.filter(
    (post) =>
      post.frontmatter.tags?.some((tag) => tag.toLowerCase() === "wordpress") ||
      post.frontmatter.category?.toLowerCase() === "wordpress"
  );

  const hostingPosts = allPosts.filter(
    (post) =>
      post.frontmatter.tags?.some(
        (tag) => tag.toLowerCase() === "web-hosting" || tag.toLowerCase() === "hosting"
      ) || post.frontmatter.category?.toLowerCase() === "hosting"
  );

  const aiPosts = allPosts.filter(
    (post) =>
      post.frontmatter.tags?.some(
        (tag) => tag.toLowerCase() === "ai tools" || tag.toLowerCase() === "ai"
      ) || post.frontmatter.category?.toLowerCase() === "ai tools"
  );

  const workflowPosts = allPosts.filter(
    (post) =>
      post.frontmatter.tags?.some(
        (tag) => tag.toLowerCase() === "workflow" || tag.toLowerCase() === "automation"
      ) || post.frontmatter.category?.toLowerCase() === "workflows"
  );

  const pillars = [
    { title: "WordPress Guides", href: "/wordpress", posts: wordpressPosts, keyLink: "/guides" },
    { title: "Hosting Guides", href: "/hosting", posts: hostingPosts, keyLink: "/guides" },
    {
      title: "AI Tools & Workflows",
      href: "/ai-tools",
      posts: aiPosts,
      keyLink: "/workflows-ai-small-teams-2026",
    },
    {
      title: "Workflows",
      href: "/workflows-ai-small-teams-2026",
      posts: workflowPosts,
      keyLink: "/workflows-ai-small-teams-2026",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <Breadcrumb pathname="/editorial" />

      {/* HERO SECTION */}
      <section className="relative mb-16 mt-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-[#050505] p-8 text-center md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="hero-gradient absolute inset-0 opacity-40"></div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 ring-1 ring-inset ring-amber-500/20">
            Editorial Hub
          </span>
          <h1 className="mb-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Editorial
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-balance text-lg text-amber-100/70 md:text-xl">
            Practical, no-hype guides and insights for small teams — WordPress, Hosting, AI Tools,
            Workflows and more.
          </p>
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-12">
        <main className="lg:col-span-8">
          {/* FEATURED PILLAR CARDS */}
          <div className="mb-20 grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="card-hover group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-8"
              >
                <h3 className="mb-2 text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-amber-500">
                  {pillar.title}
                </h3>
                <p className="mb-6 text-sm text-[var(--text-secondary)]">
                  Expertly curated {pillar.title.toLowerCase()} specifically for small, efficient
                  teams.
                </p>
                <div className="mt-auto text-xs font-bold uppercase tracking-widest text-amber-600">
                  Explore Pillar →
                </div>
              </Link>
            ))}
          </div>

          <MidArticleAd />

          {/* ARTICLES GROUPED BY PILLAR */}
          <div className="space-y-16">
            {pillars.map((pillar) => (
              <section key={`section-${pillar.href}`} className="scroll-mt-24">
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">{pillar.title}</h2>
                  <div className="h-px flex-1 bg-[var(--border)]"></div>
                  <Link
                    href={pillar.href}
                    className="text-xs font-bold uppercase tracking-widest text-amber-600 transition-colors hover:text-amber-500"
                  >
                    View All
                  </Link>
                </div>

                <div className="grid gap-4">
                  {pillar.posts.length > 0 ? (
                    pillar.posts.slice(0, 5).map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col justify-between gap-2 border-b border-[var(--border)] pb-4 transition-colors hover:border-amber-500/30 sm:flex-row sm:items-center"
                      >
                        <h4 className="text-lg font-medium text-[var(--text-primary)] transition-colors group-hover:text-amber-500">
                          {post.frontmatter.title}
                        </h4>
                        <span className="whitespace-nowrap text-xs text-[var(--text-muted)]">
                          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm italic text-[var(--text-secondary)]">
                      More editorial insights coming soon.
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* EDITORIAL STANDARDS (RETAINED FROM OLD PAGE BUT CONDENSED) */}
          <section className="mt-24 rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-8">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
              Our Editorial Commitment
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-amber-600">
                  Rigorous Testing
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  We never recommend a tool or workflow we haven't personally tested in live
                  production.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-amber-600">
                  AI Transparency
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Human-reviewed and refined content. We use AI as an assistant, not as the author.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-[var(--border)] pt-8 text-center">
              <p className="text-sm italic text-[var(--text-muted)]">
                "Our integrity is our product. We prioritize transparency above all else."
              </p>
            </div>
          </section>
        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-24">
            <Sidebar />
            <SidebarAd />
          </div>
        </aside>
      </div>
    </div>
  );
}
