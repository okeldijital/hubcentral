import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Sidebar } from "@/components/Sidebar";
import { NewsletterForm } from "@/components/NewsletterForm";

const wpArticles = [
  {
    title: "Best WordPress Hosting for Small Teams in 2026",
    slug: "best-wordpress-hosting-small-teams-2026",
    summary: "A comparison of the top hosting providers that offer performance and reliability without enterprise pricing.",
    category: "Hosting"
  },
  {
    title: "WordPress Speed Optimization in 2026 – What Actually Works for Small Teams",
    slug: "wordpress-speed-optimization-2026-small-teams",
    summary: "Skip the complex caching setups. Learn the 20/80 of WordPress performance for better Core Web Vitals.",
    category: "Performance"
  },
  {
    title: "How to Safely Use AI Tools with WordPress in 2026",
    slug: "ai-tools-wordpress-2026-safe-guide",
    summary: "Integrating AI into your WordPress workflow without compromising security, speed, or SEO.",
    category: "AI + WP"
  },
  {
    title: "Best Lightweight WordPress Themes for Small Teams in 2026",
    slug: "best-lightweight-wordpress-themes-2026",
    summary: "Why \"multi-purpose\" themes are killing your site speed. Our curated list of fast, lean themes for 2026.",
    category: "Themes"
  }
];

export const metadata: Metadata = {
  title: "Practical WordPress Guides for Small Teams in 2026 | Hub Central",
  description: "Fast, lightweight, and honest guides built for real small teams — no hype, no expensive plugins, just what actually works.",
  openGraph: {
    title: "Practical WordPress Guides for Small Teams in 2026 | Hub Central",
    description: "Fast, lightweight, and honest guides built for real small teams — no hype, no expensive plugins, just what actually works.",
    url: `${siteMetadata.siteUrl}/wordpress`,
    type: "website",
    images: [{
      url: `${siteMetadata.siteUrl}/images/hosting-comparison-2026.png`,
      width: 1200,
      height: 630,
      alt: "WordPress Guides for Small Teams"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical WordPress Guides for Small Teams in 2026 | Hub Central",
    description: "Fast, lightweight, and honest guides built for real small teams — no hype, no expensive plugins, just what actually works.",
    images: [`${siteMetadata.siteUrl}/images/hosting-comparison-2026.png`],
  }
};

export default function WordPressHubPage() {
  const pageUrl = `${siteMetadata.siteUrl}/wordpress`;
  
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: "Practical WordPress Guides for Small Teams in 2026",
    description: "Fast, lightweight, and honest guides built for real small teams — no hype, no expensive plugins, just what actually works.",
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: siteMetadata.title.default,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.siteUrl}/favicon.ico`,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: wpArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteMetadata.siteUrl}/blog/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb pathname="/wordpress" />
        
        {/* HERO SECTION */}
        <section className="mt-8 mb-16 overflow-hidden rounded-3xl border border-[var(--border)] bg-[#050505] relative p-8 md:p-16 text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 hero-gradient opacity-40"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
                <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 ring-1 ring-inset ring-amber-500/20">
                   WordPress Master Hub
                </span>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
                    Practical WordPress Guides for Small Teams in 2026
                </h1>
                <p className="mb-10 text-lg md:text-xl text-amber-100/70 text-balance max-w-2xl mx-auto">
                    Fast, lightweight, and honest guides built for real small teams — no hype, no expensive plugins, just what actually works.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a 
                        href="#featured-articles"
                        className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Explore Featured Guides
                    </a>
                    <Link 
                        href="/workflows-ai-small-teams-2026"
                        className="rounded-full bg-white/10 px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                    >
                        AI + Workflows Series
                    </Link>
                </div>
            </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* MAIN CONTENT */}
          <main className="lg:col-span-8">
            
            {/* FEATURED ARTICLES SECTION */}
            <section id="featured-articles" className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">Featured Articles</h2>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {wpArticles.map((article) => (
                  <Link 
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="card-hover group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6"
                  >
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                            {article.category}
                        </span>
                        <div className="rounded-full bg-[var(--brand-light)] p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="h-4 w-4 text-[var(--brand-text)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors leading-tight">
                        {article.title}
                    </h3>
                    <p className="mb-6 text-sm text-[var(--text-secondary)] line-clamp-3">
                        {article.summary}
                    </p>
                    <div className="mt-auto text-xs font-bold uppercase tracking-widest text-amber-600">
                        Read Guide →
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ALL ARTICLES LIST SECTION */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">All WordPress Articles</h2>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>
              
              <div className="space-y-6">
                {wpArticles.map((article) => (
                  <Link 
                    key={`list-${article.slug}`}
                    href={`/blog/${article.slug}`}
                    className="group block border-b border-[var(--border)] pb-6 hover:border-amber-500/30 transition-colors"
                  >
                    <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm line-clamp-2">
                      {article.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* RELATED GUIDES SECTION */}
            <section className="mb-16 p-8 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]">
              <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Related Guides</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                WordPress is just one part of a lean operation. Explore our complete guide on building 
                AI-driven workflows for your team to maximize efficiency.
              </p>
              <Link 
                href="/workflows-ai-small-teams-2026"
                className="inline-flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                View the AI + Workflows Masterclass
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </section>

            {/* NEWSLETTER CTA */}
            <section className="rounded-3xl bg-amber-500 p-8 md:p-12 text-center text-white shadow-xl shadow-amber-500/20">
                <h2 className="mb-4 text-3xl font-bold">Get the 2026 WordPress Playbook</h2>
                <p className="mb-8 text-amber-50 text-lg max-w-xl mx-auto italic">
                    "Join 5,000+ small team leads getting weekly no-nonsense guides on WordPress, AI, and performance. No hype, just real systems."
                </p>
                <NewsletterForm buttonText="Join the Newsletter" />
                <p className="mt-4 text-xs text-amber-100/60 font-medium">
                   Free guides. Weekly delivery. Unsubscribe anytime.
                </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
