import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

// --- ÁREA DE EDIÇÃO DE FOTOS ---
// Aqui você pode substituir as URLs pelas suas fotos reais.
// O tamanho recomendado é 800x600px ou proporção 4:3.
const galleryItems = [
  {
    id: 1,
    title: "Infraestrutura de Redes",
    description: "Cabeamento estruturado e organização de racks.",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Centrais VoIP",
    description: "Servidores de alta performance para comunicação.",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Call Center Moderno",
    description: "Equipamentos e software para atendimento eficiente.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Segurança de Dados",
    description: "Monitoramento e proteção de sistemas.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Conectividade",
    description: "Instalação de pontos de acesso e fibra óptica.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Suporte Técnico",
    description: "Equipa especializada pronta para ajudar.",
    image: "https://images.unsplash.com/photo-1551434678-e076c2236033?q=80&w=2670&auto=format&fit=crop"
  }
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-tech-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-tech-trust font-display text-lg tracking-widest uppercase mb-2">
            Nosso Portfólio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Galeria de Projetos
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            Conheça um pouco da nossa estrutura e dos serviços que entregamos com excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const GalleryCard: React.FC<{ item: typeof galleryItems[0], index: number }> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl h-72 border border-white/10 hover:border-tech-trust/50 transition-all duration-300"
    >
      {/* Image */}
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-xl font-display font-bold text-white mb-1 group-hover:text-tech-trust transition-colors">
          {item.title}
        </h4>
        <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          {item.description}
        </p>
      </div>

      {/* Hover Icon */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
        <ZoomIn size={20} />
      </div>
    </motion.div>
  );
};

export default GallerySection;
