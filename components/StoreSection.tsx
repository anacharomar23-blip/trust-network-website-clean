import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight, Cpu, Cable, Layers, Zap, Mail, MessageCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: string;
  image: string;
  features: string[];
}

// Lista completa de produtos
const products: Product[] = [
  {
    id: 1,
    name: "Cisco Switch Catalyst 24 Port POE",
    brand: "Cisco",
    category: "Networking",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=600&q=80",
    features: ["24 Portas PoE+", "Layer 2/3", "Gestão Nuvem"]
  },
  {
    id: 2,
    name: "Yeastar S100 VoIP PBX",
    brand: "Yeastar",
    category: "PABX IP",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=600&q=80",
    features: ["Até 100 Usuários", "30 Chamadas Simultâneas", "Modular"]
  },
  {
    id: 3,
    name: "Fanvil X-Series Deskphones",
    brand: "Fanvil",
    category: "Terminais",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    features: ["Visor Colorido", "HD Audio", "Dual Gigabit"]
  },
  {
    id: 4,
    name: "Mikrotik Router & Antenas",
    brand: "Mikrotik",
    category: "Wireless",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    features: ["Ponto-a-Ponto", "RouterOS Level 5", "Alta Potência"]
  },
  {
    id: 5,
    name: "Legrand Cablagem & Calhas",
    brand: "Legrand",
    category: "Infraestrutura",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&w=600&q=80",
    features: ["Tomadas RJ45 CAT6", "Calha 150x50", "Acabamento Premium"]
  },
  {
    id: 6,
    name: "Nexus Connectivity Kit",
    brand: "Nexus",
    category: "Cablagem",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=600&q=80",
    features: ["Cabo UTP CAT6", "Patch Panels", "Patch Cords"]
  },
  {
    id: 7,
    name: "Linkbasic Racks",
    brand: "Linkbasic",
    category: "Bastidores",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=600&q=80",
    features: ["Mural e Piso", "Ventilação Ativa", "Vários Tamanhos"]
  },
  {
    id: 8,
    name: "Yeastar Gateways TG Series",
    brand: "Yeastar",
    category: "Gateways",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1563770095-39d468f9a51d?auto=format&fit=crop&w=600&q=80",
    features: ["TG200 / TG400", "Conversão GSM/VoIP", "SMS API"]
  }
];

const StoreSection: React.FC = () => {
  const [showQuoteOptions, setShowQuoteOptions] = useState(false);

  return (
    <section id="store" className="py-24 bg-tech-dark relative min-h-[800px]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-tech-dark to-black opacity-80 pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-tech-trust font-display text-lg tracking-widest uppercase mb-2"
            >
              <ShoppingBag size={18} /> 
              <span>Trust Store</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              HARDWARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-trust to-teal-400">CERTIFICADO</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-400 max-w-2xl text-lg font-light"
            >
              Distribuidores oficiais das melhores marcas de tecnologia. Soluções completas desde a infraestrutura passiva até equipamentos ativos de rede.
            </motion.p>
          </div>
          
          <div className="relative z-20">
            <motion.button 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               onClick={() => setShowQuoteOptions(!showQuoteOptions)}
               className="px-8 py-4 bg-tech-trust/10 border border-tech-trust/50 text-tech-trust hover:bg-tech-trust hover:text-black rounded-sm transition-all flex items-center gap-3 font-bold whitespace-nowrap group backdrop-blur-sm"
            >
              SOLICITAR COTAÇÃO <ArrowRight size={20} className={`transition-transform duration-300 ${showQuoteOptions ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </motion.button>

            <AnimatePresence>
              {showQuoteOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-full min-w-[240px] bg-slate-900 border border-slate-700 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col backdrop-blur-xl"
                >
                   <a 
                     href="mailto:trustnetwork.vendas@outlook.com?subject=Solicitação de Cotação - Equipamentos"
                     className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-gray-300 hover:bg-tech-trust hover:text-black transition-colors"
                     onClick={() => setShowQuoteOptions(false)}
                   >
                     <Mail size={18} /> <span>Via Email</span>
                   </a>
                   <div className="h-px bg-slate-800 w-full"></div>
                   <a 
                     href="https://wa.me/258876124389?text=Gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20de%20equipamentos"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-gray-300 hover:bg-tech-trust hover:text-black transition-colors"
                     onClick={() => setShowQuoteOptions(false)}
                   >
                     <MessageCircle size={18} /> <span>Via WhatsApp</span>
                   </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Grid de Produtos Atualizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} delay={idx * 0.1} />
          ))}
        </div>

        {/* Cards de Benefícios / Marcas */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
           <BenefitCard 
             icon={<Cpu />} 
             title="Networking & Wireless" 
             brands="Cisco, Mikrotik e Ubiquiti" 
             color="blue"
           />
           <BenefitCard 
             icon={<Cable />} 
             title="Infraestrutura Passiva" 
             brands="Legrand, Linkbasic e Nexus" 
             color="green"
           />
           <BenefitCard 
             icon={<Layers />} 
             title="VoIP & Telefonia" 
             brands="Yeastar e Fanvil" 
             color="purple"
           />
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product, delay: number }> = ({ product, delay }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "258876124389";
    // Mensagem formatada conforme solicitado
    const message = `Posso saber mais sobre esse produto (${product.name}), e a descricao dos produto que aparecem na imagem`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-tech-trust/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
    >
      <div className="relative h-56 overflow-hidden bg-white/5 p-6 flex items-center justify-center shrink-0">
        <div className="absolute top-3 right-3 z-10 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-tech-trust font-bold border border-tech-trust/20 tracking-wider">
          {product.brand}
        </div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal" 
        />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-tech-trust/30 transition-colors"></div>
        
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
          <Zap size={12} className="text-tech-trust" /> {product.category}
        </span>
        
        <h4 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-tech-trust transition-colors">
          {product.name}
        </h4>
        
        <div className="space-y-2 mb-6 flex-grow">
          {product.features.map((feature, i) => (
            <p key={i} className="text-xs text-gray-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-tech-trust transition-colors"></span> 
              {feature}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
          <span className="text-sm font-bold text-gray-400 italic group-hover:text-white transition-colors">{product.price}</span>
          <button 
            onClick={handleWhatsAppClick}
            className="w-10 h-10 rounded-full bg-tech-trust/10 border border-tech-trust/30 text-tech-trust hover:bg-tech-trust hover:text-black hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] flex items-center justify-center transition-all duration-300 group/btn"
            title="Contactar via WhatsApp"
            aria-label="Contactar via WhatsApp"
          >
            <ArrowRight size={20} className="group-hover/btn:-rotate-45 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitCard: React.FC<{ icon: React.ReactNode, title: string, brands: string, color: 'blue' | 'green' | 'purple' }> = ({ icon, title, brands, color }) => {
  const colors = {
    blue: "text-blue-400 bg-blue-500/10",
    green: "text-tech-trust bg-tech-trust/10",
    purple: "text-purple-400 bg-purple-500/10"
  };

  return (
    <div className="flex items-center gap-4 p-6 bg-tech-card/30 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold font-display tracking-wide">{title}</h4>
        <p className="text-gray-400 text-sm mt-1">{brands}</p>
      </div>
    </div>
  );
};

export default StoreSection;