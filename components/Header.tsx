import Link from "next/link";

export default function Header() {
  return (
    <>
    <header className="flex items-center justify-between border-b px-10 py-3 bg-[#fcfaf8] text-[#1b130d]">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="size-4 text-[#1b130d]">
          <svg
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" />
          </svg>
        </div>
        <Link href="/"> 
          <h2 className="text-lg font-bold">OrangeFood</h2>
        </Link>
        
      </div>

      {/* Navigasyon Linkleri */}
      <nav className="flex items-center gap-9">
        <Link href="/" className="text-sm font-medium hover:text-orange-600">
          Anasayfa
        </Link>
        <Link href="/ai" className="text-sm font-medium hover:text-orange-600">
          Yapay Zeka
        </Link>
        <Link
          href="/recipes"
          className="text-sm font-medium hover:text-orange-600"
        >
          Geleneksel Tarifler
        </Link>
        <Link
          href="dailyMenu"
          className="text-sm font-medium hover:text-orange-600"
        >
          Günün Menüsü
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:text-orange-600"
        >
          Hakkında
        </Link>
      </nav>

      {/* Login Butonu */}
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f3ece7] text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Giriş Yap</span>
          </button>
        </Link>
        <Link href="/signup">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#ee7f2b] text-[#1b130d] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Kayıt Ol</span>
          </button>
        </Link>
      </div>
    </header>
    </>
  );
}
