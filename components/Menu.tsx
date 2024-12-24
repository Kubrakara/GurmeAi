'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter(); // Next.js yönlendirme için useRouter'ı kullanıyoruz.

  return (
    <section className="px-4 py-8 flex flex-col items-center max-w-7xl mx-auto">
      {/* Başlık */}
      <h1 className="text-4xl font-extrabold text-[#1b130d] mb-4 text-center">
        Lezzetli Tarifleri Keşfedin!
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Geleneksel tatlardan modern lezzetlere, her şey burada!
      </p>
      
      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-black max-w-4xl">
        {[
          {
            title: "Tarif oluşturun",
            image: "resim1.png",
            link: "/ai",
          },
          {
            title: "Geleneksel Tarifler",
            image: "2.jpg",
            link: "/recipes",
          },
          {
            title: "Günün Menüsü",
            image: "1.jpg",
            link: "/dailyMenu",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-6 rounded-xl bg-white shadow-md border border-gray-200 p-4 transition-transform duration-200 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-56 h-56 object-cover rounded-3xl shadow-sm"
            />
            <h3 className="font-bold text-xl hover:text-[#ee7f2b] transition-colors duration-200">
              {item.title}
            </h3>
            <button
              className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-orange-500 hover:to-orange-700 transition duration-200"
              onClick={() => router.push(item.link)} // Yönlendirme için useRouter kullanımı
            >
              Keşfet
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
