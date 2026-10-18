import type { Metadata } from "next";
import { absoluteUrl, baseOpenGraph } from "@/lib/seo";
import { siteMetadata } from "@/lib/siteMetadata";
import { LegalPageShell, Placeholder } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to get in touch with Hub Central, a project by Okel Dijital.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: { ...baseOpenGraph, url: absoluteUrl("/contact") },
};

// Contact details come from existing site config (src/lib/siteMetadata.ts) and the footer.
const socialLinks = [
  { label: "X", href: siteMetadata.socialLinks.twitter },
  { label: "LinkedIn", href: siteMetadata.socialLinks.linkedin },
  { label: "Instagram", href: siteMetadata.socialLinks.instagram },
];

const rowClass =
  "flex flex-col gap-1 border-b border-[var(--border)] py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-6";
const labelClass =
  "w-32 flex-shrink-0 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]";

export default function ContactPage() {
  return (
    <LegalPageShell
      pathname="/contact"
      title="Contact"
      intro={
        <>
          Hub Central is a project by{" "}
          <a href="https://okeldijital.com" className="font-semibold">
            Okel Dijital
          </a>
          .
        </>
      }
    >
      <div className="not-prose rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] px-6 py-2">
        <div className={rowClass}>
          <span className={labelClass}>Email</span>
          <a
            href={`mailto:${siteMetadata.contactEmail}`}
            className="font-medium text-[var(--text-primary)] hover:text-[var(--brand-text)]"
          >
            {siteMetadata.contactEmail}
          </a>
        </div>
        <div className={rowClass}>
          <span className={labelClass}>Social</span>
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[var(--text-primary)] hover:text-[var(--brand-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={rowClass}>
          <span className={labelClass}>Website</span>
          <a
            href="https://okeldijital.com"
            className="font-medium text-[var(--text-primary)] hover:text-[var(--brand-text)]"
          >
            okeldijital.com
          </a>
        </div>
        <div className={rowClass}>
          <span className={labelClass}>Address</span>
          <span className="text-[var(--text-secondary)]">
            <Placeholder>
              business address (or remove this row if it should not be published)
            </Placeholder>
          </span>
        </div>
      </div>
    </LegalPageShell>
  );
}
