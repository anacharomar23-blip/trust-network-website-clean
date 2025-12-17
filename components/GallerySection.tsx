import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, CheckCircle2, Zap } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Instalação de Redes",
    description: "Instalação profissional de Redes de Dados e Voz com cabeamento estruturado certificado.",
    image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&w=800&q=80", // Server Room / Datacenter
  },
  {
    id: 2,
    title: "Sistemas VoIP",
    description: "Instalação e configuração de Sistemas de Comunicação VOIP avançados para empresas.",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=800&q=80", // Call center / Phone
  },
  {
    id: 3,
    title: "Energia Segura",
    description: "Instalação de UPS Centralizadas para garantir operação contínua e proteção elétrica.",
    image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80", // Tech / Circuit / Power
  },
  {
    id: 4,
    title: "Fibra Ótica",
    description: "Fusão e instalação de Redes de Fibra Ótica de alta velocidade e baixa latência.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // Fiber optic abstract
  },
  {
    id: 5,
    title: "Hardware Corporativo",
    description: "Comercialização de Equipamentos Informáticos de marcas líderes mundialmente.",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80", // CPU / Hardware
  },
  {
    id: 6,
    title: "Equipe Especializada",
    description: "Dispomos de técnicos altamente qualificados e certificados prontos para actuar.",
    image: "https://i.ibb.co/LzZ8CVgB/image.png", // Imagem atualizada conforme solicitado
  }
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-tech-dark relative overflow-hidden">
      {/* Elementos de fundo decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tech-trust/5 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-tech-trust font-display text-lg tracking-widest uppercase mb-2 flex items-center justify-center gap-2"
          >
            <ImageIcon size={18} /> Nosso Portfólio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            GALERIA DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-trust to-blue-500">SERVIÇOS</span>
          </motion.h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            Confira a excelência e a infraestrutura tecnológica que implementamos em nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer border border-slate-800 hover:border-tech-trust/50 transition-colors duration-500"
            >
              {/* Imagem de Fundo */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  onError={(e) => {
                    // Fallback visual silencioso se a imagem externa falhar
                    const target = e.target as HTMLImageElement;
                    if (item.id === 6 && !target.src.includes('retry')) {
                        // Tenta uma variação comum se o link direto estimado falhar
                        // target.src = "https://i.ibb.co/LzZ8CVgB/equipe.jpg"; 
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter group-hover:grayscale-0 grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
              </div>

              {/* Conteúdo Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end relative z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-tech-trust opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h4 className="text-xl font-display font-bold text-white group-hover:text-tech-trust transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    <p className="text-gray-300 text-sm border-l-2 border-tech-trust pl-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm p-2 rounded-full border border-white/10 group-hover:border-tech-trust group-hover:bg-tech-trust/10 transition-colors">
                     <CheckCircle2 size={16} className="text-gray-400 group-hover:text-tech-trust" />
                  </div>
                </div>
              </div>

              {/* Borda Tech Animada */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-tech-trust/30 rounded-xl transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;