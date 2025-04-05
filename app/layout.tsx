"use client";

import "./globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GurmeAI",
      url: "https://www.gurmeai.com.tr",
      logo: "https://www.gurmeai.com.tr/favicon.ico",
      sameAs: [
        "https://www.instagram.com/gurmeai",
        "https://www.facebook.com/gurmeai",
        "https://twitter.com/gurmeai",
      ],
    });
    document.head.appendChild(script);
  }, []);

  return (
    <html lang="tr">
      <Head>
        {/* 📢 AdSense Script (Client-Side Only) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8503536557509227"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
