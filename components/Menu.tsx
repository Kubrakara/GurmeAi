export default function Menu() {
  return (
    <section className="px-10 py-8">
      <h2 className="text-2xl font-bold mb-4 text-black">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
        {[
          {
            title: "Tarif oluşturun",
            image: "https://via.placeholder.com/300?text=Ingredients",
          },
          {
            title: "Geleneksel Tarifler",
            image: "https://via.placeholder.com/300?text=Library",
          },
          {
            title: "Günün Menüsü",
            image: "https://via.placeholder.com/300?text=Menu",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-4 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-40 h-40 object-cover rounded-full"
            />
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-500">Şaşırtıcı tarifleri keşfedin</p>
          </div>
        ))}
      </div>
    </section>
  );
}
