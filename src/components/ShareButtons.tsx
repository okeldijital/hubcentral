"use client";

import { useState } from "react";
import { siteMetadata } from "@/lib/siteMetadata";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  // Remove trailing slashes and ensure clean url
  const baseUrl = siteMetadata.siteUrl.replace(/\/$/, '');
  const url = `${baseUrl}/blog/${slug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`Reading: ${title}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}&via=${siteMetadata.twitterHandle.replace('@', '')}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Share</span>
      <div className="flex gap-2">
        <button
          onClick={shareOnTwitter}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-1)] text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors"
          aria-label="Share on Twitter"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.022z" />
          </svg>
        </button>
        <button
          onClick={copyToClipboard}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-1)] text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--brand)] hover:border-[var(--brand)] transition-colors relative"
          aria-label="Copy link"
        >
          {copied ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          )}
          
          {/* Tooltip */}
          <span className={`absolute -top-10 scale-90 opacity-0 transition-all px-2 py-1 bg-[--surface-2] border border-[--border] text-[--text-primary] text-xs rounded pointer-events-none whitespace-nowrap ${copied ? "opacity-100 scale-100 -translate-y-1" : ""}`}>
            Copied!
          </span>
        </button>
      </div>
    </div>
  );
}
