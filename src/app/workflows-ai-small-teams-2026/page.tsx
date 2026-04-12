import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Sidebar } from "@/components/Sidebar";
import { FAQ } from "@/components/MDXComponents";

const articles = [
  {
    title: "Why Most Small Teams Misunderstand AI Automation",
    slug: "why-most-teams-misunderstand-automation-2026",
    summary: "Stop looking for \"one-click\" miracles. Real ROI comes from mapping boring processes first.",
    number: "01"
  },
  {
    title: "The Hidden Cost of \"We'll Figure It Out Later\"",
    slug: "the-hidden-cost-of-well-figure-it-out-later-2026",
    summary: "Documentation debt is the #1 killer of AI efficiency. Here is how to fix it before you automate.",
    number: "02"
  },
  {
    title: "Mapping Your Existing Workflow Before Using AI",
    slug: "mapping-your-existing-workflow-before-using-ai-2026",
    number: "03",
    summary: "A systematic guide to auditing your team's current work before adding any tools."
  },
  {
    title: "When Should You Introduce AI Into a Workflow?",
    slug: "when-should-you-introduce-ai-into-a-workflow-2026",
    number: "04",
    summary: "Not every task needs AI. Learn the \"Red/Yellow/Green\" framework for picking the right moments."
  },
  {
    title: "A Framework for Evaluating AI Tools Before Adoption",
    slug: "framework-for-evaluating-ai-tools-before-adoption-2026",
    number: "05",
    summary: "Evaluate tools based on data privacy, integration API, and team learning curve."
  },
  {
    title: "Best AI Writing Tools for Small Teams in 2026",
    slug: "best-ai-writing-tools-small-teams-2026",
    number: "06",
    summary: "We tested the top AI content generators for workflow integration and quality."
  },
  {
    title: "When AI Makes a Workflow Worse (and How to Pivot)",
    slug: "when-ai-makes-a-workflow-worse-2026",
    number: "07",
    summary: "Real-world examples of AI overhead and how to simplify back to human systems when tools fail."
  },
  {
    title: "AI Integration Checklist for Small Teams in 2026",
    slug: "ai-integration-checklist-for-small-teams-2026",
    number: "08",
    summary: "Your final step-by-step implementation guide to launching a new AI-enhanced system."
  }
];

const faqItems = [
  {
    question: "Is this system suitable for solo founders?",
    answer: "Absolutely. While written for \"small teams,\" the principles of workflow mapping and tool evaluation are even more critical when you are a team of one."
  },
  {
    question: "Do I need specialized technical skills?",
    answer: "No. We focus on \"No-Code\" and \"Low-Code\" solutions that any team lead or operations manager can implement without a developer."
  },
  {
    question: "How long does it take to implement this playbook?",
    answer: "If you follow one article per week, you'll have a fully audited and AI-enhanced workflow in 8 weeks. However, many teams sprint through it in 14 days."
  },
  {
    question: "What is the cost of the recommended tools?",
    answer: "Most workflows in this series can be started for free or under $50/month. We prioritize tools with high ROI over expensive enterprise suites."
  },
  {
    question: "Can I use these techniques for service-based businesses?",
    answer: "Yes, these workflows are specifically designed for service businesses, agencies, and digital product teams where knowledge work is the bottleneck."
  }
];

