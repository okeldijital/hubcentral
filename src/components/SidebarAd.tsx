import React from "react";
import Script from "next/script";

const SidebarAd = () => {
  return (
    <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 text-center my-8">
      <span className="block mb-2 text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
        Advertisement
      </span>
      <div className="mx-auto flex justify-center overflow-hidden min-h-[250px]">
        {/* Real Adsense 300x250 Ad for Hub Central */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4055253888470166"
          crossOrigin="anonymous"
        />
        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: "300px", height: "250px" }}
          data-ad-client="ca-pub-4055253888470166"
          data-ad-slot="1592796223"
        />
        <Script id="sidebar-adsbygoogle-init">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>
    </aside>
  );
};

export default SidebarAd;
