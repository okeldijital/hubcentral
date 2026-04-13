import React from "react";
import Script from "next/script";

const SidebarAd = () => {
  return (
    <aside className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 text-center my-8">
      <span className="block mb-2 text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
        Advertisement
      </span>
      <div className="mx-auto w-full overflow-hidden min-h-[250px]">
        {/* SidebarAd-HubCentral */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4055253888470166"
          crossOrigin="anonymous"
        />
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4055253888470166"
          data-ad-slot="2438666541"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="sidebar-adsbygoogle-init">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>
    </aside>
  );
};

export default SidebarAd;
