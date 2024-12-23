'use client'
import React, { useState } from "react";
import Header from "@/components/Header";

const RecipesPage = () => {
  const [searchValue, setSearchValue] = useState(""); // State ile arama değerini kontrol ediyoruz

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Kullanıcının girdisini state'e kaydediyoruz
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
      style={{ fontFamily: "Epilogue, 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header Section */}
        <Header />
        {/* Main Content Section */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Favori Tarfifini Bul
            </h2>
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
                    placeholder="Search for recipes"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border-none bg-[#f3ece7] focus:border-none h-full placeholder:text-[#9a6e4c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value={searchValue} // State'e bağlı
                    onChange={handleSearchChange} // Kullanıcı girdisini dinliyoruz
                  />
                </div>
              </label>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* Example Recipe Cards */}
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage: "url('resim1.png')",
                  }}
                ></div>
                <div>
                  <p className="text-[#1b130d] text-base font-medium leading-normal">
                    Spicy Thai Noodle Soup
                  </p>
                  <p className="text-[#9a6e4c] text-sm font-normal leading-normal">
                    45 mins · 4.8 ★ 1,200 ratings
                  </p>
                </div>
              </div>
              {/* Add more recipe cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
