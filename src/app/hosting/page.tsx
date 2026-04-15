import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Sidebar } from "@/components/Sidebar";
import { NewsletterForm } from "@/components/NewsletterForm";
import MidArticleAd from "@/components/MidArticleAd";
import SidebarAd from "@/components/SidebarAd";

const hostingArticles = [
  {
    title: "Best WordPress Hosting for Small Teams in 2026",
    slug: "best-wordpress-hosting-small-teams-2026",
    summary:
      "Stop overpaying for features you don't need. We compare the top providers that actually deliver for small but growing teams.",
    category: "WordPress",
  },
  {
    title: "Best Budget WordPress Hosting for Small Teams in 2026",
    slug: "best-budget-wordpress-hosting-2026",
    summary:
      "Quality hosting doesn't have to break the bank. These budget-friendly options provide solid performance without hidden traps.",
    category: "Budget",
  },
  {
    title: "How to Choose the Right WordPress Hosting Plan for Your Small Team in 2026",
    slug: "how-to-choose-wordpress-hosting-plan-2026",
    summary:
      "Don't get tricked by 'unlimited' marketing. Learn exactly how many resources your team really needs for a fast site.",
    category: "Buying Guide",
  },
  {
    title: "WordPress Hosting Speed Comparison & Real Benchmarks 2026",
    slug: "wordpress-hosting-speed-comparison-benchmarks-2026",
    summary:
      "Real-world tests on TTFB and global response times. See which hosts actually keep their speed promises in 2026.",
    category: "Performance",
  },
  {
    title: "Best Hosting for WooCommerce Small Teams in 2026",
    slug: "best-woocommerce-hosting-small-teams-2026",
    summary:
      "WooCommerce requires more power than a standard blog. We've tested the best environments for high-traffic stores.",
    category: "Ecommerce",
  },
  {
    title: "Best Professional Email Hosting for Small Businesses in 2026",
    slug: "best-professional-email-hosting-small-business-2026",
    summary:
      "Keep your communications separate and secure. Why dedicated email hosting is the better choice for small teams.",
    category: "Email",
  },
];

export const metadata: Metadata = {
  title: "Practical Hosting Guides for Small Teams in 2026 | Hub Central",
  description:
    "Practical hosting guides for small teams in 2026. Honest WordPress hosting, WooCommerce, speed benchmarks, and professional email advice — no hype, no renewal traps, just what actually works.",
  openGraph: {
    title: "Practical Hosting Guides for Small Teams in 2026 | Hub Central",
    description:
      "Fast, reliable, and honest guides for WordPress, WooCommerce, and professional email hosting — no hype, no hidden renewal traps.",
    url: `${siteMetadata.siteUrl}/hosting`,
    type: "website",
    images: [
      {
        url: `${siteMetadata.siteUrl}/images/hosting-comparison-2026.png`,
        width: 1200,
        height: 630,
        alt: "Hosting Guides for Small Teams 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical Hosting Guides for Small Teams in 2026 | Hub Central",
    description:
      "Fast, reliable, and honest guides for WordPress, WooCommerce, and professional email hosting — no hype, no hidden renewal traps.",
    images: [`${siteMetadata.siteUrl}/images/hosting-comparison-2026.png`],
  },
};

export default function HostingHubPage() {
  const pageUrl = `${siteMetadata.siteUrl}/hosting`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: "Practical Hosting Guides for Small Teams in 2026",
    description:
      "Fast, reliable, and honest guides for WordPress, WooCommerce, and professional email hosting — no hype, no hidden renewal traps.",
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
      itemListElement: hostingArticles.map((article, index) => ({
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
        <Breadcrumb pathname="/hosting" />

        {/* HERO SECTION */}
        <section className="relative mb-16 mt-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-[#050505] p-8 text-center md:p-16">
          {/* Background Effects */}
          <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="hero-gradient absolute inset-0 opacity-40"></div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 ring-1 ring-inset ring-amber-500/20">
              Hosting Pillar Hub
            </span>
            <h1 className="mb-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Practical Hosting Guides for Small Teams in 2026
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-balance text-lg text-amber-100/70 md:text-xl">
              Fast, reliable, and honest guides for WordPress, WooCommerce, and professional email
              hosting — no hype, no hidden renewal traps, just what actually works for small teams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#featured-articles"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black shadow-lg transition-colors hover:bg-gray-100"
              >
                Explore Recommended Hosts
              </a>
              <Link
                href="/wordpress"
                className="rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                WordPress Pillar
              </Link>
            </div>
          </div>
        </section>

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
                {hostingArticles.map((article) => (
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

            <MidArticleAd />

            {/* ALL ARTICLES LIST SECTION */}
            <section className="mb-16">
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                  All Hosting Articles
                </h2>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>

              <div className="space-y-6">
                {hostingArticles.map((article) => (
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
              <h2 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">Related Guides</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">
                    WordPress Pillar
                  </h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">
                    Expert guides on optimization, security, and theme selection to pair with your
                    perfect host.
                  </p>
                  <Link
                    href="/wordpress"
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 transition-colors hover:text-amber-700"
                  >
                    Explore WordPress Hub
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">
                    AI Tools Hub
                  </h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">
                    Modernize your workflow with AI tools that integrate seamlessly with your web
                    infrastructure.
                  </p>
                  <Link
                    href="/ai-tools"
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 transition-colors hover:text-amber-700"
                  >
                    Explore AI Tools Hub
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">
                    How-To Guides
                  </h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">
                    Step-by-step tutorials on hosting setup, migrations, and server optimization.
                  </p>
                  <Link
                    href="/guides"
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 transition-colors hover:text-amber-700"
                  >
                    Explore Guides
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">Editorial</h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">
                    Independent analysis and honest takes on the hosting industry.
                  </p>
                  <Link
                    href="/editorial"
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 transition-colors hover:text-amber-700"
                  >
                    Explore Editorial
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* NEWSLETTER CTA */}
            <section className="rounded-3xl bg-amber-500 p-8 text-center text-white shadow-xl shadow-amber-500/20 md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Get the 2026 Hosting Insider PDF</h2>
              <p className="mx-auto mb-8 max-w-xl text-lg italic text-amber-50">
                "Join 5,000+ small team leads getting weekly no-nonsense guides on performance,
                hosting, and AI. No hype, just real benchmarks."
              </p>
              <NewsletterForm buttonText="Subscribe Free" />
              <p className="mt-4 text-xs font-medium text-amber-100/60">
                Free guides. Weekly delivery. Unsubscribe anytime.
              </p>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <Sidebar />
              <SidebarAd />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
