import { Metadata } from "next";
import Link from "next/link";
import { siteMetadata } from "@/lib/siteMetadata";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Sidebar } from "@/components/Sidebar";
import { NewsletterForm } from "@/components/NewsletterForm";
import MidArticleAd from "@/components/MidArticleAd";
import SidebarAd from "@/components/SidebarAd";

export const metadata: Metadata = {
  title: "About Okel Dijital - Hub Central Founder",
  description:
    "About Hub Central — practical AI, WordPress, and workflow guides for small teams. Founded by a web developer with 8 years helping small businesses make the most of modern technology.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <Breadcrumb pathname="/about" />

      <div className="grid gap-10 lg:grid-cols-12">
        <main className="lg:col-span-8">
          <div className="prose prose-zinc dark:prose-invert mx-auto max-w-none">
            <header className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                About Okel Dijital
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">Founder, Hub Central</p>
            </header>

            <figure className="mb-12">
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full bg-zinc-100 shadow-xl ring-4 ring-amber-500/10 dark:bg-zinc-800">
                <img
                  src="/images/hub-central-founder.jpg"
                  alt="Okel Dijital - Founder of Hub Central"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Okel Dijital
              </figcaption>
            </figure>

            <div className="mx-auto max-w-2xl">
              <p className="mb-12 text-center text-xl italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                "I’m a web developer and systems strategist with 8 years of hands-on experience
                helping small businesses get the most out of technology. My passion lies at the
                intersection of AI, web design, intelligent workflows, and modern tech — turning
                complex tools into simple, repeatable systems that actually save time and deliver
                real results."
              </p>

              <section className="mb-12">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  <span className="h-8 w-1 rounded-full bg-amber-500"></span>
                  Mission & Vision
                </h2>
                <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Hub Central was founded to cut through the AI hype and deliver practical, no-fluff
                  guidance for small teams in 2026.
                </p>
                <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  My mission is simple: help small businesses leverage AI, WordPress, and smart
                  workflows without wasting time or money on trends that don't deliver ROI. Every
                  guide here comes from real-world experience — what I've built, tested, and refined
                  while working directly with small teams.
                </p>
              </section>

              <MidArticleAd />

              <section className="mb-12">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  <span className="h-8 w-1 rounded-full bg-amber-500"></span>
                  Expertise & Background
                </h2>
                <ul className="space-y-4">
                  {[
                    "AI-powered workflows that actually work for small teams",
                    "WordPress performance and hosting optimisation",
                    "Building clean, fast, maintainable websites",
                    "Systems thinking and practical digital transformation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-12 rounded-2xl border border-amber-100 bg-amber-50 p-8 dark:border-amber-900/20 dark:bg-amber-900/10">
                <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Why Trust Hub Central?
                </h2>
                <ul className="space-y-4">
                  {[
                    "No hype, just what actually works",
                    "Every recommendation is based on real testing and hands-on experience with small businesses",
                    "Content is regularly reviewed and updated for 2026 tools and realities",
                    "Focused exclusively on strategies that deliver measurable results with limited time and budget",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <footer className="mt-16 border-t border-zinc-200 pt-8 text-center dark:border-zinc-800">
                <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  If you run a small team and want clearer systems, faster websites, and smarter use
                  of AI — you're in the right place.
                </p>
              </footer>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <Link
                  href="/wordpress"
                  className="card-hover group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6"
                >
                  <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-amber-500">
                    WordPress Guides
                  </h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">
                    Expert WordPress optimization, theme selection, and security guides.
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                    Explore →
                  </span>
                </Link>
                <Link
                  href="/hosting"
                  className="card-hover group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6"
                >
                  <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-amber-500">
                    Hosting Guides
                  </h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">
                    Honest hosting recommendations and speed optimization guides.
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                    Explore →
                  </span>
                </Link>
                <Link
                  href="/ai-tools"
                  className="card-hover group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6"
                >
                  <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-amber-500">
                    AI Tools Hub
                  </h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">
                    Practical AI tools that actually deliver results for small teams.
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                    Explore →
                  </span>
                </Link>
                <Link
                  href="/guides"
                  className="card-hover group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] p-6"
                >
                  <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-amber-500">
                    All Guides
                  </h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">
                    Browse all our practical guides and resources.
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                    Explore →
                  </span>
                </Link>
              </div>

              <section className="mt-16 rounded-3xl bg-amber-500 p-8 text-center text-white shadow-xl shadow-amber-500/20 md:p-12">
                <h2 className="mb-4 text-3xl font-bold">Get Weekly No-Hype Guides</h2>
                <p className="mx-auto mb-8 max-w-xl text-lg italic text-amber-50">
                  "Join thousands of small team leads getting practical guides on AI, WordPress, and
                  workflows. No hype, just what actually works."
                </p>
                <NewsletterForm buttonText="Subscribe Free" />
                <p className="mt-4 text-xs font-medium text-amber-100/60">
                  Free guides. Weekly delivery. Unsubscribe anytime.
                </p>
              </section>
            </div>
          </div>
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
