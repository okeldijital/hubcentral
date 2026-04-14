'use client'
import React, { useEffect } from 'react'
import Script from 'next/script'

export default function MidArticleAd() {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e: any) {
      console.error("AdSense error:", e.message);
    }
  }, []);

  return (
    <div className="my-8 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-4 text-center">
      {/* Real Adsense In-Article Ad for Hub Central */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4055253888470166"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4055253888470166"
        data-ad-slot="1592796223"
      />
    </div>
  )
}