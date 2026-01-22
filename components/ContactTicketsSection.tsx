
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, Ticket, Send } from 'lucide-react';

const TicketCard: React.FC<{ type: string; price: string; features: string[]; color: string }> = ({ type, price, features, color }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-black/5 flex flex-col"
  >
    {/* Top Part */}
    <div className={`p-5 md:p-6 ${color} text-white`}>
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <Ticket className="w-6 h-6 md:w-8 md:h-8 opacity-80" />
        <span className="font-inter font-bold text-[10px] uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">2026 Edition</span>
      </div>
      <h3 className="font-alfa text-lg md:text-2xl uppercase">{type}</h3>
    </div>
    
    {/* Perforation Effect */}
    <div className="relative h-4 bg-white flex items-center justify-between px-[-8px]">
      <div className="absolute -left-2 w-4 h-4 bg-[#FFF192] rounded-full border-r border-black/5"></div>
      <div className="w-full border-t-2 border-dashed border-gray-200 mx-4"></div>
      <div className="absolute -right-2 w-4 h-4 bg-[#FFF192] rounded-full border-l border-black/5"></div>
    </div>

    {/* Bottom Part */}
    <div className="p-5 md:p-6 flex-1 flex flex-col">
      <div className="mb-4 md:mb-6">
        <span className="text-[10px] md:text-sm font-inter text-black/40 uppercase font-bold">Investimento</span>
        <div className="flex items-baseline gap-1">
          <span className="text-base md:text-lg font-bold">R$</span>
          <span className="text-3xl md:text-4xl font-alfa text-black">{price}</span>
        </div>
      </div>
      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-[12px] md:text-sm font-inter text-black/70">
            <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></div>
            {f}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 md:py-4 bg-black text-white font-inter font-bold rounded-xl md:rounded-2xl hover:bg-pink-600 transition-colors uppercase tracking-widest text-xs md:text-sm">
        Comprar Agora
      </button>
    </div>
  </motion.div>
);

const ContactTicketsSection: React.FC = () => {
  return (
    <section id="ingressos" className="relative w-full pt-12 pb-20 md:pt-20 md:pb-40 bg-[#FFF192] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-alfa text-4xl sm:text-5xl md:text-8xl lg:text-[128px] leading-none text-black uppercase tracking-tight py-4"
          >
            PARTICIPE
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-2 md:mt-6 text-sm md:text-2xl font-inter font-light text-black/80 max-w-3xl mx-auto uppercase tracking-[0.2em]"
          >
            Escolha seu ticket ou tire suas dúvidas
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
          
          {/* Column 1: Tickets */}
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center gap-4 mb-2 md:mb-8">
              <div className="h-px flex-1 bg-black/10"></div>
              <span className="font-inter font-bold uppercase tracking-widest text-[10px] md:text-sm text-black/40 whitespace-nowrap">Ingressos Disponíveis</span>
              <div className="h-px flex-1 bg-black/10"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <TicketCard 
                type="Standard" 
                price="120" 
                color="bg-orange-500"
                features={["Acesso ao evento", "1 Pacote de pó colorido", "Copo oficial"]}
              />
              <TicketCard 
                type="VIP Pass" 
                price="280" 
                color="bg-purple-600"
                features={["Área VIP exclusiva", "5 Pacotes de pó colorido", "Camiseta + Copo", "Open bar de água/suco"]}
              />
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-black/5 p-4 md:p-8 rounded-[24px] md:rounded-[32px] flex items-center gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-pink-600 w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div>
                <h4 className="font-alfa text-base md:text-xl text-black">LOCALIZAÇÃO</h4>
                <p className="font-inter text-xs md:text-base text-black/60">Arena Multiuso - Av. das Cores, 1000. São Paulo/SP</p>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="bg-white rounded-[24px] md:rounded-[48px] p-5 md:p-12 shadow-2xl shadow-pink-500/5 border border-black/5">
            <h3 className="font-alfa text-xl md:text-4xl text-black mb-6 md:mb-8 uppercase">Envie uma mensagem</h3>
            
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="font-inter font-bold text-[10px] uppercase tracking-widest text-black/40 ml-2">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#F8F8F8] border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none font-inter transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-inter font-bold text-[10px] uppercase tracking-widest text-black/40 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#F8F8F8] border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none font-inter transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-inter font-bold text-[10px] uppercase tracking-widest text-black/40 ml-2">Assunto</label>
                <select className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#F8F8F8] border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none font-inter transition-all appearance-none cursor-pointer text-sm">
                  <option>Dúvidas sobre ingressos</option>
                  <option>Imprensa & Parcerias</option>
                  <option>Trabalhe Conosco</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-inter font-bold text-[10px] uppercase tracking-widest text-black/40 ml-2">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#F8F8F8] border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none font-inter transition-all resize-none text-sm"
                ></textarea>
              </div>

              <button className="group w-full py-3 md:py-6 bg-black text-white font-alfa text-base md:text-xl rounded-xl md:rounded-2xl hover:bg-pink-600 transition-all flex items-center justify-center gap-3 overflow-hidden relative">
                <span className="relative z-10">ENVIAR AGORA</span>
                <Send className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 md:mt-12 pt-6 md:pt-12 border-t border-black/5 flex flex-wrap justify-between gap-4 md:gap-6">
              <div className="space-y-2 md:space-y-4">
                <div className="flex items-center gap-3 text-black/60 font-inter text-xs md:text-sm">
                  <Mail className="w-4 h-4 text-pink-500" />
                  <span className="break-all">contato@holifestival.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-black/60 font-inter text-xs md:text-sm">
                  <Phone className="w-4 h-4 text-pink-500" />
                  <span>(11) 9999-9999</span>
                </div>
              </div>
              
              <div className="flex gap-2 md:gap-4">
                {[Instagram, Mail, Phone].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
                    className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center text-black transition-all"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTicketsSection;
