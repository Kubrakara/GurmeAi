import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AiPage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
      style={{ fontFamily: "Epilogue, 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#1b130d] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Buzdolabında ne var ?
            </h2>
            <p className="text-[#1b130d] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Bize evinde olan malzemeleri söyle, bu malzemelerle yapabileceğiniz tarifleri bulacağız.
            </p>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <textarea
                  placeholder="Soğan, salça, patates ,et..."
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b130d] focus:outline-0 focus:ring-0 border border-[#e7dacf] bg-[#fcfaf8] focus:border-[#e7dacf] min-h-36 placeholder:text-[#9a6e4c] p-[15px] text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <div className="flex px-4 py-3 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ee7f2b] text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Bul</span>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AiPage;
