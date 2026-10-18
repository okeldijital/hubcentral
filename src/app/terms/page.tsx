import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, baseOpenGraph } from "@/lib/seo";
import { LegalPageShell, LegalSection, Placeholder } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Hub Central terms of use (draft, pending approval).",
  alternates: { canonical: absoluteUrl("/terms") },
  openGraph: { ...baseOpenGraph, url: absoluteUrl("/terms") },
};

const sections = [
  { title: "Use of this site", placeholder: "use of site terms, to be approved by Leko" },
  {
    title: "Content",
    placeholder: "content / intellectual property terms, to be approved by Leko",
  },
  {
    title: "Links and affiliate links",
    placeholder: "external and affiliate links terms, to be approved by Leko",
  },
  { title: "Liability", placeholder: "limitation of liability terms, to be approved by Leko" },
  { title: "Changes to these terms", placeholder: "changes to terms text, to be approved by Leko" },
  { title: "Contact", placeholder: "terms contact details, to be approved by Leko" },
];

export default function TermsPage() {
  return (
    <LegalPageShell
      pathname="/terms"
      title="Terms of Use"
      intro={
        <>
          Last updated: <Placeholder>date</Placeholder>
        </>
      }
      draft
    >
      <LegalSection title="Overview">
        <Placeholder>terms of use text to be approved by Leko</Placeholder>
      </LegalSection>
      {sections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          <Placeholder>{section.placeholder}</Placeholder>
        </LegalSection>
      ))}
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        See also: <Link href="/contact">Contact</Link> · <Link href="/privacy">Privacy Policy</Link>
      </p>
    </LegalPageShell>
  );
}
