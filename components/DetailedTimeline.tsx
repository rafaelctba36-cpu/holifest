
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  description: string;
  details?: string[];
  icon: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, details, icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`relative flex items-center justify-between mb-12 md:mb-32 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="hidden md:block w-5/12" />

      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-30">
        <motion.div 
          whileInView={{ 
            scale: [0, 1.2, 1],
            boxShadow: ["0 0 0px rgba(236,72,153,0)", "0 0 30px rgba(236,72,153,0.8)", "0 0 15px rgba(236,72,153,0.4)"]
          }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-black border-2 md:border-4 border-pink-500 flex items-center justify-center text-sm md:text-3xl z-40"
        >
          {icon}
        </motion.div>
      </div>

      <div className="w-full md:w-5/12 pl-10 md:pl-0">
        <motion.div 
          whileHover={{ y: -5, scale: 1.01 }}
          className="bg-white/40 backdrop-blur-xl p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-default"
        >
          <h3 className="font-alfa text-lg md:text-3xl text-black mb-2 md:mb-3 group-hover:text-pink-600 transition-colors">
            {title}
          </h3>
          <p className="font-inter text-sm md:text-lg text-black/80 leading-relaxed mb-3 md:mb-4">
            {description}
          </p>
          {details && (
            <ul className="space-y-1.5 md:space-y-2">
              {details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 font-inter text-xs md:text-sm text-black/60">
                  <span className="text-pink-500 mt-1">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const DetailedTimeline: React.FC = () => {
  const timelineData = [
    {
      title: "1. Explosão de Cores",
      description: "Várias vezes ao dia, todos os participantes jogam pó colorido no ar simultaneamente, criando um momento icônico.",
      icon: "✨",
      details: ["Momento oficial 'Color Blast'", "Pó Gulal biodegradável", "Sincronia com o palco principal"]
    },
    {
      title: "2. Música e DJ Sets",
      description: "DJs com diferentes estilos musicais — Bollywood, eletrônica, Afrohouse, Deephouse e Indian Party.",
      icon: "🎶",
      details: ["DJ Varaha Dasa (Psy ao House)", "Rajveer Ghai (Tabla + DJ)", "Set especial Indian Party"]
    },
    {
      title: "3. Danças e Arte",
      description: "Grupos de dança tradicional como Bhangra e espetáculos de dança clássica indiana Bharatanatyam.",
      icon: "💃",
      details: ["Aulões de dança Bollywood", "Bateria do bloco Bollywood", "Performances ao vivo"]
    },
    {
      title: "4. Gastronomia Temática",
      description: "Espaços com gastronomia indiana oferecendo pratos típicos e exóticos.",
      icon: "🍽️",
      details: ["Chicken Masala", "Samosas e Biryani", "Bebidas típicas"]
    },
    {
      title: "5. Experiência & Comunidade",
      description: "Espaços para fotos instagramáveis e vivências interativas relacionadas à cultura indiana.",
      icon: "📸",
      details: ["Cenários Instagramáveis", "Yoga e Meditação", "Workshops culturais"]
    },
    {
      title: "6. Momentos Interativos",
      description: "Aulão de dança e participação do público com jogos e experiências coletivas.",
      icon: "🎉",
      details: ["Integração total", "Brincadeiras coletivas", "Energia contagiante"]
    },
    {
      title: "7. Inclusão e Família",
      description: "Programação contínua para todas as idades, com ambiente pet friendly.",
      icon: "🧡",
      details: ["Espaço Kids dedicado", "Pet Friendly", "Acessibilidade total"]
    }
  ];

  return (
    <section 
      id="experiencia"
      className="relative w-full pt-0 pb-20 md:py-40 bg-[#FFF192] overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 mb-12 md:mb-40 text-center relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-alfa text-4xl sm:text-5xl md:text-8xl lg:text-[128px] leading-none text-black uppercase tracking-tight py-4"
        >
          EXPERIÊNCIA
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 md:mt-6 text-sm md:text-2xl font-inter font-light text-black/80 max-w-3xl mx-auto uppercase tracking-wide px-4"
        >
          Confira o que preparamos para você
        </motion.p>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative max-w-6xl">
        {/* Linha vertical - ajustada posição para mobile */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-2 transform md:-translate-x-1/2 z-20 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-pink-500 via-purple-600 to-orange-500 shadow-[0_0_20px_rgba(236,72,153,0.3)] opacity-90" />
        </div>

        <div className="relative z-30">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index}
              index={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedTimeline;
