"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ai-tools", label: "AI Tools" },
  { href: "/workflows-ai-small-teams-2026", label: "Workflows" },
  { href: "/wordpress", label: "WordPress" },
  { href: "/hosting", label: "Hosting" },
  { href: "/guides", label: "Guides" },
  { href: "/editorial", label: "Editorial" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="group flex items-center transition-opacity hover:opacity-90"
        >
          <div className="relative h-12 w-12 overflow-hidden transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Hub Central Logo"
              fill
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/images/logo-white.png"
              alt="Hub Central Logo"
              fill
              className="hidden object-contain dark:block"
              priority
            />
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex md:gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? "text-[var(--brand-text)]" 
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 py-4 shadow-lg absolute w-full left-0">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-1 text-base font-medium ${
                      isActive 
                        ? "text-[var(--brand-text)]" 
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}