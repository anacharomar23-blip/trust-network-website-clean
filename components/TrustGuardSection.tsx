import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Network, Zap, Lock, Globe2, Coins } from 'lucide-react';

const TrustGuardSection: React.FC = () => {
  const handleRequestInstallation = () => {
    const email = "trustnetwork.vendas@outlook.com";
    const subject = "Solicitação de Instalação - TrustGuard";
    const body = `Olá,

Gostaria de solicitar a instalação do serviço TrustGuard (Plano 10.200 MT) para a minha empresa.

Por favor, entrem em contacto para fornecer mais detalhes sobre o processo de adesão.

Atenciosamente,
`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="trustguard" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-tech-dark"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-trust to-transparent opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
               <ShieldCheck className="text-tech-trust w-8 h-8" />
               <span className="text-tech-trust font-bold tracking-wider">SERVIÇO EXCLUSIVO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-6">
              Trust<span className="text-blue-500">Guard</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Um serviço inovador que redefine a forma como as empresas se conectam. 
              O TrustGuard cria uma rede privada segura (VPN) interligando a matriz e todas as filiais, 
              eliminando barreiras físicas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <BenefitItem 
                 icon={<Network />} 
                 title="Rede Única" 
                 desc="Interligação total entre matriz e filiais como se estivessem no mesmo prédio." 
               />
               <BenefitItem 
                 icon={<Lock />} 
                 title="Segurança VPN" 
                 desc="Dados criptografados ponta a ponta. Acesso restrito e controlado." 
               />
               <BenefitItem 
                 icon={<Zap />} 
                 title="Internet Integrada" 
                 desc="Pacote de internet de alta performance e estabilidade inclusa." 
               />
               <BenefitItem 
                 icon={<Coins />} 
                 title="Redução de Custos" 
                 desc="Elimine múltiplos servidores e custos de chamadas entre filiais." 
               />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Pricing Card */}
            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1 border border-slate-700 shadow-2xl">
              <div className="bg-tech-dark rounded-[20px] p-8 md:p-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-tech-trust/20 rounded-full blur-[50px]"></div>
                
                <div className="mb-8">
                  <h3 className="text-gray-400 font-medium uppercase tracking-widest text-sm">Plano TrustGuard</h3>
                  <div className="flex items-baseline mt-4">
                    <span className="text-5xl font-display font-bold text-white">10.200</span>
                    <span className="ml-2 text-xl text-tech-trust font-bold">MT</span>
                    <span className="ml-2 text-gray-500">/mês (fixo)</span>
                  </div>
                  <p className="mt-4 text-gray-400 text-sm">
                    Solução completa para empresas com múltiplas unidades.
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  <CheckItem text="Internet de Alta Performance inclusa" />
                  <CheckItem text="Infraestrutura de interligação (VPN)" />
                  <CheckItem text="Manutenção e Suporte Técnico contínuo" />
                  <CheckItem text="Chamadas internas gratuitas (VoIP)" />
                  <CheckItem text="Segurança de Nível Empresarial" />
                </div>

                <button 
                  onClick={handleRequestInstallation}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-600/20"
                >
                  Solicitar Instalação
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  *Ideal para empresas com filiais e equipes remotas.
                </p>
              </div>
            </div>

            {/* Background Element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-tech-trust to-blue-600 rounded-3xl blur-lg opacity-30 z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const BenefitItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col gap-2">
    <div className="text-tech-trust mb-1">{icon}</div>
    <h4 className="font-bold text-white text-lg">{title}</h4>
    <p className="text-sm text-gray-400">{desc}</p>
  </div>
);

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-tech-trust/20 flex items-center justify-center">
      <ShieldCheck size={12} className="text-tech-trust" />
    </div>
    <span className="text-gray-300">{text}</span>
  </div>
);

export default TrustGuardSection;