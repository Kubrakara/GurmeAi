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
  const [ingredients, setIngredients] = useState<string>("");
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerateRecipe = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch("/api/aiapi", {
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

      const data: Recipe = await response.json();
      setRecipe(data);
    } catch (error) {
      setError((error as Error).message);
      console.error("Hata oluştu:", (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-cover bg-center overflow-x-hidden"
        style={{
          fontFamily: "Epilogue, 'Noto Sans', sans-serif",
          backgroundImage: `url('/dailymenu.webp')`,
        }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <Header />

          <div className="flex flex-1 items-center justify-center px-4">
            <div className="layout-content-container flex flex-col max-w-[800px] flex-1 items-center text-center backdrop-blur-lg bg-[#ebdfd2] bg-opacity-80 p-10 rounded-xl shadow-2xl">
              <h2 className="text-[#1b130d] text-[32px] font-extrabold leading-tight mb-6">
                Tarif İçin İlham Alın!
              </h2>
              <p className="text-[#4a3f35] text-lg font-medium leading-relaxed mb-6">
                Akşam yemeği için fikre mi ihtiyacınız var? Elinizdeki
                malzemeleri yazın, yapay zeka size yaratıcı tarifler önersin!
              </p>

              <div className="flex w-full flex-wrap items-center gap-6 px-4 py-5">
                <label className="flex flex-col w-full">
                  <textarea
                    placeholder="Örneğin: Tavuk, makarna, domates..."
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="form-input w-full resize-none overflow-hidden rounded-lg text-[#1b130d] focus:outline-none focus:ring-2 focus:ring-[#d1c4b5] border border-[#d1c4b5] bg-[#fcfaf8] placeholder:text-[#9a6e4c] p-5 text-lg font-normal leading-normal min-h-[150px]"
                  ></textarea>
                </label>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleGenerateRecipe}
                  disabled={loading || !ingredients.trim()}
                  className={`flex w-[200px] h-14 items-center justify-center rounded-lg text-white text-lg font-bold shadow-md transition-all duration-300 ${
                    loading || !ingredients.trim()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700"
                  }`}
                >
                  {loading ? "Oluşturuluyor..." : "Tarif Öner"}
                </button>
              </div>

              {error && (
                <div className="text-red-500 text-lg mt-4">
                  <strong>Hata:</strong> {error}
                </div>
              )}

              {recipe && (
                <div className="mt-8 text-left w-full bg-[#fef9f4] p-5 rounded-lg shadow-md">
                  <h3 className="text-[#1b130d] text-[24px] font-bold mb-2">
                    🍽️ Tarif:
                  </h3>
                  <p className="text-[#4a3f35] text-lg font-medium mb-2">
                    <strong>Adı:</strong> {recipe.name}
                  </p>
                  <p className="text-[#4a3f35] text-lg font-medium mb-2">
                    <strong>Malzemeler:</strong> {recipe.ingredients.join(", ")}
                  </p>
                  <p className="text-[#4a3f35] text-lg font-medium mb-2">
                    <strong>Yapılışı:</strong> {recipe.instructions}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AiPage;
