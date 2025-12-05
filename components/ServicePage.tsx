import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap, Trophy, Lightbulb } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  offers: string[];
  whyUs: string[];
  benefits: string[];
}

interface ServicePageProps {
  data: ServiceData;
  onBack: () => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ data, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-tech-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50 z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-trust/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-tech-trust transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Início
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6">
            {data.title}
          </h1>
          <div className="w-24 h-1 bg-tech-trust mb-8"></div>
          <div className="text-xl text-gray-300 max-w-4xl leading-relaxed space-y-4">
            {data.longDescription.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: What We Offer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-tech-card/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full hover:border-tech-trust/30 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="text-tech-trust w-8 h-8" />
                <h2 className="text-2xl font-display font-bold">O que oferecemos</h2>
              </div>
              <ul className="space-y-4">
                {data.offers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tech-trust flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Why Choose Us & Benefits */}
          <div className="space-y-8">
            
            {/* Why Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-slate-900 to-tech-card border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-blue-400 w-8 h-8" />
                <h2 className="text-2xl font-display font-bold">Por que escolher a Trust Network?</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.whyUs.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <Zap className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-tech-trust/10 border border-tech-trust/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-yellow-400 w-8 h-8" />
                <h2 className="text-2xl font-display font-bold text-white">Resultados para o seu negócio</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {data.benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="mt-1 w-2 h-2 rounded-sm bg-tech-trust rotate-45"></div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl text-white mb-6">Pronto para modernizar sua infraestrutura?</h3>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                 contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block px-10 py-4 bg-tech-trust text-black font-bold text-lg rounded-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            Fale com um Especialista Agora
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default ServicePage;
