import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AiPage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-cover bg-center overflow-x-hidden"
      style={{
        fontFamily: "Epilogue, 'Noto Sans', sans-serif",
        backgroundImage: `url('res41.png')`, 
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        {/* Main Content: Ortalanan Bölüm */}
        <div className="flex flex-1 items-center justify-center">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1 items-center text-center  bg-opacity-5 bg-white backdrop-blur-sm p-10 rounded-lg shadow-lg">
          {/* backdrop-blur-sm */}
            <h2 className="text-[#1b130d] text-[32px] font-bold leading-tight mb-6">
              Buzdolabında ne var?
            </h2>
            <p className="text-[#201d1d] text-xl font-bold leading-normal mb-6">
              Bize evinde olan malzemeleri söyle, bu malzemelerle yapabileceğiniz tarifleri bulacağız.
            </p>
            <div className="flex max-w-full flex-wrap items-end gap-6 px-4 py-5">
              <label className="flex flex-col w-full">
                <textarea
                  placeholder="Soğan, salça, patates, et..."
                  className="form-input w-full resize-none overflow-hidden rounded-lg text-[#1b130d] focus:outline-0 focus:ring-0 border border-[#e7dacf] bg-[#fcfaf8] focus:border-[#e7dacf] min-h-[200px] min-w-[400px] placeholder:text-[#9a6e4c] p-5 text-lg font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <div className="flex px-4 py-5 justify-center">
              <button className="flex w-[200px] h-14 items-center justify-center rounded-lg bg-[#ee7f2b] text-white text-lg font-bold hover:bg-[#d46a1f]">
                Bul
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