export const metadata: Metadata = {
  title: "AI Workflows for Small Teams in 2026 – The Complete Practical Playbook",
  description: "Practical AI & Workflow Guides for Small Teams – No Hype, Real Systems. 8-article mastermind series on implementing AI the right way.",
  openGraph: {
    title: "AI Workflows for Small Teams in 2026 – The Complete Practical Playbook",
    description: "Practical AI & Workflow Guides for Small Teams – No Hype, Real Systems.",
    url: `${siteMetadata.siteUrl}/workflows-ai-small-teams-2026`,
    type: "article",
    images: [{
      url: `${siteMetadata.siteUrl}/images/why-most-teams-misunderstand-automation-2026.jpg`,
      width: 1200,
      height: 630,
      alt: "AI Workflows for Small Teams"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflows for Small Teams in 2026 – The Complete Practical Playbook",
    description: "Practical AI & Workflow Guides for Small Teams – No Hype, Real Systems.",
    images: [`${siteMetadata.siteUrl}/images/why-most-teams-misunderstand-automation-2026.jpg`],
  }
};

export default function PillarPage() {
  const pageUrl = `${siteMetadata.siteUrl}/workflows-ai-small-teams-2026`;
  
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Workflows for Small Teams in 2026 – The Complete Practical Playbook",
    description: "Practical AI & Workflow Guides for Small Teams – No Hype, Real Systems. 8-article mastermind series on implementing AI the right way.",
    image: `${siteMetadata.siteUrl}/images/why-most-teams-misunderstand-automation-2026.jpg`,
    datePublished: "2026-04-11T00:00:00Z",
    dateModified: "2026-04-11T00:00:00Z",
    author: {
      "@type": "Organization",
      name: "Hub Central Team",
    },
    publisher: {
      "@type": "Organization",
      name: siteMetadata.title.default,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.siteUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb pathname="/workflows-ai-small-teams-2026" />
        
        {/* HERO SECTION */}
        <section className="mt-8 mb-16 overflow-hidden rounded-3xl border border-[var(--border)] bg-[#050505] relative p-8 md:p-16 text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 hero-gradient opacity-40"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
                <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-500 ring-1 ring-inset ring-amber-500/20">
                   Pillar Masterclass
                </span>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
                    Practical AI & Workflow Guides for Small Teams – No Hype, Real Systems
                </h1>
                <p className="mb-10 text-lg md:text-xl text-amber-100/70 text-balance max-w-2xl mx-auto">
                    The Complete 2026 Playbook for lean teams who want to automate without the overhead.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                        href={`/blog/${articles[0].slug}`}
                        className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Start Here: Article #1
                    </Link>
                    <a 
                        href="#guide-list"
                        className="rounded-full bg-white/10 px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                    >
                        Browse all 8 Guides
                    </a>
                </div>
            </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* MAIN CONTENT */}
          <article className="lg:col-span-8">
            <div className="prose prose-zinc max-w-none dark:prose-invert mb-16">
              <p className="text-xl leading-relaxed text-[var(--text-secondary)] font-medium">
                Most teams rush to adopt AI tools before they understand their own foundations. 
                They add complex automation to broken processes, only to find themselves with 
                more "documentation debt" and less actual output. In 2026, the competitive 
                advantage doesn't belong to the team with the most bots—it belongs to the 
                team with the cleanest systems. This 8-article series serves as your complete 
                practical playbook. We start by stripping away the hype, mapping your existing 
                human workflows, and only then layering in AI where it provides a measurable 
                return on effort. Whether you are a team of 3 or 30, these systems will 
                give you back hours of deep work every single week.
              </p>
            </div>

            {/* ARTICLE GRID */}
            <div id="guide-list" className="space-y-12">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-[var(--text-primary)]">The 8-Step System</h2>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {articles.map((article) => (
                  <Link 
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="card-hover group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6"
                  >
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-2xl font-black text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
                            {article.number}
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
                    <p className="mb-6 text-sm text-[var(--text-secondary)] line-clamp-2">
                        {article.summary}
                    </p>
                    <div className="mt-auto text-xs font-bold uppercase tracking-widest text-amber-600">
                        Read Guide →
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ SECTION */}
            <div className="mt-24">
                <FAQ items={faqItems} />
            </div>

            {/* CALL TO ACTION */}
            <div className="mt-20 rounded-3xl bg-amber-500 p-8 md:p-12 text-center text-white shadow-xl shadow-amber-500/20">
                <h2 className="mb-4 text-3xl font-bold">Ready to start with Article #1?</h2>
                <p className="mb-8 text-amber-50 text-lg max-w-xl mx-auto italic">
                    "Why Most Small Teams Misunderstand AI Automation" is the foundational lesson 
                    most teams skip. Start here to save yourself weeks of wasted effort.
                </p>
                <Link 
                    href={`/blog/${articles[0].slug}`}
                    className="inline-block rounded-full bg-black px-10 py-5 text-base font-bold text-white hover:bg-gray-800 transition-transform active:scale-95 shadow-lg"
                >
                    Start the Series Now
                </Link>
            </div>
          </article>

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
