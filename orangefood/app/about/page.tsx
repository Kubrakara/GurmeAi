import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          fontFamily: "Epilogue, 'Noto Sans', sans-serif",
          background: "url('/dailymenu.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white p-10 rounded-2xl shadow-xl w-3/4">
          <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">
            Hakkında
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            OrangeFood, yemek tariflerini keşfetmenizi, paylaşmanızı ve günümüz
            teknolojisiyle yeni lezzetler oluşturmanızı sağlayan bir
            platformdur. Geleneksel tariflerden yapay zeka destekli önerilere
            kadar geniş bir içerik yelpazesi sunar.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Platformumuz, lezzet yolculuğunuzda size eşlik ederken, kullanıcı
            dostu arayüzü ve zengin içerikleriyle mutfakta geçirdiğiniz zamanı
            daha keyifli hale getirir.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">
              Misyonumuz
            </h2>
            <p className="text-md text-gray-700">
              Yemek kültürünü yaşatmak ve dünya mutfağının eşsiz lezzetlerini
              herkesle paylaşmak.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">
              Vizyonumuz
            </h2>
            <p className="text-md text-gray-700">
              Teknolojiyi kullanarak yemek deneyimini zenginleştiren öncü bir
              platform olmak.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
