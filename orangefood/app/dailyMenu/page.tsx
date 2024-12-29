"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";

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
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/menu");
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

  const handleCheckboxChange = (ingredient: string) => {
    setCheckedItems((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const getAllMissingIngredients = () => {
    const missing: { category: string; name: string; missingIngredients: Ingredient[] }[] = [];

    menuData?.items.forEach((item) => {
      const missingIngredients = item.ingredients.filter(
        (ingredient) => !checkedItems.includes(ingredient.name)
      );

      if (missingIngredients.length > 0) {
        missing.push({
          category: item.category,
          name: item.name,
          missingIngredients,
        });
      }
    });

    return missing;
  };

  const downloadShoppingList = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);

    doc.text("Alışveriş Listesi", 20, 20);

    const allMissingIngredients = getAllMissingIngredients();
    let yPosition = 30;

    allMissingIngredients.forEach((item) => {
      doc.text(`Kategori: ${item.category} - ${item.name}`, 20, yPosition);
      yPosition += 10;

      item.missingIngredients.forEach((ingredient) => {
        doc.text(
          `- ${ingredient.name} (Alternatif: ${ingredient.alternative})`,
          25,
          yPosition
        );
        yPosition += 10;
      });

      yPosition += 5;
    });

    doc.save("alisveris_listesi.pdf");
  };

  if (!menuData) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] overflow-x-hidden"
      style={{
        fontFamily: "Epilogue, 'Noto Sans', sans-serif",
      }}
    >
      <Header />
      <div
        style={{
          backgroundImage: "url('dailymenu.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-1 items-center justify-center backdrop-blur-sm py-10 px-4"
      >
        <div className="p-8 rounded-lg shadow-xl max-w-4xl w-full border border-[#f3ece7] backdrop-blur-lg bg-[#ebdfd2] bg-opacity-70">
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
              <ul className="list-none">
                {item.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center gap-4 mb-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      checked={checkedItems.includes(ingredient.name)}
                      onChange={() => handleCheckboxChange(ingredient.name)}
                    />
                    <div className="flex-1">
                      <span className="text-[#423b32] font-bold">
                        {ingredient.name}
                      </span>
                      {checkedItems.includes(ingredient.name) || (
                        <span className="text-[#744d30] text-sm ml-2">
                          (Alternatif: {ingredient.alternative})
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            onClick={downloadShoppingList}
            className="mt-4 px-6 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-200"
          >
            Tüm Eksik Malzemeleri PDF İndir
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
