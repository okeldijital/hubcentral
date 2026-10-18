import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, baseOpenGraph } from "@/lib/seo";
import { LegalPageShell, LegalSection, Placeholder } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Hub Central privacy policy (draft, pending approval).",
  alternates: { canonical: absoluteUrl("/privacy") },
  openGraph: { ...baseOpenGraph, url: absoluteUrl("/privacy") },
  // Draft with placeholder text: keep out of search until the final wording is approved.
  robots: { index: false },
};

const sections = [
  {
    title: "Who we are",
    placeholder:
      "who is responsible for this site and its personal information, to be approved by Leko",
  },
  {
    title: "What we collect",
    placeholder: "what personal information is collected, to be approved by Leko",
  },
  {
    title: "How we use it",
    placeholder: "how and why personal information is used, to be approved by Leko",
  },
  {
    title: "Cookies and analytics",
    placeholder: "cookies and analytics text, to be approved by Leko",
  },
  {
    title: "Sharing with third parties",
    placeholder: "third-party sharing text, to be approved by Leko",
  },
  { title: "How long we keep it", placeholder: "data retention text, to be approved by Leko" },
  { title: "Your rights", placeholder: "data subject rights text (POPIA), to be approved by Leko" },
  { title: "Changes to this policy", placeholder: "policy changes text, to be approved by Leko" },
  {
    title: "Contact",
    placeholder: "privacy contact / Information Officer details, to be approved by Leko",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPageShell
      pathname="/privacy"
      title="Privacy Policy"
      intro={
        <>
          Last updated: <Placeholder>date</Placeholder>
        </>
      }
      draft
    >
      <LegalSection title="Overview">
        <Placeholder>privacy policy text to be approved by Leko</Placeholder>
      </LegalSection>
      {sections.map((section) => (
        <LegalSection key={section.title} title={section.title}>
          <Placeholder>{section.placeholder}</Placeholder>
        </LegalSection>
      ))}
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        See also: <Link href="/contact">Contact</Link> · <Link href="/terms">Terms of Use</Link>
      </p>
    </LegalPageShell>
  );
}
