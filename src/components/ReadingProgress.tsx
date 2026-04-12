"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  // Only show reading progress on blog posts
  const isBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog";

  useEffect(() => {
    if (!isBlogPost) {
      setProgress(0);
      return;
    }

    const updateProgress = () => {
      // Calculate how far the user has scrolled
      const currentScrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      
      const scrollPercent = (currentScrollY / (scrollHeight - windowHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    // Initial check
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, [isBlogPost, pathname]);

  if (!isBlogPost) return null;

  return (
    <div 
      id="reading-progress"
      style={{ width: `${progress}%` }} 
      aria-hidden="true"
    />
  );
}
