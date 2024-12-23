import Link from "next/link";

export default function Header() {
  return (
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
        <h2 className="text-lg font-bold">OrangeFood</h2>
      </div>

      {/* Navigasyon Linkleri */}
      <nav className="flex items-center gap-9">
        <Link href="/" className="text-sm font-medium hover:text-orange-600">
          Home
        </Link>
        <Link href="/ai" className="text-sm font-medium hover:text-orange-600">
          AI
        </Link>
        <Link
          href="/recipes"
          className="text-sm font-medium hover:text-orange-600"
        >
          Recipes
        </Link>
        <Link
          href="dailyMenu"
          className="text-sm font-medium hover:text-orange-600"
        >
          Daily Menu
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:text-orange-600"
        >
          About
        </Link>
      </nav>

      {/* Login Butonu */}
      <Link href="/login">
        <button className="bg-[#f3ece7] rounded-xl px-4 py-2 text-sm font-bold hover:bg-[#e2dbd5]">
          Log in
        </button>
      </Link>
    </header>
  );
}
