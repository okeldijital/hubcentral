'use client';

import Script from 'next/script';

export default function MidArticleAd() {
  return (
    <>
      <div className="my-8 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-client="YOUR_ADSENSE_PUBLISHER_ID_HERE"
          data-ad-slot="YOUR_ADSENSE_MID_ARTICLE_SLOT_ID"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      <Script id="mid-article-ads" strategy="afterInteractive">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
      </Script>
    </>
  );
}