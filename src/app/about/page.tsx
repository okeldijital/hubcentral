import { Metadata } from "next";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "About Okel Dijital - Hub Central Founder",
  description: "Meet Okel Dijital, founder of Hub Central and expert in AI-powered workflows for small teams. Learn about his mission to provide practical, no-hype guidance for 2026.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <div className="prose prose-zinc max-w-none dark:prose-invert mx-auto">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            About Okel Dijital
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Founder, Hub Central
          </p>
        </header>

        <figure className="mb-12">
          <div className="relative aspect-square w-48 mx-auto overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800 ring-4 ring-amber-500/10 shadow-xl">
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

        <div className="max-w-2xl mx-auto">
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 mb-12 text-center italic">
            "I’m a web developer and systems strategist with 8 years of hands-on experience helping small businesses get the most out of technology. My passion lies at the intersection of AI, web design, intelligent workflows, and modern tech — turning complex tools into simple, repeatable systems that actually save time and deliver real results."
          </p>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
              <span className="h-8 w-1 bg-amber-500 rounded-full"></span>
              Mission & Vision
            </h2>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Hub Central was founded to cut through the AI hype and deliver practical, no-fluff guidance for small teams in 2026.
            </p>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My mission is simple: help small businesses leverage AI, WordPress, and smart workflows without wasting time or money on trends that don’t deliver ROI. Every guide here comes from real-world experience — what I’ve built, tested, and refined while working directly with small teams.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
              <span className="h-8 w-1 bg-amber-500 rounded-full"></span>
              Expertise & Background
            </h2>
            <ul className="space-y-4">
              {[
                "AI-powered workflows that actually work for small teams",
                "WordPress performance and hosting optimisation",
                "Building clean, fast, maintainable websites",
                "Systems thinking and practical digital transformation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12 bg-amber-50 dark:bg-amber-900/10 p-8 rounded-2xl border border-amber-100 dark:border-amber-900/20">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Why Trust Hub Central?
            </h2>
            <ul className="space-y-4">
              {[
                "No hype, just what actually works",
                "Every recommendation is based on real testing and hands-on experience with small businesses",
                "Content is regularly reviewed and updated for 2026 tools and realities",
                "Focused exclusively on strategies that deliver measurable results with limited time and budget"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
              If you run a small team and want clearer systems, faster websites, and smarter use of AI — you’re in the right place.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}