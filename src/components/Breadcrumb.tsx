import Link from "next/link";
import { getBreadcrumbs } from "@/lib/internal-linking";

export function Breadcrumb({ pathname }: { pathname: string }) {
  const breadcrumbs = getBreadcrumbs(pathname);
  
  if (breadcrumbs.length <= 1) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `https://hub.okeldijital.africa${crumb.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted)]">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {isLast ? (
                  <span className="font-medium text-[var(--text-secondary)]" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link 
                      href={crumb.href === '/blog' ? '/category/guides' : crumb.href} 
                      className="hover:text-[var(--text-primary)] hover:underline decoration-[var(--brand)] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
