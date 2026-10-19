import { siteMetadata } from "./siteMetadata";

export interface Author {
  name: string;
  /** Site-relative path to a square author photo in /public. */
  image?: string;
  url?: string;
  /** Short third-person bio for the "About {author}" box on posts. */
  bio?: string;
}

const authors: Record<string, Author> = {
  "nkululeko nkosi": {
    name: "Nkululeko Nkosi",
    image: "/images/author-nkululeko-2026.jpg",
    url: "/about",
    bio: "Nkululeko Nkosi is the founder of Okel Dijital, the team behind HubCentral. Based in Durban, South Africa, he edits HubCentral and writes practical guides on AI, workflows and web hosting for small teams.",
  },
};

/** Look up an author by display name (case/whitespace-insensitive). */
export function getAuthor(name: string | undefined): Author | undefined {
  if (!name) return undefined;
  return authors[name.trim().toLowerCase()];
}

/** Absolute URL for a site-relative path, using the configured site URL. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteMetadata.siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? "" : "/"}${path}`;
}
