import React from "react";

const SidebarAd = () => {
  return (
    <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 text-center my-8">
      <span className="block mb-2 text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
        Advertisement
      </span>
      <div className="mx-auto h-[250px] w-full max-w-[300px] bg-[var(--surface-2)] rounded flex flex-col items-center justify-center opacity-50 border border-dashed border-[var(--border)]">
        <svg className="h-8 w-8 text-[var(--text-faint)] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
        <p className="text-[var(--text-muted)] text-sm font-medium">
          AdSense 300x250
        </p>
      </div>
    </aside>
  );
};

export default SidebarAd;
