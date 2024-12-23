'use client';
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Menu() {
  const aiGeneratedMenu = {
    title: "Günün Menüsü",
    description: "Yapay zeka tarafından oluşturulan bugünkü menünüz!",
    items: [
      {
        category: "Çorba",
        name: "Mercimek Çorbası",
        ingredients: [
          "1 su bardağı kırmızı mercimek",
          "1 adet soğan",
          "2 yemek kaşığı tereyağı",
          "1 yemek kaşığı un",
          "6 su bardağı su",
          "Tuz, karabiber",
        ],
        instructions: [
          "Soğanı doğrayıp tereyağında kavurun.",
          "Unu ekleyip 2-3 dakika daha kavurun.",
          "Kırmızı mercimeği ekleyin ve karıştırın.",
          "Üzerine suyu ekleyip mercimekler yumuşayana kadar pişirin.",
          "Tuz ve karabiber ekleyin, blender ile çorbayı pürüzsüz hale getirin.",
          "Sıcak servis edin.",
        ],
      },
      {
        category: "Ana Yemek",
        name: "Tavuklu Pilav",
        ingredients: [
          "1 su bardağı pirinç",
          "2 yemek kaşığı tereyağı",
          "200 gr haşlanmış tavuk",
          "2 su bardağı tavuk suyu",
          "Tuz, karabiber",
        ],
        instructions: [
          "Pirinçleri yıkayıp ılık suda 20 dakika bekletin.",
          "Tereyağını bir tencereye alıp eritin.",
          "Pirinçleri ekleyin ve 5 dakika kadar kavurun.",
          "Tavuk suyunu ekleyin ve tuz ile karabiberi ilave edin.",
          "Pirinç suyunu çekene kadar kısık ateşte pişirin.",
          "Haşlanmış tavukları ekleyin ve karıştırın.",
          "Sıcak servis edin.",
        ],
      },
      {
        category: "Yan Yemek",
        name: "Patates Kızartması",
        ingredients: [
          "4 adet patates",
          "Kızartma yağı",
          "Tuz",
        ],
        instructions: [
          "Patatesleri soyup ince dilimler halinde kesin.",
          "Kızartma yağını derin bir tavada ısıtın.",
          "Patatesleri altın sarısı olana kadar kızartın.",
          "Kağıt havlu üzerine alarak fazla yağını süzün.",
          "Tuz serperek sıcak servis edin.",
        ],
      },
      {
        category: "Salata",
        name: "Çoban Salatası",
        ingredients: [
          "2 adet domates",
          "2 adet salatalık",
          "1 adet soğan",
          "Yarım demet maydanoz",
          "Zeytinyağı, limon suyu, tuz",
        ],
        instructions: [
          "Domates, salatalık ve soğanı küp şeklinde doğrayın.",
          "Maydanozu ince ince kıyın.",
          "Tüm malzemeleri karıştırma kabına alın.",
          "Zeytinyağı, limon suyu ve tuz ekleyerek harmanlayın.",
          "Servis tabağına alarak sunum yapın.",
        ],
      },
      {
        category: "Tatlı",
        name: "Baklava",
        ingredients: [
          "500 gr baklavalık yufka",
          "200 gr tereyağı",
          "2 su bardağı ceviz içi",
          "3 su bardağı şeker",
          "2 su bardağı su",
          "Birkaç damla limon suyu",
        ],
        instructions: [
          "Yufkaları tepsiye aralarına tereyağı sürerek dizin.",
          "Her 3 yufkada bir ceviz serpin.",
          "Kalan tereyağını üzerlerine sürün.",
          "Baklavayı dilimleyin ve 180 derece fırında kızarana kadar pişirin.",
          "Şeker ve suyu kaynatarak şerbet hazırlayın, limon suyu ekleyin.",
          "Fırından çıkan sıcak baklavanın üzerine şerbeti dökün.",
          "Soğuduktan sonra servis edin.",
        ],
      },
    ],
    image: "1arkaplan.png",
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
      style={{ fontFamily: "Epilogue, 'Noto Sans', sans-serif" }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="layout-container flex h-full grow flex-col items-center">
        {/* Hero Section */}
        <div
          className="flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat p-8 w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${aiGeneratedMenu.image}')`,
          }}
        >
          <h1 className="text-white text-3xl font-bold">{aiGeneratedMenu.title}</h1>
          <p className="text-white text-lg mt-2">{aiGeneratedMenu.description}</p>
        </div>

        {/* Menu Items */}
        <div className="mt-6 bg-[#f3ece7] p-8 rounded-xl shadow-lg w-4/5">
          {aiGeneratedMenu.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mb-10"
            >
              <h2 className="text-[#1b130d] text-xl font-bold mb-4">
                {item.category}: {item.name}
              </h2>
              <div className="w-full">
                {/* Ingredients */}
                <h3 className="text-lg font-semibold mb-2 text-[#1b130d]">
                  Malzemeler:
                </h3>
                <ul className="list-disc list-inside text-[#1b130d]">
                  {item.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>

                {/* Instructions */}
                <h3 className="text-lg font-semibold mt-6 mb-2 text-[#1b130d]">
                  Yapılış:
                </h3>
                <ol className="list-decimal list-inside text-[#1b130d]">
                  {item.instructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
