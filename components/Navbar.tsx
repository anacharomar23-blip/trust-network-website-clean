import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Rola para o topo se for home
    if (targetId === '#home') {
       window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Busca o elemento e rola com offset
    const element = document.querySelector(targetId);
    if (element) {
      // Ajustado o offset para 130 devido ao aumento do tamanho do logo/header
      const headerOffset = 130; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'VoIP Server', href: '#voip' },
    { name: 'TrustGuard', href: '#trustguard' },
    { name: 'Loja', href: '#store' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contactos', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-tech-dark/90 backdrop-blur-md border-b border-white/10 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group relative" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             {/* Logótipo Imagem Ampliado (Tamanho Duplicado: w-24 h-24) com Fundo Luminoso */}
             <div className="relative w-24 h-24 flex items-center justify-center transition-all duration-300 z-10">
                
                {/* Efeito Luminoso de Fundo (Backlight) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-tech-trust/20 rounded-full blur-2xl opacity-60 pointer-events-none group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/15 rounded-full blur-xl pointer-events-none group-hover:bg-white/25 transition-colors duration-500 animate-pulse"></div>
                
                <img 
                  src="https://i.ibb.co/VckMmPhQ/logo.png" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ibb.co/VckMmPhQ"; 
                  }}
                  alt="Trust Network Logo" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]"
                />
             </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative group px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tech-trust transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-5 py-2 rounded-full bg-tech-trust/10 border border-tech-trust/50 text-tech-trust hover:bg-tech-trust hover:text-white transition-all duration-300 font-bold text-sm cursor-pointer hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
              >
                Fale Conosco
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-tech-card/95 backdrop-blur-xl border-b border-gray-700 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-4 rounded-md text-base font-medium border-l-2 border-transparent hover:border-tech-trust transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;