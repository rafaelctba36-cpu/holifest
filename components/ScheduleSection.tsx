
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface ScheduleItem {
  time: string;
  title: string;
  desc: string;
  isHighlight?: boolean;
}

const scheduleData: ScheduleItem[] = [
  { time: "15:00", title: "Abertura dos Portões", desc: "Recepção, DJ Ambient e abertura da praça de alimentação." },
  { time: "16:00", title: "Warm Up Cultural", desc: "DJ Set com fusão de sons indianos e ativações culturais." },
  { time: "16:30", title: "1ª Explosão de Cores", desc: "Contagem regressiva coletiva e Color Blast oficial.", isHighlight: true },
  { time: "17:15", title: "Performances & Dança", desc: "Dança Bollywood e apresentação Bhangra." },
  { time: "18:00", title: "DJ Set Energia Média", desc: "House, Afro House e ritmos Indian Party." },
  { time: "18:45", title: "2ª Explosão de Cores", desc: "Explosão sincronizada ao pôr do sol (Golden Hour).", isHighlight: true },
  { time: "19:30", title: "Intervalo & Experiências", desc: "Alimentação, drinks temáticos e ativações de marca." },
  { time: "20:30", title: "Show Principal – Parte 1", desc: "Alta energia, lasers e ambientação noturna." },
  { time: "21:30", title: "3ª Explosão de Cores", desc: "Night Colors: Pós iluminados por efeitos cênicos.", isHighlight: true },
  { time: "22:00", title: "DJ Set Noturno", desc: "Ritmos intensos e clima de pista cheia." },
  { time: "23:30", title: "4ª Explosão de Cores", desc: "Color Blast coletivo no momento de pico.", isHighlight: true },
  { time: "00:00", title: "DJ Headliner", desc: "Atração principal da noite em set prolongado." },
  { time: "01:30", title: "After Holi Experience", desc: "Deep House e Progressive hipnótico." },
  { time: "02:15", title: "Explosão Final de Cores", desc: "Última celebração coletiva com música épica.", isHighlight: true },
  { time: "03:00", title: "Encerramento Oficial", desc: "Agradecimentos e despedida do público." }
];

const ScheduleCard: React.FC<{ item: ScheduleItem; index: number }> = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className={`group relative flex flex-col md:flex-row items-center gap-3 md:gap-6 p-4 md:p-6 rounded-[24px] md:rounded-[32px] border transition-all duration-300 ${
      item.isHighlight 
      ? 'bg-pink-600/20 border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.2)]' 
      : 'bg-white/10 border-white/20 backdrop-blur-md'
    }`}
  >
    <div className={`flex-shrink-0 w-12 h-12 md:w-24 md:h-24 rounded-full flex items-center justify-center font-alfa text-base md:text-2xl border-2 transition-transform group-hover:rotate-12 ${
      item.isHighlight ? 'bg-pink-500 border-white text-white' : 'bg-black text-[#FFF192] border-black'
    }`}>
      {item.time}
    </div>
    <div className="text-center md:text-left flex-1">
      <h3 className={`font-alfa text-base md:text-2xl mb-1 md:mb-2 ${item.isHighlight ? 'text-pink-400' : 'text-white'}`}>
        {item.title}
      </h3>
      <p className="font-inter text-xs md:text-base text-white/70 leading-relaxed">
        {item.desc}
      </p>
    </div>
    {item.isHighlight && (
      <div className="absolute -top-2 right-2 md:-top-2 md:-right-2 bg-pink-500 text-white text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded-full uppercase tracking-tighter animate-bounce">
        Momento Épico
      </div>
    )}
  </motion.div>
);

const ScheduleSection: React.FC = () => {
  const [showFull, setShowFull] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const displayedItems = showFull ? scheduleData : scheduleData.slice(0, 6);

  return (
    <section 
      ref={containerRef}
      id="programação"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      <motion.div 
        style={{ y: videoY }}
        className="absolute inset-0 z-0 scale-110 will-change-transform"
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="none"
          poster="https://i.ibb.co/tTDTLYFF/AQN-f-Tq4-D1v-MZ6ug-Qcvh9-YSG3-Z2-VJEM5.webp"
          className="w-full h-full object-cover opacity-40 md:opacity-60"
        >
          <source src="https://pub-84250fef91cb460d9bc19fe5bbf56b28.r2.dev/Os%20Melhores%20Djs%20Da%20Cena%20Global%20Comandando.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 md:via-black/40 to-black"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-12 pb-6 md:py-32">
        <div className="text-center mb-8 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-alfa text-[9vw] sm:text-7xl md:text-8xl lg:text-[128px] text-white leading-tight tracking-tighter md:tracking-tight uppercase px-2"
          >
            PROGRAMAÇÃO
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-xs md:text-2xl text-pink-500 mt-2 md:mt-6 font-light uppercase tracking-[0.2em] max-w-3xl mx-auto"
          >
            12h de Experiência Imersiva
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 md:space-y-8">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, index) => (
              <ScheduleCard key={item.time} item={item} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 md:mt-20 flex justify-center px-4">
          <button 
            onClick={() => setShowFull(!showFull)}
            className="group relative bg-white text-black font-inter px-8 md:px-12 py-3 md:py-6 rounded-full text-sm md:text-xl font-bold shadow-2xl hover:bg-pink-500 hover:text-white transition-all duration-500 active:scale-95 overflow-hidden w-full max-w-sm md:max-w-md"
          >
            <span className="relative z-10">
              {showFull ? 'Ver Menos' : 'Ver Programação Completa'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
