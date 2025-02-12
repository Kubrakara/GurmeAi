import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        {/* 📢 AdSense Doğrulama Kodu */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8503536557509227"
          crossOrigin="anonymous"
        ></script>

        {/* 🌐 SEO Meta Etiketleri */}
        <title>GurmeAI - Yapay Zeka Destekli En Lezzetli Tarifler</title>
        <meta
          name="description"
          content="GurmeAI ile yapay zeka destekli yemek tariflerini keşfedin. Sağlıklı ve lezzetli menüler, geleneksel tarifler ve daha fazlası burada!"
        />
        <meta
          name="keywords"
          content="yemek tarifleri, sağlıklı beslenme, geleneksel tarifler, yapay zeka, GurmeAI"
        />
        <meta name="author" content="GurmeAI" />

        {/* 📱 Mobil Uyumluluk */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* 🔗 Open Graph (Sosyal Medya Paylaşımı için) */}
        <meta property="og:title" content="GurmeAI - En Lezzetli Tarifler" />
        <meta
          property="og:description"
          content="GurmeAI ile yapay zeka destekli yemek tariflerini keşfedin. Günün menüsünü inceleyin!"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://www.gurmeai.com.tr" />
        <meta property="og:type" content="website" />

        {/* 🐦 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GurmeAI - En Lezzetli Tarifler" />
        <meta
          name="twitter:description"
          content="Yapay zeka destekli yemek tarifleriyle sofralarınıza lezzet katın!"
        />
        <meta name="twitter:image" content="/favicon.ico" />

        {/* 📊 Schema Markup (Yapılandırılmış Veri - JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
