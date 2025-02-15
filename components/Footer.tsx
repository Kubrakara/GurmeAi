import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#ffffff] to-[#f5e5da] text-[#1b130d] py-6 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo ve Açıklama */}
        <div className="flex items-center gap-3">
          <Image
            src="/chef-hat.png"
            alt="GurmeAi Logo"
            width={40}
            height={40}
            priority
          />
          <div>
            <h2 className="text-xl font-bold text-orange-700">GurmeAi</h2>
            <p className="text-sm text-gray-700">
              Lezzet dolu tarifler burada!
            </p>
          </div>
        </div>

        {/* Hızlı Menü */}
        <ul className="flex flex-wrap gap-4 mt-4 md:mt-0 text-sm">
          <li>
            <Link
              href="/"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              href="/ai"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              Yapay Zeka Tarifleri
            </Link>
          </li>
          <li>
            <Link
              href="/recipes"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              Geleneksel Tarifler
            </Link>
          </li>
          <li>
            <Link
              href="/dailymenu"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              Günün Menüsü
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-orange-600 transition-colors duration-300"
            >
              Hakkında
            </Link>
          </li>
        </ul>

        {/* Sosyal Medya */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <p className="text-sm text-gray-700">info@gurmeai.com</p>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="mt-4 text-center text-xs text-gray-600">
        © 2024 GurmeAi. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
