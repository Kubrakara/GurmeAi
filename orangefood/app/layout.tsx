import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* 📢 AdSense Doğrulama Kodu */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8503536557509227"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
