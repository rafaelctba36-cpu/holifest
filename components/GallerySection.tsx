
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from './ui/carousel';

const GallerySection: React.FC = () => {
  const slideData = [
    {
      title: "Explosão de Vida",
      button: "Ver Detalhes",
      src: "https://i.ibb.co/2YfH8ctQ/AQN0yb-REA1-Zc-Lo-jkp-NB94-HI7-Cp-Wbqdg.webp",
    },
    {
      title: "Pura Felicidade",
      button: "Ver Detalhes",
      src: "https://i.ibb.co/LdS0H7Xx/holi.webp",
    },
    {
      title: "Energia Infinita",
      button: "Ver Detalhes",
      src: "https://i.ibb.co/wNKFftVJ/602386993-962839176904708-530833.webp",
    },
    {
      title: "Cores da Alma",
      button: "Ver Detalhes",
      src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Ritmo e Movimento",
      button: "Ver Detalhes",
      src: "https://i.ibb.co/RTz65qzm/AQPfkv6k-Qs-M5g9-YHalim-Pbhg-ig-Pq-F5s.webp",
    },
  ];

  return (
    <section 
      id="galeria"
      className="relative w-full pt-4 pb-12 md:pb-20 bg-[#FFF192] overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-16 md:mb-32 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-alfa text-5xl md:text-8xl lg:text-[128px] leading-none text-black uppercase tracking-tight py-4"
        >
          GALERIA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 md:mt-10 text-base md:text-2xl font-inter font-light text-black/80 max-w-3xl mx-auto uppercase tracking-wide"
        >
          Momentos Inesquecíveis
        </motion.p>
      </div>

      <div className="relative w-full h-[85vmin] md:h-[95vmin] flex items-center justify-center overflow-visible">
        <Carousel slides={slideData} />
      </div>

      <div className="absolute top-1/4 -right-40 w-40 md:w-[600px] h-40 md:h-[600px] bg-pink-500/5 rounded-full blur-[140px] pointer-events-none"></div>
    </section>
  );
};

export default GallerySection;
