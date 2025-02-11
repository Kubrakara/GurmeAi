interface Recipe {
  name: string;
  image: string;
}

const recipes: Recipe[] = [
  { name: "Pasta Carbonara", image: "2.jpg" },
  { name: "Spaghetti Bolognese", image: "pexels-xmtnguyen-699953.jpg" },
  { name: "Chicken Alfredo", image: "pexels-janetrangdoan-793759.jpg" },
  { name: "Shrimp Scampi", image: "pexels-janetrangdoan-769969.jpg" },
  { name: "Beef Stroganoff", image: "pexels-solliefoto-299347.jpg" },
  { name: "Fettuccine Alfredo", image: "pexels-pascal-claivaz-66964-410648.jpg" },
];

export default function FeaturedRecipes() {
  return (
    <section >
      <h2 className="text-3xl font-extrabold text-[#1b130d] text-center mb-12  ">
        Öne Çıkan Tarifler
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4 transition-transform duration-200 hover:scale-105"
          >
            <div className="w-40 h-40 overflow-hidden rounded-xl shadow-md ">
              {/* <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              /> */}
            </div>
            <p className="text-lg font-bold text-[#1b130d] hover:text-orange-500 transition-colors duration-200">
              {recipe.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
