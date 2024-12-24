import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="bg-[#f3ece7] min-h-screen flex flex-col">
      {/* Header */}
      <Header />

    
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
