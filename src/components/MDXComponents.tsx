import Image from "next/image";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = {
    info: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800 text-blue-900 dark:text-blue-200",
    warning: "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-amber-900 dark:text-amber-200",
    success: "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800 text-green-900 dark:text-green-200",
    error: "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800 text-red-900 dark:text-red-200",
  };

  const icons = {
    info: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    success: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    error: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className={cn("my-6 rounded-xl border p-5", styles[type])}>
      <div className="flex items-start gap-4">
        <span className={cn("mt-1 shrink-0")}>
          {icons[type]}
        </span>
        <div className="flex-1">
          {title && (
            <p className="mb-1 font-bold text-current">
              {title}
            </p>
          )}
          <div className="text-sm prose-p:my-0 text-current opacity-90">{children}</div>
        </div>
      </div>
    </div>
  );
}

interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
}

export function Table({ headers, rows, caption }: TableProps) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[var(--border)] shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          {caption && (
            <caption className="bg-[var(--surface-1)] p-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border)]">
              {caption}
            </caption>
          )}
          <thead className="bg-[var(--surface-1)] text-[var(--text-primary)]">
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="border-b border-[var(--border)] px-4 py-3 text-left font-bold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)] bg-[var(--background)]">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-[var(--surface-1)]/50 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-[var(--text-secondary)]">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  priority?: boolean;
}

export function MDXImage({ src, alt, width = 800, height = 450, caption, priority = false }: MDXImageProps) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl bg-[var(--surface-2)] shadow-sm border border-[var(--border)]">
      <div className="relative aspect-video w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="bg-[var(--surface-1)] p-3 text-center text-xs font-medium text-[var(--text-muted)] border-t border-[var(--border)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="my-10">
        <div role="heading" aria-level={2} className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
          Frequently Asked Questions
        </div>
        <div className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface-1)] overflow-hidden">
          {items.map((item, i) => (
            <details
              key={i}
              className="group p-5 summary-marker-hide"
            >
              <summary className="flex cursor-pointer items-center justify-between font-bold text-[var(--text-primary)] outline-none list-none">
                <span>{item.question}</span>
                <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-[var(--brand)]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed prose-p:my-0">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}

export function Checklist({ items = [] }: { items?: string[] }) {
  return (
    <div className="my-8 rounded-xl border border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-900/10 p-6">
      <div className="mb-4 text-sm font-bold uppercase tracking-wider text-green-800 dark:text-green-500">
        Action Checklist
      </div>
      <ul className="space-y-3 m-0 p-0 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-green-900 dark:text-green-100 p-0 m-0 leading-relaxed">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300">
             <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
             </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AffiliateBox({ title, desc, url, cta = "Learn More", price }: { title: string; desc: string; url: string; cta?: string; price?: string }) {
  return (
    <div className="my-8 flex flex-col sm:flex-row items-center gap-6 rounded-xl border-2 border-[var(--brand)] bg-[var(--brand-light)] p-6 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-[var(--brand)] text-[var(--background)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-bl-lg">
        Recommended
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)] m-0">{title}</h3>
        <p className="mb-0 text-sm text-[var(--text-secondary)] m-0">{desc}</p>
        
        {price && (
          <div className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
            {price}
          </div>
        )}
      </div>
      <div className="w-full sm:w-auto flex flex-col gap-2 relative z-10">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener sponsored"
          className="inline-flex w-full whitespace-nowrap items-center justify-center rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-bold text-[var(--background)] hover:bg-[var(--brand-hover)] transition-colors"
        >
          {cta}
        </a>
        <span className="text-[10px] text-center text-[var(--text-muted)]">*Affiliate Link</span>
      </div>
    </div>
  );
}

export function ProCon({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-900/10 p-5">
        <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-green-800 dark:text-green-500 m-0">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
          Pros
        </h4>
        <ul className="space-y-2 list-none p-0 m-0">
          {pros.map((pro, i) => (
             <li key={i} className="flex items-start gap-2 text-sm text-green-900 dark:text-green-100 p-0 m-0">
               <span className="mt-1 shrink-0 text-green-600 dark:text-green-500">+</span>
               <span>{pro}</span>
             </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-900/10 p-5">
        <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-800 dark:text-red-500 m-0">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>
          Cons
        </h4>
        <ul className="space-y-2 list-none p-0 m-0">
          {cons.map((con, i) => (
             <li key={i} className="flex items-start gap-2 text-sm text-red-900 dark:text-red-100 p-0 m-0">
               <span className="mt-1 shrink-0 text-red-600 dark:text-red-500">-</span>
               <span>{con}</span>
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function StepList({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 step-list pl-4 border-l-2 border-[var(--border)] ml-6 space-y-8 relative">
      {children}
    </div>
  );
}

export function Step({ title, children, number }: { title: string; children: React.ReactNode; number: number }) {
  return (
    <div className="relative">
      <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-[var(--background)] ring-4 ring-[var(--background)] shadow-sm">
        {number}
      </div>
      <h3 className="text-lg font-bold text-[var(--text-primary)] mt-0 mb-2">{title}</h3>
      <div className="text-sm text-[var(--text-secondary)] prose-p:my-2">{children}</div>
    </div>
  );
}