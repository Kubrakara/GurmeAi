"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoginPage = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Giriş ekranı için referans

  useEffect(() => {
    // Sayfa yüklendiğinde tüm içeriği aynı anda hızlı bir şekilde göster
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0, // Şeffaflıktan başlar
        scale: 0.9, // Biraz küçülerek başlar
        duration: 0.6, // Daha hızlı animasyon için kısa süre
        ease: 'power1.out', // Yumuşak bir animasyon
      });
    }
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(arkaplan.webp)' }}
    >
      <div
        ref={containerRef}
        className="p-20 rounded-lg shadow-lg text-white w-[700px] h-[650px] bg-opacity-15 bg-black"
      >
        <h2 className="text-3xl text-[#ee7f2b] font-bold mb-6 text-center">
          Giriş Yap
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg text-[#ee7f2b] border focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-bold mb-1">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              placeholder="Şifre"
              className="w-full px-4 py-2 rounded-lg text-[#ee7f2b] border focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Giriş Yap
          </button>
        </form>
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 text-gray-400 text-sm">veya</span>
          <hr className="flex-grow border-gray-600" />
        </div>
        <button
          className="w-full bg-white text-black py-2 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-gray-100 transition duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Google ile Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
