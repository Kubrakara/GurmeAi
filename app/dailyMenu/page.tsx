'use client';
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Menu() {


  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
      style={{ fontFamily: "Epilogue, 'Noto Sans', sans-serif" }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
           
            {/* Recipe Grid */}
            <h2 className="text-[#1b130d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Daily Menu
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* Tarife ait kartlar */}
              {[
                {
                  image:
                    "https://cdn.usegalileo.ai/sdxl10/b7901fa6-7d4e-4c50-8245-c98c6939f425.png",
                  title: "Shrimp Fried Rice",
                  description:
                    "A classic shrimp fried rice recipe with fresh shrimp, rice, green onions, peas, carrots, and sesame oil",
                },
                {
                  image:
                    "https://cdn.usegalileo.ai/sdxl10/7cc05c45-5566-401c-bdff-b0e40b1c8ca5.png",
                  title: "Pork Fried Rice",
                  description:
                    "A delicious pork fried rice recipe with pork, rice, green onions, eggs, and soy sauce",
                },
              ].map((recipe, index) => (
                <div className="flex flex-col gap-3 pb-3" key={index}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url('${recipe.image}')` }}
                  ></div>
                  <div>
                    <p className="text-[#1b130d] text-base font-medium leading-normal">
                      {recipe.title}
                    </p>
                    <p className="text-[#9a6e4c] text-sm font-normal leading-normal">
                      {recipe.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
