import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

/**
 * Shared building blocks for the Contact, Privacy and Terms pages.
 * Placeholder text is deliberately obvious so nothing unapproved can pass as final copy.
 */

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-dashed border-[var(--brand-border)] bg-[var(--brand-light)] px-2 py-0.5 font-mono text-sm text-[var(--brand-text)]">
      [PLACEHOLDER: {children}]
    </span>
  );
}

export function DraftNotice() {
  return (
    <div
      role="note"
      className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-center dark:border-amber-800/60 dark:bg-amber-900/10"
    >
      <p className="m-0 text-sm font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
        Draft – pending approval
      </p>
      <p className="m-0 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        This page is a draft. Its content has not yet been approved and is not final.
      </p>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        <span className="h-8 w-1 rounded-full bg-amber-500"></span>
        {title}
      </h2>
      <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">{children}</p>
    </section>
  );
}

export function LegalPageShell({
  pathname,
  title,
  intro,
  draft = false,
  children,
}: {
  pathname: string;
  title: string;
  intro?: ReactNode;
  draft?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <Breadcrumb pathname={pathname} />
      <div className="prose prose-zinc dark:prose-invert mx-auto max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            {title}
          </h1>
          {intro && <p className="text-lg text-zinc-600 dark:text-zinc-400">{intro}</p>}
        </header>
        {draft && <DraftNotice />}
        {children}
      </div>
    </div>
  );
}
