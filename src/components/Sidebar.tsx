import { getAllPosts } from "@/lib/mdx";

export function PopularPosts() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
        <svg className="h-4 w-4 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        Trending Now
      </h3>
      <ul className="space-y-4">
        {posts.map((post, i) => (
          <li key={i} className="group">
            <a
              href={`/blog/${post.slug}`}
              className="block flex gap-3"
            >
              <div className="font-bold text-[var(--text-faint)] text-lg w-4 shrink-0 text-right">
                {i + 1}
              </div>
              <div>
                <span className="block text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--brand-text)] transition-colors leading-tight mb-1">
                  {post.frontmatter.title}
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  {post.readingTime} min read
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

import { NewsletterForm } from "./NewsletterForm";

export function Newsletter() {
  return (
    <aside className="rounded-xl border border-[var(--brand-border)] bg-[var(--brand-light)] p-5 relative overflow-hidden">
      <div className="absolute -right-4 -top-4 opacity-10 text-[var(--brand)]">
        <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
      </div>
      <h3 className="mb-2 text-base font-bold text-[var(--brand-text)] relative">
        Small Team Intel
      </h3>
      <p className="mb-4 text-xs text-[var(--text-secondary)] relative leading-relaxed">
        Get practical guides delivered weekly. No AI-generated spam, just workflows that actually move the needle.
      </p>
      <div className="relative">
        <NewsletterForm variant="inline" />
      </div>
    </aside>
  );
}

export function RecommendedTools() {
  const tools = [
    { name: "Hostinger", desc: "Best budget WordPress hosting", url: "https://hostinger.com", badge: "Hosting" },
    { name: "ElevenLabs", desc: "Premium AI voice generation", url: "https://elevenlabs.io", badge: "AI Audio" },
    { name: "Notion AI", desc: "Knowledge management", url: "https://notion.so", badge: "Workspace" },
  ];

  return (
    <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 flex items-center gap-2">
        <svg className="h-4 w-4 text-[var(--brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        Recommended AI Tools
      </h3>
      <ul className="space-y-4">
        {tools.map((tool, i) => (
          <li key={i}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener sponsored"
              className="group block rounded-lg border border-[var(--border-subtle)] bg-[var(--background)] p-3 hover:border-[var(--brand)] hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-text)]">
                  {tool.name}
                </span>
                <span className="text-[10px] font-semibold bg-[var(--surface-2)] text-[var(--text-muted)] px-2 py-0.5 rounded-full">
                  {tool.badge}
                </span>
              </div>
              <span className="block text-xs text-[var(--text-secondary)]">{tool.desc}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[10px] text-[var(--text-muted)] text-center italic">
        Links may be affiliate links.
      </p>
    </aside>
  );
}

export function SidebarAd() {
  return (
    <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 text-center">
      <span className="block mb-2 text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
        Advertisement
      </span>
      <div className="mx-auto h-[250px] w-full max-w-[300px] bg-[var(--surface-2)] rounded flex flex-col items-center justify-center opacity-50 border border-dashed border-[var(--border)]">
        <svg className="h-8 w-8 text-[var(--text-faint)] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
        <p className="text-[var(--text-muted)] text-sm font-medium">
          AdSense 300x250
        </p>
      </div>
    </aside>
  );
}

export function Sidebar() {
  return (
    <div className="space-y-8">
      <Newsletter />
      <PopularPosts />
      <SidebarAd />
      <RecommendedTools />
    </div>
  );
}