
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const circleTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5);
          const y = (e.clientY / window.innerHeight - 0.5);
          const px = x * 40;
          const py = y * 40;
          
          if (circleTextRef.current) circleTextRef.current.style.transform = `translate3d(${px * 0.5}px, ${py * 0.5}px, 120px)`;
          if (heroImageRef.current) heroImageRef.current.style.transform = `translate3d(${px}px, ${py}px, 0)`;
          if (sidebarRef.current) sidebarRef.current.style.transform = `translate3d(${px * 0.1}px, 0, 0)`;
          
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="inicio"
      className="relative w-full min-h-[1050px] md:min-h-screen flex items-start md:items-center overflow-hidden bg-[#FFF192]"
      style={{ perspective: '1500px' }}
    >
      {/* MESH GRADIENT LAYER - Otimizado via CSS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-pink-500/30 rounded-full blur-[120px] animate-mesh-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/25 rounded-full blur-[100px] animate-mesh-2" />
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-orange-500/20 rounded-full blur-[110px] animate-mesh-3" />
        <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-yellow-400/40 rounded-full blur-[80px] animate-mesh-1" style={{ animationDelay: '-5s' }} />
      </div>

      {/* MOBILE VIDEO CONTAINER */}
      <div 
        className="absolute md:hidden z-10 pointer-events-none w-full left-0 overflow-hidden" 
        style={{ 
          top: '650px', 
          height: '400px', 
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 75%, transparent 100%)', 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 75%, transparent 100%)' 
        }}
      >
        <div className="relative w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto" 
            poster="https://i.ibb.co/fYSf1ZsH/celebrating-holi-festival-girl.webp" 
            className="w-full h-full object-cover scale-110 opacity-95"
          >
            <source src="https://pub-b4d0b8449040465da515a75b38c1e40e.r2.dev/Holi%20Festival%20Explos%20O%20De%20Vida%20Pessoas%20Juntas.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* SIDEBAR VERTICAL */}
      <div 
        ref={sidebarRef}
        className="absolute left-6 md:left-12 top-0 h-full z-40 flex flex-col items-center justify-center gap-12 pointer-events-none hidden md:flex transition-transform duration-700 ease-out"
      >
        <div className="flex flex-col items-center gap-6">
          <span className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-3 font-inter text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-black/80">
            <span className="text-xl">🎶</span> 12H DE MÚSICA
          </span>
          <div className="w-[1px] h-20 bg-black/10" />
        </div>
        <div className="flex flex-col items-center gap-6">
          <span className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-3 font-inter text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-black/80">
            <span className="text-xl">🎨</span> + 10 CORES
          </span>
          <div className="w-[1px] h-20 bg-black/10" />
        </div>
        <div className="flex flex-col items-center">
          <span className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-3 font-inter text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-black/80">
            <span className="text-xl">🌸</span> CELEBRE A PRIMAVERA
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-32 pt-28 md:pt-32 pb-10 relative z-30 flex flex-col items-start justify-start">
        <div className="max-w-4xl relative w-full">
          
          <h1 className="font-alfa text-black mb-6 md:mb-8 select-none tracking-tighter text-left relative z-10">
            <span className="block text-[13vw] sm:text-[64px] md:text-[100px] lg:text-[128px] leading-[0.85] opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">HOLI</span>
            <span className="block text-[13vw] sm:text-[64px] md:text-[100px] lg:text-[128px] leading-[0.85] opacity-0 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]">FESTIVAL</span>
          </h1>
          
          {/* Alterei o H2 para font-light para ficar ainda mais fino que o normal */}
<h2 className="font-inter font-light text-[16px] md:text-[22px] text-black leading-[1.3] mb-8 md:mb-12 max-w-[650px] opacity-0 animate-[fadeIn_0.6s_ease-out_0.3s_forwards] pr-4">
  O festival que transforma a primavera em um cenário vibrante de tintas, sorrisos e batidas contagiantes. Jogue cores para o alto e viva o momento.
</h2>

<div className="flex flex-wrap gap-3 md:gap-4 opacity-0 animate-[fadeIn_0.6s_ease-out_0.5s_forwards] w-full relative z-10 mb-10 lg:mb-0">
  {/* Alterado de font-bold para font-semibold (um negrito mais suave) */}
  <button className="group relative bg-black text-white font-inter px-8 py-4 md:px-10 md:py-5 rounded-full text-sm md:text-lg font-semibold shadow-2xl transition-all active:scale-95 overflow-hidden flex-1 md:flex-none justify-center">
    <span className="relative z-10">Garantir Ingresso</span>
  </button>

  {/* Alterado de font-bold para font-medium (quase normal, mas com um pouco de destaque) */}
  <button className="bg-[#EBD6A7]/50 backdrop-blur-md border-[1.5px] border-black text-black font-inter px-8 py-4 md:px-10 md:py-5 rounded-full text-sm md:text-lg font-medium hover:bg-black hover:text-white transition-all active:scale-95 shadow-lg flex-1 md:flex-none whitespace-nowrap">
    Ver Local
  </button>
</div>

          {/* TEXTO GIRATÓRIO */}
          <div 
            ref={circleTextRef}
            className="flex justify-center lg:block lg:absolute lg:right-[-80px] lg:top-[20px] z-40 mt-12 lg:mt-0 opacity-0 animate-[fadeIn_1.2s_ease-out_0.5s_forwards] will-change-transform transition-transform duration-700 ease-out"
          >
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] animate-rotate-slow">
              <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" fill="transparent" />
                <text className="font-inter font-bold text-[11px] md:text-[11px] uppercase tracking-[3.5px] fill-black">
                  <textPath xlinkHref="#circlePath">CELEBRE AS CORES • HOLI FESTIVAL 2026 • VIVA O MOMENTO •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 m-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-pink-600 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10c1.38,0,2.5-1.12,2.5-2.5c0-0.61-0.23-1.21-0.64-1.67 c-0.08-0.1-0.13-0.21-0.13-0.33c0-0.28,0.22-0.5,0.5-0.5H16c3.31,0,6-2.69,6-6C22,6.04,17.51,2,12,2z M6.5,13c-0.83,0-1.5-0.67-1.5-1.5 S5.67,10,6.5,10S8,10.67,8,11.5S7.33,13,6.5,13z M9.5,9c-0.83,0-1.5-0.67-1.5-1.5S8.67,6,9.5,6S11,6.67,11,7.5S10.33,9,9.5,9z M14.5,9c-0.83,0-1.5-0.67-1.5-1.5S13.67,6,14.5,6S16,6.67,16,7.5S15.33,9,14.5,9z M17.5,13c-0.83,0-1.5-0.67-1.5-1.5 s0.67-1.5,1.5-1.5,1.5,0.67,1.5,1.5S18.33,13,17.5,13z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* IMAGEM LCP OTIMIZADA */}
      <div ref={heroImageRef} className="absolute bottom-0 md:top-0 right-[-50px] pointer-events-none z-20 overflow-visible w-full max-w-[500px] md:max-w-none md:w-auto hidden md:block">
        <div className="relative flex-shrink-0 hero-image-mask w-full md:w-[1799px] h-auto aspect-[16/9] md:h-[1012px]">
          <img 
            src="https://i.ibb.co/JRdBxMrm/aqn5od-iofy-iqa-v-fgwi-fmj2rr-gs-1.webp" 
            alt="Holi Festival Energy" 
            width="1799"
            height="1012"
            className="w-full h-full object-contain md:object-right-top"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF192] via-[#FFF192]/60 md:via-[#FFF192]/20 to-transparent z-15 pointer-events-none" />
    </section>
  );
};

export default Hero;
