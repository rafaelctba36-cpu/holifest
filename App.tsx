
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FestivalSection from './components/FestivalSection';
import DetailedTimeline from './components/DetailedTimeline';
import AttractionsSection from './components/AttractionsSection';
import ScheduleSection from './components/ScheduleSection';
import GallerySection from './components/GallerySection';
import ContactTicketsSection from './components/ContactTicketsSection';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF192] selection:bg-pink-500 selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <FestivalSection />
      <AttractionsSection />
      <DetailedTimeline />
      <ScheduleSection />
      <GallerySection />
      <ContactTicketsSection />
      
      <footer className="bg-black text-[#FFF192] py-12 px-12 text-center font-inter relative z-30">
        <div className="container mx-auto">
          <p className="text-xl font-alfa mb-4">HOLI FESTIVAL 2026</p>
          <p className="font-light opacity-70">© Todos os direitos reservados. Prepare as cores.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
