import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getPostSlugs, getAllPosts, getReadingTime } from "@/lib/mdx";
import { Sidebar } from "@/components/Sidebar";
import { Callout, Table, FAQ, Checklist, MDXImage, ProCon, AffiliateBox, StepList, Step, SidebarAd } from "@/components/MDXComponents";
import MidArticleAd from "@/components/MidArticleAd";
import { ComparisonTable } from "@/components/ComparisonTable";
import { MDXRemote } from "next-mdx-remote/rsc";
import { siteMetadata } from "@/lib/siteMetadata";

import { Breadcrumb } from "@/components/Breadcrumb";
import { TableOfContents } from "@/components/TableOfContents";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShareButtons } from "@/components/ShareButtons";
import { isPublished } from "@/lib/date";


// Remove dynamic ="force-dynamic" to allow static generation from generateStaticParams

const components = {
  Callout,
  Table,
  FAQ,
  Checklist,
  Image: MDXImage,
  ProCon,
  AffiliateBox,
  StepList,
  Step,
  MidArticleAd,
  SidebarAd,
  ComparisonTable,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const ogImage = post.frontmatter.image
    ? new URL(post.frontmatter.image, siteMetadata.siteUrl).toString()
    : undefined;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: "article",
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.lastmod || post.frontmatter.date,
      authors: [post.frontmatter.author],
      images: ogImage ? [ogImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.content);
  const postDate = new Date(post.frontmatter.date);
  const lastmodDate = post.frontmatter.lastmod
    ? new Date(post.frontmatter.lastmod)
    : postDate;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.summary,
    image: post.frontmatter.image,
    datePublished: postDate.toISOString(),
    dateModified: lastmodDate.toISOString(),
    author: {
      "@type": "Person",
      name: post.frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteMetadata.title.default,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.siteUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteMetadata.siteUrl}/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <Breadcrumb pathname={`/blog/${slug}`} />
        
        <div className="grid gap-10 lg:grid-cols-12">
          {/* LEFT SIDEBAR: TOC & Social mapping for desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <TableOfContents source={post.content} />
            </div>
          </aside>

          {/* MAIN ARTICLE CONTENT */}
          <article className="lg:col-span-6">
            <header className="mb-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {post.frontmatter.tags?.map((tag) => (
                  <a
                    key={tag}
                    href={`/category/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full bg-[var(--brand-light)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-text)] hover:bg-[var(--brand)] hover:text-white transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
              <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl text-balance">
                {post.frontmatter.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[var(--text-secondary)] font-medium">
                  {/* Author avatar placeholder */}
                  <div className="h-8 w-8 rounded-full bg-[var(--brand)] text-white flex items-center justify-center font-bold text-xs">
                    {post.frontmatter.author.charAt(0)}
                  </div>
                  <span className="text-[var(--text-primary)]">
                    {post.frontmatter.author}
                  </span>
                  <span className="text-[var(--text-muted)]">•</span>
                  <time dateTime={post.frontmatter.date} className="text-[var(--text-muted)]">
                    {postDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-[var(--text-muted)]">•</span>
                  <span className="text-[var(--text-muted)]">{readingTime} min read</span>
                </div>
                
                <ShareButtons title={post.frontmatter.title} slug={slug} />
              </div>
            </header>

            {!isPublished(post.frontmatter.date, post.frontmatter.published) ? (
              <div className="my-16 flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-[var(--surface-1)] border-2 border-dashed border-[var(--border)]">
                <div className="w-16 h-16 bg-[var(--brand-light)] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Coming Soon</h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-md">
                  This article is scheduled to be published on{" "}
                  <span className="font-semibold text-[var(--text-primary)]">
                    {postDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>.
                </p>
                <div className="mt-8">
                  <a href="/blog" className="inline-flex items-center text-[var(--brand)] font-semibold hover:underline">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Blog
                  </a>
                </div>
              </div>
            ) : (
              <>
                {post.frontmatter.image && (
                  <figure className="mb-10">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[var(--surface-2)] border border-[var(--border)] shadow-sm">
                      <img
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </figure>
                )}

                {/* Render body content with Ad split */}
                {(() => {
                  const blocks = post.content.split(/\n\n+/);
                  let wordCount = 0;
                  let adIndex = blocks.length;
                  
                  const hasManualAd = post.content.includes("<MidArticleAd") || post.content.includes("{MidArticleAd");

                  for (let i = 0; i < blocks.length; i++) {
                    wordCount += blocks[i].split(/\s+/).length;
                    if (!hasManualAd && wordCount >= 300 && i < blocks.length - 2) {
                      adIndex = i + 1;
                      break;
                    }
                  }

                  if (adIndex >= blocks.length - 1) {
                    return (
                      <div className="prose prose-zinc max-w-none dark:prose-invert">
                        <MDXRemote source={post.content} components={components} />
                      </div>
                    );
                  }

                  const beforeAdContent = blocks.slice(0, adIndex).join("\n\n");
                  const afterAdContent = blocks.slice(adIndex).join("\n\n");

                  return (
                    <>
                      <div className="prose prose-zinc max-w-none dark:prose-invert">
                        <MDXRemote source={beforeAdContent} components={components} />
                      </div>
                      
                      <div className="my-10">
                        <MidArticleAd />
                      </div>
                      
                      <div className="prose prose-zinc max-w-none dark:prose-invert">
                        <MDXRemote source={afterAdContent} components={components} />
                      </div>
                    </>
                  );
                })()}

                <RelatedPosts currentSlug={slug} />

                <div className="rounded-xl bg-[var(--surface-1)] border border-[var(--border)] p-6 mb-8 flex flex-col md:flex-row gap-6 items-center">
                   <div className="h-20 w-20 flex-shrink-0 rounded-full overflow-hidden bg-[var(--brand)] text-[var(--background)] flex items-center justify-center text-2xl font-bold">
                     {post.frontmatter.author.charAt(0)}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">About {post.frontmatter.author}</h3>
                     <p className="text-sm text-[var(--text-secondary)]">
                       Written by the Hub Central editorial team. We test real AI workflows and WordPress processes to help small teams work faster and smarter.
                     </p>
                   </div>
                </div>
              </>
            )}
          </article>

          {/* RIGHT SIDEBAR: Ads, Popular Posts, Newsletter */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}