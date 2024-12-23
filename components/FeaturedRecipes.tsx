interface Recipe {
  name: string;
  image: string;
}

const recipes: Recipe[] = [
  { name: "Pasta Carbonara", image: "/images/pasta-carbonara.jpg" },
  { name: "Spaghetti Bolognese", image: "/images/spaghetti-bolognese.jpg" },
  { name: "Chicken Alfredo", image: "/images/chicken-alfredo.jpg" },
  { name: "Shrimp Scampi", image: "/images/shrimp-scampi.jpg" },
  { name: "Beef Stroganoff", image: "/images/beef-stroganoff.jpg" },
  { name: "Fettuccine Alfredo", image: "/images/fettuccine-alfredo.jpg" },
];

export default function FeaturedRecipes() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Recipes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-2"
          >
            <div className="w-32 h-32 overflow-hidden rounded-lg shadow-lg">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium">{recipe.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
