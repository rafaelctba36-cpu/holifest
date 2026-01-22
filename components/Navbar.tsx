
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'O festival', href: '#o-festival' },
    { label: 'Atrações', href: '#atrações' },
    { label: 'Programação', href: '#programação' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Ingressos', href: '#ingressos' },
    { label: 'Contato', href: '#ingressos' }
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 md:py-3 bg-white/10 backdrop-blur-lg' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Logo Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:scale-110 transition-transform duration-300">
             <circle cx="12" cy="12" r="10" fill="#db2777" fillOpacity="0.9" />
             <circle cx="24" cy="12" r="10" fill="#9333ea" fillOpacity="0.8" />
             <circle cx="18" cy="24" r="10" fill="#ea580c" fillOpacity="0.8" />
          </svg>
        </div>

        <div className="hidden md:flex mx-auto pointer-events-auto backdrop-blur-md bg-white/20 border border-white/30 px-8 py-3 rounded-full shadow-2xl shadow-black/5 items-center">
          <ul className="flex items-center justify-center gap-10 font-inter text-base font-medium text-black">
            {menuItems.map((item, index) => (
              <li key={index} className="group cursor-pointer relative py-1">
                <a 
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="transition-all duration-300 group-hover:text-pink-600 whitespace-nowrap block"
                >
                  {item.label}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-lg text-black z-[60] relative"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-[#FFF192] z-50 flex flex-col items-center justify-center md:hidden"
          >
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

            <ul className="flex flex-col items-center gap-8 z-10">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a 
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="font-alfa text-3xl text-black hover:text-pink-600 transition-colors uppercase tracking-tight"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
