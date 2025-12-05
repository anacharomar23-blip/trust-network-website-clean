import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Server, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Grid & Effects */}
      <div className="absolute inset-0 z-0 bg-hero-pattern"></div>
      <div className="absolute inset-0 z-0 bg-[size:40px_40px] bg-grid-pattern opacity-10"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-trust/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-trust opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-tech-trust"></span>
          </span>
          <span className="text-sm font-medium text-gray-300 tracking-wide">Inovação em Telecomunicações</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 leading-tight"
        >
          CONECTANDO <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-trust to-teal-400">O FUTURO</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl text-xl text-gray-400 font-light"
        >
          Soluções avançadas em VoIP, Call Center e Segurança de Rede Unificada. 
          A Trust Network redefine como sua empresa se conecta, comunica e colabora.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#voip" className="group relative px-8 py-4 bg-tech-trust text-black font-bold text-lg rounded-sm overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              Explorar Soluções <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-sm hover:bg-white/5 hover:border-white/40 transition-all">
            Fale com um Consultor
          </a>
        </motion.div>

        {/* Floating Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
           <FeatureCard icon={<Server />} title="VoIP Server" desc="PABX & Call Center Avançado" delay={0.8} />
           <FeatureCard icon={<Shield />} title="TrustGuard" desc="Segurança VPN & Rede Unificada" delay={1.0} />
           <FeatureCard icon={<Activity />} title="Alta Performance" desc="Internet Estável & Monitoria" delay={1.2} />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string, delay: number}> = ({ icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="p-6 bg-tech-card/50 backdrop-blur-md border border-white/5 rounded-xl hover:border-tech-trust/50 transition-colors group cursor-default"
  >
    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-tech-trust mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </motion.div>
);

export default Hero;