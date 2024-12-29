"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

// Tarif türü
interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
}

const AiPage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>(""); // Malzemeler string olarak tutulur
  const [recipe, setRecipe] = useState<Recipe | null>(null); // Recipe ya null ya da Recipe türünde olabilir
  const [error, setError] = useState<string | null>(null); // Hata mesajı için durum

  const handleGenerateRecipe = async () => {
    try {
      setError(null); // Önceki hatayı temizle
      const response = await fetch("http://localhost:8000/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: ingredients }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Tarif önerisi alınamadı!");
      }

      const data: Recipe = await response.json(); // Gelen veri Recipe türünde olmalı
      setRecipe(data);
    } catch (error) {
      setError((error as Error).message);
      console.error("Hata oluştu:", (error as Error).message);
    }
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

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1 items-center text-center backdrop-blur-lg bg-[#ebdfd2] bg-opacity-70 p-10 rounded-xl shadow-2xl">
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
                onClick={handleGenerateRecipe}
                className="flex w-[200px] h-14 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white text-lg font-bold hover:from-orange-500 hover:to-orange-700 shadow-md transition-all duration-300"
              >
                Gönder
              </button>
            </div>

            {error && (
              <div className="text-red-500 text-lg mt-4">
                <strong>Hata:</strong> {error}
              </div>
            )}

            {recipe && (
              <div className="mt-8 text-left">
                <h3 className="text-[#1b130d] text-[24px] font-bold">Tarif:</h3>
                <p className="text-[#4a3f35] text-lg font-medium mt-4">
                  <strong>Adı:</strong> {recipe.name}
                </p>
                <p className="text-[#4a3f35] text-lg font-medium mt-2">
                  <strong>Malzemeler:</strong>{" "}
                  {recipe.ingredients.join(", ")}
                </p>
                <p className="text-[#4a3f35] text-lg font-medium mt-2">
                  <strong>Yapılışı:</strong> {recipe.instructions}
                </p>
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
