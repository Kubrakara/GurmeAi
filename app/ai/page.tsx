"use client"; // Dosyanın bir client bileşeni olduğunu belirtir

import Footer from "@/frontend/components/Footer";
import Header from "@/frontend/components/Header";
import React, { useState } from "react";

const AiPage = () => {
  const [ingredients, setIngredients] = useState(""); // Kullanıcının girdiği malzemeler
  const [recipes, setRecipes] = useState<string[] | null>(null); // Tarif sonuçları

  // Manuel tarif önerme fonksiyonu
  const findRecipes = () => {
    if (!ingredients.trim()) {
      alert("Lütfen malzemeleri giriniz!");
      return;
    }

    // Malzemelere göre manuel tarif önerileri
    const recipeSuggestions: { [key: string]: string[] } = {
      soğan: ["Soğan Çorbası", "Karamelize Soğanlı Tavuk"],
      patates: ["Patates Kızartması", "Fırında Patates"],
      salça: ["Menemen", "Salçalı Makarna"],
      et: ["Et Sote", "Izgara Köfte"],
    };

    // Girilen malzemelere uygun tarifleri bulma
    const inputIngredients = ingredients.toLowerCase().split(",").map((item) => item.trim());
    const matchingRecipes = Object.keys(recipeSuggestions).reduce((acc: string[], key) => {
      if (inputIngredients.includes(key)) {
        acc.push(...recipeSuggestions[key]);
      }
      return acc;
    }, []);

    setRecipes(matchingRecipes.length ? matchingRecipes : ["Bu malzemelerle tarif bulunamadı."]);
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-cover bg-center overflow-x-hidden"
      style={{
        fontFamily: "Epilogue, 'Noto Sans', sans-serif",
        backgroundImage: `url('dailymenu.webp')`,
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1 items-center text-center backdrop-blur-lg bg-[#ebdfd2] bg-opacity-70 p-10 rounded-xl  shadow-2xl">
            <h2 className="text-[#1b130d] text-[32px] font-extrabold leading-tight mb-6">
              Buzdolabında Ne Var?
            </h2>
            <p className="text-[#4a3f35] text-lg font-medium leading-relaxed mb-6">
              Evdeki malzemelerinizi bize söyleyin, size yapabileceğiniz tarifleri önerelim!
            </p>
            <div className="flex w-full flex-wrap items-center gap-6 px-4 py-5">
              <label className="flex flex-col w-full">
                <textarea
                  placeholder="Örneğin: Soğan, salça, patates, et..."
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  className="form-input w-full resize-none overflow-hidden rounded-lg text-[#1b130d] focus:outline-none focus:ring-2 focus:ring-[#d1c4b5] border border-[#d1c4b5] bg-[#fcfaf8] placeholder:text-[#9a6e4c] p-5 text-lg font-normal leading-normal min-h-[150px]"
                ></textarea>
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={findRecipes}
                className="flex w-[200px] h-14 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white text-lg font-bold hover:from-orange-500 hover:to-orange-700 shadow-md transition-all duration-300"
              >
                Tarif Bul
              </button>
            </div>

            {/* Tarif Sonuçları */}
            {recipes && (
              <div className="mt-8 w-full bg-[#fcfaf9] p-6 rounded-lg border border-[#e7dacf] shadow-md">
                <h3 className="text-[#1b130d] text-2xl font-bold mb-4">Önerilen Tarifler:</h3>
                <ul className="list-disc list-inside text-left text-[#4a3f35] text-lg font-medium">
                  {recipes.map((recipe, index) => (
                    <li key={index}>{recipe}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AiPage;
