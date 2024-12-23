import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Ana İçerik */}
      <main className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-6">Daily Menu</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">🍝 Pasta Carbonara</div>
          <div className="p-4 border rounded-lg">🥗 Caesar Salad</div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
