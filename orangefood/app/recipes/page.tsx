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
            const response = await fetch("http://localhost:8000/api/home");
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
      className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
      style={{
        fontFamily: "Epilogue, 'Noto Sans', sans-serif",
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#1b130d] text-[30px] font-extrabold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Geleneksel Tarifler
            </h2>

            <div className="flex flex-wrap gap-4 px-4 pb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
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
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#9a6e4c] flex border-none bg-[#f3ece7] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Tarif Ara"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-full placeholder:text-[#9a6e4c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
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
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-md"
                      style={{
                        backgroundImage: `url(${recipe.image})`,
                      }}
                    ></div>
                    <div>
                      <p className="text-[#1b130d] text-base font-medium leading-normal">
                        {recipe.name}
                      </p>
                    </div>
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
