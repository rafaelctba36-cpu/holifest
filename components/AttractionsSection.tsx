
import React from 'react';
import InteractiveBentoGallery from './ui/interactive-bento-gallery';

const AttractionsSection: React.FC = () => {
  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "Line-up de DJs",
      desc: "Os melhores artistas da cena global comandando as pickups.",
      url: "https://i.ibb.co/tTDTLYFF/AQN-f-Tq4-D1v-MZ6ug-Qcvh9-YSG3-Z2-VJEM5.webp",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 2,
      type: "video",
      title: "Momento das Cores",
      desc: "A cada hora, uma explosão sincronizada de cores e energia.",
      url: "https://pub-d597ca4843fb4a07b01724913eb7e06b.r2.dev/evento_com_foco_em_cores_como_o.mp4",
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Gastronomia Indiana",
      desc: "Sabores exóticos para completar sua experiência sensorial.",
      url: "https://i.ibb.co/3mVwBNR3/AQP0-Xrw-G5-Mg-MODX8-EF60nh1-EUVa-GDs5k.webp",
      span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
    },
    {
      id: 4,
      type: "image",
      title: "Espaço Kids",
      desc: "Diversão segura para toda a família em um ambiente lúdico.",
      url: "https://i.ibb.co/fdF5FN4f/AQNGP-g2u3h-D3yx9-Rny-QG4-QJOs-Gu-V5pf.webp",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 5,
      type: "video",
      title: "Performances Artísticas",
      desc: "Dança e arte de rua integradas ao espetáculo das cores.",
      url: "https://pub-e4fbb66da6d049dfa8870048bd844090.r2.dev/Dan%20A%20E%20Arte%20De%20Rua%20Integradas%20Ao.mp4",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 6,
      type: "image",
      title: "Workshop de Yoga",
      desc: "Conexão e bem-estar para equilibrar as energias.",
      url: "https://i.ibb.co/Kz9HDx7f/AQMlo-Qt-Hm-WA3-N8s-DA5-S1-ORvk-Yvy-Zf-A-D.webp",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
    },
    {
      id: 7,
      type: "video",
      title: "Palco Principal",
      desc: "O coração pulsante do festival com tecnologia de som de ponta.",
      url: "https://pub-da4ac215933c44afaf748ca36ef047e9.r2.dev/Palco%20Principal%20Cora%20O%20Pulsante%20Do%20Festival%20Com.mp4",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
    },
  ];

  return (
    <section id="atrações" className="relative w-full pt-8 pb-0 md:pb-24 md:py-24 z-30 overflow-hidden bg-[#FFF192]">
      {/* Imagem de Fundo com Blur */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://i.ibb.co/mV2hKWXh/img-6809.webp" 
          alt="Holi Background" 
          loading="lazy"
          className="w-full h-full object-cover blur-[80px] scale-110 opacity-40 animate-[pulse_15s_ease-in-out_infinite]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=2000&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF192] via-transparent to-[#FFF192]"></div>
      </div>

      <div className="relative z-10 w-full">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="ATRAÇÕES"
          description="Selecione abaixo e confira o evento"
        />
      </div>
      
      {/* Decorative Splashes */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default AttractionsSection;
