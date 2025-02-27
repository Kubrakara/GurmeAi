"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 text-[#1b130d] shadow-md relative">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12">
          <Image
            src="/chef-hat.png"
            alt="Logo"
            className="w-full h-full object-contain"
            width={40}
            height={40}
            priority
          />
        </div>
        <Link href="/">
          <h2
            className="text-2xl font-bold text-orange-700 tracking-wide"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            GurmeAi
          </h2>
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
        <Link
          href="/"
          className={`text-base font-bold hover:text-orange-600 ${
            pathname === "/"
              ? "border-b-2 border-orange-600 text-orange-600"
              : ""
          }`}
        >
          Anasayfa
        </Link>
        <Link
          href="/ai"
          className={`text-base font-bold hover:text-orange-600 ${
            pathname === "/ai"
              ? "border-b-2 border-orange-600 text-orange-600"
              : ""
          }`}
        >
          Yapay Zeka
        </Link>
        <Link
          href="/recipes"
          className={`text-base font-bold hover:text-orange-600 ${
            pathname === "/recipes"
              ? "border-b-2 border-orange-600 text-orange-600"
              : ""
          }`}
        >
          Geleneksel Tarifler
        </Link>
        <Link
          href="/dailymenu"
          className={`text-base font-bold hover:text-orange-600 ${
            pathname === "/dailymenu"
              ? "border-b-2 border-orange-600 text-orange-600"
              : ""
          }`}
        >
          Günün Menüsü
        </Link>
        <Link
          href="/about"
          className={`text-base font-bold hover:text-orange-600 ${
            pathname === "/about"
              ? "border-b-2 border-orange-600 text-orange-600"
              : ""
          }`}
        >
          Hakkında
        </Link>

        {!isAuthenticated && (
          <div className="flex space-x-4">
            <Link href="/signin">
              <button className="h-10 px-4 rounded-xl bg-[#f3ece7] text-[#1b130d] text-sm font-bold shadow-md hover:bg-[#e6dcd6] transition duration-200">
                Giriş Yap
              </button>
            </Link>
            <Link href="/signup">
              <button className="h-10 px-4 rounded-xl bg-[#ee7f2b] text-white text-sm font-bold shadow-md hover:bg-[#d76d1c] transition duration-200">
                Kayıt Ol
              </button>
            </Link>
          </div>
        )}

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="h-10 px-4 rounded-xl bg-red-500 text-white text-sm font-bold shadow-md hover:bg-red-600 transition duration-200"
          >
            Çıkış Yap
          </button>
        )}
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
              className={`text-lg font-semibold hover:text-orange-600 ${
                pathname === "/" ? "font-bold text-orange-600" : ""
              }`}
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              href="/ai"
              className={`text-lg font-semibold hover:text-orange-600 ${
                pathname === "/ai" ? "font-bold text-orange-600" : ""
              }`}
            >
              Yapay Zeka
            </Link>
          </li>
          <li>
            <Link
              href="/recipes"
              className={`text-lg font-semibold hover:text-orange-600 ${
                pathname === "/recipes" ? "font-bold text-orange-600" : ""
              }`}
            >
              Geleneksel Tarifler
            </Link>
          </li>
          <li>
            <Link
              href="/dailymenu"
              className={`text-lg font-semibold hover:text-orange-600 ${
                pathname === "/dailymenu" ? "font-bold text-orange-600" : ""
              }`}
            >
              Günün Menüsü
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-lg font-semibold hover:text-orange-600 ${
                pathname === "/about" ? "font-bold text-orange-600" : ""
              }`}
            >
              Hakkında
            </Link>
          </li>
        </ul>

        {!isAuthenticated && (
          <div className="flex flex-col space-y-3 mt-6">
            <Link href="/signin">
              <button className="h-10 px-4 rounded-xl bg-[#f3ece7] text-[#1b130d] text-sm font-bold shadow-md hover:bg-[#e6dcd6] transition duration-200">
                Giriş Yap
              </button>
            </Link>
            <Link href="/signup">
              <button className="h-10 px-4 rounded-xl bg-[#ee7f2b] text-white text-sm font-bold shadow-md hover:bg-[#d76d1c] transition duration-200">
                Kayıt Ol
              </button>
            </Link>
          </div>
        )}

        {isAuthenticated && (
          <div className="flex flex-col space-y-3 mt-6">
            <button
              onClick={handleLogout}
              className="h-10 px-4 rounded-xl bg-red-500 text-white text-sm font-bold shadow-md hover:bg-red-600 transition duration-200"
            >
              Çıkış Yap
            </button>
          </div>
        )}
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
