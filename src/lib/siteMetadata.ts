export const siteMetadata = {
  title: {
    default: "Hub Central",
    template: "%s | Hub Central",
  },
  description:
    "Hub Central – Practical AI & WordPress Guides for Small Teams in 2026. Real workflows, beginner checklists, speed & hosting tips — no hype, just what actually works.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://hub.okeldijital.africa",
  locale: "en_US",
  author: "Okel Dijital",
  twitterHandle: "@okeldijital",
  socialLinks: {
    twitter: "https://x.com/okelhubcentral",
    linkedin: "https://www.linkedin.com/showcase/okelhubcentral/",
    instagram: "https://www.instagram.com/okel.hubcentral/",
  },
  ads: {
    adSensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_ID || "",
  },
  convertKit: {
    formId: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || "",
    apiKey: process.env.CONVERTKIT_API_KEY || "",
  },
  contactEmail: "okeldijital@gmail.com",
};

export type SiteMetadata = typeof siteMetadata;
