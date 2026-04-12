import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Sidebar } from "@/components/Sidebar";
import { NewsletterForm } from "@/components/NewsletterForm";

const aiArticles = [
  {
    title: "A Framework for Evaluating AI Tools Before Adoption",
    slug: "framework-for-evaluating-ai-tools-before-adoption-2026",
    summary: "Most teams evaluate AI tools by features. The right question is whether the tool actually fits your workflow. This four-question framework prevents tool proliferation and wasted spend.",
    category: "Evaluation"
  },
  {
    title: "A Step-by-Step AI Integration Checklist for Small Teams",
    slug: "ai-integration-checklist-for-small-teams-2026",
    summary: "Your final step-by-step implementation guide to launching a new AI-enhanced system. From data privacy to team feedback loops.",
    category: "Integration"
  },
  {
    title: "When Should You Introduce AI Into a Workflow?",
    slug: "when-should-you-introduce-ai-into-a-workflow-2026",
    summary: "Not every task needs AI. Learn the \"Red/Yellow/Green\" framework for picking the right moments to automate.",
    category: "Strategy"
  },
  {
    title: "When AI Makes a Workflow Worse",
    slug: "when-ai-makes-a-workflow-worse-2026",
    summary: "Real-world examples of AI overhead and how to simplify back to human systems when tools fail or over-complicate things.",
    category: "Pitfalls"
  },
  {
    title: "How to Safely Use AI Tools with WordPress in 2026",
    slug: "ai-tools-wordpress-2026-safe-guide",
    summary: "Integrating AI into your WordPress workflow without compromising security, speed, or SEO.",
    category: "AI + WordPress"
  }
];

export const metadata: Metadata = {
  title: "Practical AI Tools for Small Teams in 2026 | Hub Central",
  description: "Clear, no-hype guides on how to safely evaluate, integrate, and use AI tools in your workflows and WordPress sites.",
  openGraph: {
    title: "Practical AI Tools for Small Teams in 2026 | Hub Central",
    description: "Clear, no-hype guides on how to safely evaluate, integrate, and use AI tools in your workflows and WordPress sites.",
    url: `${siteMetadata.siteUrl}/ai-tools`,
    type: "website",
    images: [{
      url: `${siteMetadata.siteUrl}/images/ai-tools-2026.jpg`,
      width: 1200,
      height: 630,
      alt: "AI Tools for Small Teams"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical AI Tools for Small Teams in 2026 | Hub Central",
    description: "Clear, no-hype guides on how to safely evaluate, integrate, and use AI tools in your workflows.",
    images: [`${siteMetadata.siteUrl}/images/ai-tools-2026.jpg`],
  }
};

export default function AIToolsHubPage() {
  const pageUrl = `${siteMetadata.siteUrl}/ai-tools`;
  
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: "Practical AI Tools for Small Teams in 2026",
    description: "Clear, no-hype guides on how to safely evaluate, integrate, and use AI tools in your workflows.",
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
      itemListElement: aiArticles.map((article, index) => ({
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
        <Breadcrumb pathname="/ai-tools" />
        
        {/* HERO SECTION */}
        <section className="mt-8 mb-16 overflow-hidden rounded-3xl border border-[var(--border)] bg-[#050505] relative p-8 md:p-16 text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 hero-gradient opacity-40"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
                <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 ring-1 ring-inset ring-amber-500/20">
                   AI Strategy Hub
                </span>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
                    Practical AI Tools for Small Teams in 2026
                </h1>
                <p className="mb-10 text-lg md:text-xl text-amber-100/70 text-balance max-w-2xl mx-auto">
                    Clear, no-hype guides on how to safely evaluate, integrate, and use AI tools in your workflows and WordPress sites — without breaking things or losing control.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a 
                        href="#ai-guides"
                        className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Explore AI Guides
                    </a>
                    <Link 
                        href="/workflows-ai-small-teams-2026"
                        className="rounded-full bg-white/10 px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                    >
                        Workflows Foundation
                    </Link>
                </div>
            </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* MAIN CONTENT */}
          <main className="lg:col-span-8">
            
            {/* FEATURED ARTICLES SECTION */}
            <section id="ai-guides" className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">Featured AI Articles</h2>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {aiArticles.map((article) => (
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

            {/* ALL ARTICLES GRID/LIST SECTION */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">All AI Tools Articles</h2>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {aiArticles.map((article) => (
                  <Link 
                    key={`list-${article.slug}`}
                    href={`/blog/${article.slug}`}
                    className="group block rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 hover:border-amber-500/30 transition-colors"
                  >
                    <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs line-clamp-2">
                      {article.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* RELATED WORKFLOWS SECTION */}
            <section className="mb-16 p-8 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]">
              <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">The Workflow Foundation</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Strong workflows are the foundation for using AI tools effectively. Tools improve steps, 
                not goals. Map your processes before you automate them to avoid wasted overhead.
              </p>
              <Link 
                href="/workflows-ai-small-teams-2026"
                className="inline-flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Explore the Workflows Masterclass
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </section>

            {/* NEWSLETTER CTA */}
            <section className="rounded-3xl bg-amber-500 p-8 md:p-12 text-center text-white shadow-xl shadow-amber-500/20">
                <h2 className="mb-4 text-3xl font-bold">Safely Master AI in 2026</h2>
                <p className="mb-8 text-amber-50 text-lg max-w-xl mx-auto italic">
                    "Get our weekly no-nonsense guides on AI evaluation, safe integration, and team workflows. No hype, just real systems."
                </p>
                <NewsletterForm buttonText="Join Now" />
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
