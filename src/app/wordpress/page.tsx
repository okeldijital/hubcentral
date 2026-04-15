import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Sidebar } from "@/components/Sidebar";
import { NewsletterForm } from "@/components/NewsletterForm";
import MidArticleAd from "@/components/MidArticleAd";
import SidebarAd from "@/components/SidebarAd";

const wpArticles = [
  {
    title: "Best WordPress Hosting for Small Teams in 2026",
    slug: "best-wordpress-hosting-small-teams-2026",
    summary:
      "A comparison of the top hosting providers that offer performance and reliability without enterprise pricing.",
    category: "Hosting",
  },
  {
    title: "WordPress Speed Optimization in 2026 – What Actually Works for Small Teams",
    slug: "wordpress-speed-optimization-2026-small-teams",
    summary:
      "Skip the complex caching setups. Learn the 20/80 of WordPress performance for better Core Web Vitals.",
    category: "Performance",
  },
  {
    title: "How to Safely Use AI Tools with WordPress in 2026",
    slug: "ai-tools-wordpress-2026-safe-guide",
    summary:
      "Integrating AI into your WordPress workflow without compromising security, speed, or SEO.",
    category: "AI + WP",
  },
  {
    title: "Best Lightweight WordPress Themes for Small Teams in 2026",
    slug: "best-lightweight-wordpress-themes-2026",
    summary:
      'Why "multi-purpose" themes are killing your site speed. Our curated list of fast, lean themes for 2026.',
    category: "Themes",
  },
];

export const metadata: Metadata = {
  title: "Practical WordPress Guides for Small Teams in 2026 | Hub Central",
  description:
    "Practical WordPress guides for small teams in 2026. Honest hosting, speed optimisation, themes, and AI integration advice that actually delivers ROI — no hype, just what works.",
  openGraph: {
    title: "Practical WordPress Guides for Small Teams in 2026 | Hub Central",
    description:
      "Fast, lightweight, and honest guides built for real small teams — no hype, no expensive plugins, just what actually works.",
    url: `${siteMetadata.siteUrl}/wordpress`,
    type: "website",
    images: [
      {
        url: `${siteMetadata.siteUrl}/images/hosting-comparison-2026.png`,
        width: 1200,
        height: 630,
        alt: "WordPress Guides for Small Teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical WordPress Guides for Small Teams in 2026 | Hub Central",
    description:
      "Fast, lightweight, and honest guides built for real small teams — no hype, no expensive plugins, just what actually works.",
    images: [`${siteMetadata.siteUrl}/images/hosting-comparison-2026.png`],
  },
};

export default function WordPressHubPage() {
  const pageUrl = `${siteMetadata.siteUrl}/wordpress`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: "Practical WordPress Guides for Small Teams in 2026",
    description:
      "Fast, lightweight, and honest guides built for real small teams — no hype, no expensive plugins, just what actually works.",
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
        <section className="relative mb-16 mt-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-[#050505] p-8 text-center md:p-16">
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="hero-gradient absolute inset-0 opacity-40"></div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 ring-1 ring-inset ring-amber-500/20">
              WordPress Master Hub
            </span>
            <h1 className="mb-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Practical WordPress Guides for Small Teams in 2026
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-balance text-lg text-amber-100/70 md:text-xl">
              Fast, lightweight, and honest guides built for real small teams — no hype, no
              expensive plugins, just what actually works.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#featured-articles"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black shadow-lg transition-colors hover:bg-gray-100"
              >
                Explore Featured Guides
              </a>
              <Link
                href="/workflows-ai-small-teams-2026"
                className="rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                AI + Workflows Series
              </Link>
            </div>
          </div>
        </section>

        <MidArticleAd />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* MAIN CONTENT */}
          <main className="lg:col-span-8">
            {/* FEATURED ARTICLES SECTION */}
            <section id="featured-articles" className="mb-16">
              <div className="mb-8 flex items-center gap-4">
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
                      <div className="rounded-full bg-[var(--brand-light)] p-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <svg
                          className="h-4 w-4 text-[var(--brand-text)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-tight text-[var(--text-primary)] transition-colors group-hover:text-amber-500">
                      {article.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 text-sm text-[var(--text-secondary)]">
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
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                  All WordPress Articles
                </h2>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>

              <div className="space-y-6">
                {wpArticles.map((article) => (
                  <Link
                    key={`list-${article.slug}`}
                    href={`/blog/${article.slug}`}
                    className="group block border-b border-[var(--border)] pb-6 transition-colors hover:border-amber-500/30"
                  >
                    <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-amber-500">
                      {article.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-[var(--text-secondary)]">
                      {article.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* RELATED GUIDES SECTION */}
            <section className="mb-16 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-8">
              <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">Related Guides</h2>
              <p className="mb-8 text-[var(--text-secondary)]">
                WordPress is just one part of a lean operation. Explore our complete hub pages for
                building efficient workflows for your small team.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/ai-tools"
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all hover:border-amber-500/50 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[var(--text-primary)] group-hover:text-amber-600">
                      AI Tools Hub
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      AI integrations for small teams
                    </span>
                  </div>
                </Link>
                <Link
                  href="/hosting"
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all hover:border-amber-500/50 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[var(--text-primary)] group-hover:text-amber-600">
                      Hosting Hub
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      Hosting comparisons & guides
                    </span>
                  </div>
                </Link>
                <Link
                  href="/guides"
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all hover:border-amber-500/50 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[var(--text-primary)] group-hover:text-amber-600">
                      Guides Hub
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">All guides & tutorials</span>
                  </div>
                </Link>
                <Link
                  href="/workflows-ai-small-teams-2026"
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all hover:border-amber-500/50 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-[var(--text-primary)] group-hover:text-amber-600">
                      AI + Workflows Series
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      Complete workflows masterclass
                    </span>
                  </div>
                </Link>
              </div>
            </section>

            {/* NEWSLETTER CTA */}
            <section className="rounded-3xl bg-amber-500 p-8 text-center text-white shadow-xl shadow-amber-500/20 md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Get the 2026 WordPress Playbook</h2>
              <p className="mx-auto mb-8 max-w-xl text-lg italic text-amber-50">
                "Join 5,000+ small team leads getting weekly no-nonsense guides on WordPress, AI,
                and performance. No hype, just real systems."
              </p>
              <NewsletterForm buttonText="Join the Newsletter" />
              <p className="mt-4 text-xs font-medium text-amber-100/60">
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
