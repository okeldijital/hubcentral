import type { Metadata } from "next";
import { siteMetadata } from "@/lib/siteMetadata";

// Absolute site origin with no trailing slash (matches sitemap.xml <loc> values).
export const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hub.okeldijital.africa").replace(/\/$/, "");

/** Absolute URL for a route path. "/" or "" returns the bare origin, as in the sitemap. */
export function absoluteUrl(path = "/"): string {
  const clean = path.replace(/\/+$/, "");
  if (!clean) return baseUrl;
  return `${baseUrl}${clean.startsWith("/") ? clean : `/${clean}`}`;
}

/** Site-wide Open Graph defaults (previously only on the root layout). */
export const baseOpenGraph = {
  title: siteMetadata.title.default,
  description: siteMetadata.description,
  siteName: siteMetadata.title.default,
  type: "website",
} satisfies NonNullable<Metadata["openGraph"]>;
