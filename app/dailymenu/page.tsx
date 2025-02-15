"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Ingredient {
  name: string;
  alternative: string;
}

interface MenuItem {
  category: string;
  name: string;
  ingredients: Ingredient[];
}

interface MenuData {
  title: string;
  description: string;
  items: MenuItem[];
}

export default function Menu() {
  const [menuData, setMenuData] = useState<MenuData | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/api/customdailymenu");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Menü verisi yüklenirken bir hata oluştu:", error);
      }
    };

    fetchMenu();
  }, []);

  if (!menuData) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg font-semibold text-gray-700">Yükleniyor...</p>
        </div>
      </>
    );
  }

  return (
    <div
      className="relative flex flex-col min-h-screen bg-[#fcfaf8] overflow-x-hidden"
      style={{ fontFamily: "Epilogue, 'Noto Sans', sans-serif" }}
    >
      <Header />

      <div
        className="flex flex-1 items-center justify-center backdrop-blur-sm py-10 px-4"
        style={{
          backgroundImage: "url('/dailymenu.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8 rounded-lg shadow-xl max-w-4xl w-full border border-[#f3ece7] backdrop-blur-lg bg-[#ebdfd2] bg-opacity-80">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-[#1b130d] mb-2">
              {menuData.title}
            </h1>
            <p className="text-lg text-[#6b5c4c]">{menuData.description}</p>
          </div>

          {menuData.items.map((item, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-[#1b130d] text-2xl font-bold mb-4">
                {item.category}: {item.name}
              </h2>
              <h3 className="text-lg font-semibold mb-2 text-[#1b130d]">
                Malzemeler:
              </h3>
              <ul className="list-none space-y-2">
                {item.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="flex-1 text-[#423b32] font-medium">
                      {ingredient.name}
                      <span className="text-[#744d30] text-sm ml-2">
                        (Alternatif: {ingredient.alternative})
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
