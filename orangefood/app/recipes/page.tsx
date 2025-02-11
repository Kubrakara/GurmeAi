"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";

const RecipesPage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [recipesByCategory, setRecipesByCategory] = useState<{
    [key: string]: {
      name: string;
      description: string;
      ingredients: string[];
      image: string;
      steps: string[];
    }[];
  }>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<{
    name: string;
    description: string;
    ingredients: string[];
    image: string;
    steps: string[];
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/customrecipes");
        const data = await response.json();
        console.log(data);
        setRecipesByCategory(data);
        setCategories(Object.keys(data));
      } catch (error) {
        console.error("Veri yüklenirken bir hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  const recipesToShow = selectedCategory
    ? recipesByCategory[selectedCategory] || []
    : [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-x-hidden"
      style={{
        fontFamily: "Epilogue, 'Noto Sans', sans-serif",
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] w-full">
          <h2 className="text-[#1b130d] text-3xl font-extrabold leading-tight tracking-tight px-4 pb-3 pt-5">
            🍽️ Geleneksel Tarifler
          </h2>

          <div className="flex flex-wrap gap-4 px-4 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  )
                }
                className={`px-6 py-3 rounded-lg font-medium text-sm ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-[#f3ece7] text-[#1b130d]"
                } hover:bg-orange-400 hover:text-white transition-all duration-200`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full items-stretch rounded-xl h-full">
                <div className="text-[#9a6e4c] flex items-center justify-center pl-4 bg-[#f3ece7] rounded-l-xl">
                  🔍
                </div>
                <input
                  placeholder="Tarif Ara"
                  className="form-input w-full flex-1 rounded-xl text-[#1b130d] bg-[#f3ece7] focus:outline-0 px-4 placeholder:text-[#9a6e4c]"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </div>
            </label>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
            {recipesToShow
              .filter((recipe) =>
                recipe.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((recipe, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <div
                    className="w-full bg-center bg-cover rounded-xl shadow-md aspect-video"
                    style={{
                      backgroundImage: `url(${recipe.image})`,
                    }}
                  ></div>
                  <p className="text-[#1b130d] text-base font-medium">
                    {recipe.name}
                  </p>
                </div>
              ))}
            {recipesToShow.length === 0 && selectedCategory && (
              <p className="text-center text-[#9a6e4c] text-lg font-medium">
                Bu kategoride tarif bulunamadı.
              </p>
            )}
          </div>
        </div>
      </div>

      {selectedRecipe && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            className="bg-[#f8f4f1] rounded-xl p-6 max-w-md w-full shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedRecipe(null)}
            >
              ✕
            </button>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-[#1b130d] text-xl font-bold mb-2">
              {selectedRecipe.name}
            </h2>
            <p className="text-[#4a3f35] text-sm mb-4">
              {selectedRecipe.description}
            </p>
            <h3 className="text-[#1b130d] font-bold">Malzemeler:</h3>
            <ul className="list-disc list-inside text-[#4a3f35] mb-4">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-[#1b130d] font-bold">Hazırlanışı:</h3>
            <ol className="list-decimal list-inside text-[#4a3f35]">
              {selectedRecipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipesPage;
