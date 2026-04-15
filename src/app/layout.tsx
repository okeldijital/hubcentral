import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/siteMetadata";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Use SITE_URL env var or fallback, ensure no trailing slash
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  : "https://hub.okeldijital.africa";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: siteMetadata.title.default,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title.default,
    description: siteMetadata.description,
    url: baseUrl,
    siteName: siteMetadata.title.default,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title.default,
    description: siteMetadata.description,
    siteId: siteMetadata.twitterHandle,
  },
  alternates: {
    canonical: baseUrl,
  },
};

const schemaData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hub Central",
  url: baseUrl,
  description: "Practical AI & WordPress guides for small teams in 2026",
  publisher: {
    "@type": "Organization",
    name: "Hub Central",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/images/logo.png`,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} dark h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
      </head>
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-amber-200 selection:text-amber-900 dark:selection:bg-amber-800 dark:selection:text-amber-100">
        <ReadingProgress />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* AdSense script - loaded once */}
        {siteMetadata.ads.adSensePublisherId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteMetadata.ads.adSensePublisherId}`}
            // @ts-ignore - Next.js types don't include crossOrigin for script tag
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}
