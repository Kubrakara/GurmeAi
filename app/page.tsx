import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div
      className=" min-h-screen flex flex-col"
      style={{ backgroundImage: "url('')" }}
    >
      {/* Header */}
      <Header />

      <HeroSlider />
      {/* Menu Bölümü */}
      <section className="py-10">
        <Menu />
      </section>

      {/* Featured Recipes Bölümü */}
      <section className="container py-14 mx-auto  text-black">
        <FeaturedRecipes />
      </section>

      {/* Footer */}
      <section className="text-black">
        <Footer />
      </section>
    </div>
  );
}
