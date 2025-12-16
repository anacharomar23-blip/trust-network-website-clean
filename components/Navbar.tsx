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
      const headerOffset = 85; // Altura do menu + margem
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
          ? 'bg-tech-dark/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             {/* Custom Trust Network Logo SVG */}
             <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-tech-trust drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                  {/* Outer Arc */}
                  <path d="M15 45 C15 45 35 20 50 20 C65 20 85 45 85 45" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" className="group-hover:stroke-white transition-colors duration-300" />
                  {/* Middle Arc */}
                  <path d="M28 58 C28 58 40 45 50 45 C60 45 72 58 72 58" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
                  {/* Bridge/Smile */}
                  <path d="M35 75 Q 50 60 65 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
                  {/* Dots */}
                  <circle cx="35" cy="88" r="6" fill="currentColor" />
                  <circle cx="65" cy="88" r="6" fill="currentColor" />
                </svg>
             </div>
             
             <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-2xl tracking-wide text-white leading-none">
                  TRUST
                </span>
                <span className="font-sans text-sm tracking-[0.1em] text-tech-trust font-medium leading-none lowercase">
                  network lda
                </span>
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
                className="px-5 py-2 rounded-full bg-tech-trust/10 border border-tech-trust/50 text-tech-trust hover:bg-tech-trust hover:text-white transition-all duration-300 font-bold text-sm cursor-pointer"
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