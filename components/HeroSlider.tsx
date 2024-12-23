'use client'
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const HeroSlider = () => {
  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.next(); // Bir sonraki slayta geç
      }
    }, 3000); // 3000ms (3 saniye)

    return () => {
      clearInterval(interval); // Bileşen kaldırıldığında interval'i temizle
    };
  }, [sliderInstanceRef]);

  const slides = [
    {
      image: "/1arkaplan.png",
      title: "Akşam Yemekte Ne Var?",
      description: "Yeni tarifler bulmak için malzemeleri girin.",
    },
    {
      image: "/2arkaplan.png",
      title: "Favori Tarifleriniz",
      description: "Favori tariflerinizi burada bulabilirsiniz.",
    },
    {
      image: "/3arkaplan.png",
      title: "Günün Menüsü",
      description: "Bugün için önerilen menülerimizi keşfedin.",
    },
  ];

  return (
    <div ref={sliderRef} className="keen-slider">
      {slides.map((slide, index) => (
        <div key={index} className="keen-slider__slide">
          <div
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
