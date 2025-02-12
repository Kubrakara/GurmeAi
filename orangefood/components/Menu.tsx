"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Menu() {
  const router = useRouter();

  return (
    <section className="px-6 bg-gradient-to-b text-[#3b2e26]">
      {/* Başlık */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-black mb-4 tracking-tight">
          Keşfedin ve İlham Alın
        </h1>
        <p className="text-lg leading-relaxed text-gray-800">
          En sevilen tarifler, günün ilham verici lezzetleri ve daha fazlası!
        </p>
      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-12">
        {[
          {
            title: "Tarif Oluşturun",
            image: "/resim1.png", // Ensure the image is placed in the public folder
            link: "/ai",
          },
          {
            title: "Geleneksel Tarifler",
            image: "/d.webp", // Ensure the image is placed in the public folder
            link: "/recipes",
          },
          {
            title: "Günün Menüsü",
            image: "/dailymenu.webp", // Ensure the image is placed in the public folder
            link: "/dailymenu",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="relative group rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 bg-white"
          >
            {/* Resim */}
            <div className="w-full h-96 sm:h-[30rem] md:h-[36rem] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            {/* İçerik */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <button
                className="bg-orange-500 hover:bg-orange-700 text-sm font-medium px-4 py-2 rounded-lg shadow-lg"
                onClick={() => router.push(item.link)}
              >
                Keşfet
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
