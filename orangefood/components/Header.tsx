"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 text-[#1b130d] shadow-md relative">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="size-4 text-[#1b130d]">
          <svg
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2183 14.2173 24 4Z" />
          </svg>
        </div>
        <Link href="/">
          <h2 className="text-lg font-bold">OrangeFood</h2>
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Navigation for Desktop */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-base font-bold hover:text-orange-600">
          Anasayfa
        </Link>
        <Link href="/ai" className="text-base font-bold hover:text-orange-600">
          Yapay Zeka
        </Link>
        <Link
          href="/recipes"
          className="text-base font-bold hover:text-orange-600"
        >
          Geleneksel Tarifler
        </Link>
        <Link
          href="/dailymenu"
          className="text-base font-bold hover:text-orange-600"
        >
          Günün Menüsü
        </Link>
        <Link
          href="/about"
          className="text-base font-bold hover:text-orange-600"
        >
          Hakkında
        </Link>

        <div className="flex space-x-4">
          <Link href="/login">
            <button className="h-10 px-4 rounded-xl bg-[#f3ece7] text-[#1b130d] text-sm font-bold shadow-md hover:bg-[#e6dcd6] transition duration-200">
              Giriş Yap
            </button>
          </Link>
          <Link href="/login">
            <button className="h-10 px-4 rounded-xl bg-[#ee7f2b] text-white text-sm font-bold shadow-md hover:bg-[#d76d1c] transition duration-200">
              Kayıt Ol
            </button>
          </Link>
        </div>
      </nav>

      {/* Side Navigation Menu for Mobile */}
      <nav
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-xl p-6 transition-transform duration-300 z-50 rounded-r-2xl`}
      >
        <button
          className="text-2xl mb-6 self-end"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        <ul className="flex flex-col space-y-4">
          <li>
            <Link
              href="/"
              className="text-lg font-semibold hover:text-orange-600"
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              href="/ai"
              className="text-lg font-semibold hover:text-orange-600"
            >
              Yapay Zeka
            </Link>
          </li>
          <li>
            <Link
              href="/recipes"
              className="text-lg font-semibold hover:text-orange-600"
            >
              Geleneksel Tarifler
            </Link>
          </li>
          <li>
            <Link
              href="/dailymenu"
              className="text-lg font-semibold hover:text-orange-600"
            >
              Günün Menüsü
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-semibold hover:text-orange-600"
            >
              Hakkında
            </Link>
          </li>
        </ul>

        <div className="flex flex-col space-y-3 mt-6">
          <Link href="/login">
            <button className="h-10 px-4 rounded-xl bg-[#f3ece7] text-[#1b130d] text-sm font-bold shadow-md hover:bg-[#e6dcd6] transition duration-200">
              Giriş Yap
            </button>
          </Link>
          <Link href="/login">
            <button className="h-10 px-4 rounded-xl bg-[#ee7f2b] text-white text-sm font-bold shadow-md hover:bg-[#d76d1c] transition duration-200">
              Kayıt Ol
            </button>
          </Link>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
