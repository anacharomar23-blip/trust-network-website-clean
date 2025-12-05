import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, Mic, BarChart3, Database, Headphones, Server } from 'lucide-react';

const VoipSection: React.FC = () => {
  return (
    <section id="voip" className="py-24 bg-tech-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-tech-trust font-display text-lg tracking-widest uppercase mb-2"
          >
            Comunicações Unificadas
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            TRUST VoIP SERVER
          </motion.h3>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Uma plataforma completa que integra PABX, Call Center e URA Interativa, permitindo que sua empresa realize ligações de qualquer dispositivo conectado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Module 1: VoIP PABX */}
          <VoipCard 
            title="VoIP PABX" 
            icon={<Phone className="w-8 h-8" />}
            description="Centralize a comunicação entre colaboradores na matriz, filiais e clientes."
            features={[
              "Ramais em desk-phones, PCs e mobiles",
              "Relatórios detalhados de chamadas",
              "Gravação de todas as chamadas",
              "Histórico para auditoria e segurança"
            ]}
            color="border-blue-500"
          />

          {/* Module 2: Call Center */}
          <VoipCard 
            title="CALL CENTER" 
            icon={<Headphones className="w-8 h-8" />}
            description="Central de atendimento para suporte, vendas, cobranças e gestão de clientes."
            features={[
              "Gestão de campanhas ativas e receptivas",
              "Formulários de atendimento integrados",
              "Monitoria de agentes em tempo real",
              "Login e logout de agentes"
            ]}
            color="border-tech-trust"
            highlight={true}
          />

          {/* Module 3: URA Interativa */}
          <VoipCard 
            title="URA INTERATIVA" 
            icon={<Database className="w-8 h-8" />}
            description="Automação inteligente para direcionar ligações de forma rápida e eficiente."
            features={[
              "Menus de voz personalizáveis",
              "Direcionamento automático por setor",
              "Redução do tempo de espera",
              "Otimização de recursos humanos"
            ]}
            color="border-purple-500"
          />
        </div>

        {/* URA Example Visual */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Mic size={120} />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">Exemplo de Fluxo URA</h4>
              <p className="text-gray-400 mb-6">
                "Seja bem-vindo a nossa instituição. Para melhorar o nosso atendimento todas chamadas serão gravadas."
              </p>
              <ul className="space-y-3">
                <UraOption num="1" text="Consultas sobre vendas" />
                <UraOption num="2" text="Suporte técnico" />
                <UraOption num="3" text="Departamento de facturamento" />
                <UraOption num="4" text="Horário e localização" />
                <UraOption num="5" text="Falar com agente" />
              </ul>
            </div>
            <div className="h-full flex items-center justify-center">
               <div className="relative w-full max-w-sm aspect-square">
                  {/* Abstract circular representation of connection */}
                  <div className="absolute inset-0 border-2 border-dashed border-gray-600 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border border-tech-trust/30 rounded-full flex items-center justify-center">
                     <div className="w-24 h-24 bg-tech-trust/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-tech-trust">
                        <Server className="text-tech-trust w-10 h-10" />
                     </div>
                  </div>
                  {/* Floating icons */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-slate-800 p-2 rounded-full border border-gray-600"><Users size={20} className="text-blue-400"/></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-slate-800 p-2 rounded-full border border-gray-600"><BarChart3 size={20} className="text-purple-400"/></div>
                  <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 bg-slate-800 p-2 rounded-full border border-gray-600"><Phone size={20} className="text-green-400"/></div>
                  <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 bg-slate-800 p-2 rounded-full border border-gray-600"><Database size={20} className="text-orange-400"/></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VoipCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  color: string;
  highlight?: boolean;
}> = ({ title, icon, description, features, color, highlight }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`bg-tech-card p-8 rounded-2xl border-t-4 ${color} ${highlight ? 'shadow-[0_0_30px_rgba(34,197,94,0.1)] ring-1 ring-white/10' : 'shadow-lg'}`}
  >
    <div className={`inline-flex p-3 rounded-lg bg-white/5 ${highlight ? 'text-tech-trust' : 'text-gray-300'} mb-6`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3 font-display">{title}</h3>
    <p className="text-gray-400 mb-6 min-h-[60px]">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start text-sm text-gray-300">
          <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full ${highlight ? 'bg-tech-trust' : 'bg-gray-500'}`}></span>
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const UraOption: React.FC<{ num: string; text: string }> = ({ num, text }) => (
  <li className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-transparent hover:border-gray-600 transition-colors">
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-tech-trust text-black font-bold text-xs">{num}</span>
    <span className="text-gray-200 text-sm">{text}</span>
  </li>
);

export default VoipSection;