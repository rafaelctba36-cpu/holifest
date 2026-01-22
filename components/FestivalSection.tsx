
import React, { useEffect, useRef, useState } from 'react';

const FestivalSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { title: "Tradição", description: "Inspirado na milenar celebração indiana, o Holi marca o triunfo do bem e a renovação dos laços sociais.", image: "https://i.ibb.co/8LDyr6h3/AQNe1q-TAT2ekjg-U0-Oqv-CGi8c5-Es-Rt-XRM.webp", accent: "bg-orange-500" },
    { title: "Música", description: "Line-up com DJs nacionais e internacionais trazendo o melhor do EDM, Reggaeton e ritmos globais.", image: "https://i.ibb.co/Wvvw39B2/AQOfq-Al1-FPk-S6c-Lg-H7-SSi-L9-IFRx-YZPKZ.webp", accent: "bg-purple-600" },
    { title: "Cores", description: "O momento épico da explosão de Gulal (pó colorido), criando uma tela humana gigante de pura alegria.", image: "https://i.ibb.co/93vMyFrv/AQOKip6svr-DGh-N0hl-XMb-DZFVdq-Cu-UNBV.webp", accent: "bg-pink-500" }
  ];

  const galleryRow1 = ["https://i.ibb.co/fYSf1ZsH/celebrating-holi-festival-girl.webp", "https://i.ibb.co/rfFw2VrC/Holi-Festival-India.webp", "https://i.ibb.co/N6QwBXGy/94.webp", "https://i.ibb.co/yFVz6Tf5/images.webp"];
  const galleryRow2 = ["https://i.ibb.co/pvPKmFvk/ezgif-com-gif-maker1-660x372.webp", "https://i.ibb.co/7dqXHyrN/Happy-Holi-2.webp", "https://i.ibb.co/gM6MJPGT/qqq.webp", "https://i.ibb.co/23FksXwj/5.webp"];

  return (
    <section ref={sectionRef} id="o-festival" className="py-12 md:py-24 px-0 bg-[#FFF192] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10 mb-8 md:mb-20">
        <div className={`flex flex-col lg:flex-row items-start lg:items-end gap-4 md:gap-8 mb-10 md:mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-alfa text-4xl sm:text-7xl md:text-9xl text-black leading-tight tracking-tight py-2">O FESTIVAL</h2>
          <div className="max-w-xl">
            <p className="font-inter text-sm md:text-xl text-black/80 font-light leading-relaxed">Muito mais que uma festa, uma experiência sensorial única. Reunimos milhares de pessoas para celebrar a <span className="font-bold"> vida</span> e a <span className="font-bold text-pink-600">felicidade</span>.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`group relative bg-white/40 backdrop-blur-sm border border-black/5 rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="h-[250px] md:h-[400px] overflow-hidden relative">
                <img src={feature.image} alt={feature.title} width="400" height="400" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-6 left-6 md:left-8">
                  <span className="font-alfa text-2xl md:text-4xl text-white drop-shadow-lg uppercase">{feature.title}</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="font-inter text-black/70 text-sm md:text-lg leading-snug">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* RESTAURAÇÃO DAS DUAS LINHAS DE MARQUEE */}
      <div className="mt-12 md:mt-32 space-y-4 md:space-y-8 pointer-events-none">
        {/* Linha 1: Move para a Esquerda */}
        <div className="relative flex overflow-hidden group rotate-[-1deg]">
          <div className="flex animate-marquee gap-3 md:gap-6 py-2 px-2 min-w-full">
            {[...galleryRow1, ...galleryRow1].map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-[180px] h-[240px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[20px] md:rounded-[32px] border-4 border-white shadow-xl">
                <img src={img} width="450" height="300" loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Holi Moment" />
              </div>
            ))}
          </div>
        </div>

        {/* Linha 2: Move para a Direita (Reverse) */}
        <div className="relative flex overflow-hidden group rotate-[1deg]">
          <div className="flex animate-marquee-reverse gap-3 md:gap-6 py-2 px-2 min-w-full">
            {[...galleryRow2, ...galleryRow2].map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-[180px] h-[240px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[20px] md:rounded-[32px] border-4 border-white shadow-xl">
                <img src={img} width="450" height="300" loading="lazy" decoding="async" className="w-full h-full object-cover" alt="Holi Moment" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
