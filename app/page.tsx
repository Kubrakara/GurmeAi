import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Bölümü */}
      {/* <section
        className="flex items-center justify-center bg-cover bg-center min-h-[480px] p-8"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/1arkaplan.png')",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-black">Akşam Yemekte ne var ?</h1>
          <p className="text-lg mt-2">Yeni tarifler bulmak için malzemeleri girin.</p>
        </div>
      </section> */}
      <HeroSlider />
      {/* Menu Bölümü */}
      <section className="py-10">
        <Menu />
      </section>

      {/* Featured Recipes Bölümü */}
      <section className="container mx-auto py-10 text-black">
        <FeaturedRecipes />
      </section>

      {/* Footer */}
      <section className="text-black">
        <Footer />
      </section>
    </div>
  );
} 
