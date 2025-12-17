import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = "Contato via Site Trust Network";
    const body = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`;
    
    // Constrói o link mailto com os dados preenchidos
    const mailtoLink = `mailto:trustnetwork.vendas@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "258876124389";
    const message = "Olá, vim através do site e gostaria de falar com a Trust Network.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contact" className="bg-black pt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                {/* Logótipo Imagem Ampliado (w-24 h-24) com Fundo Luminoso */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  
                  {/* Efeito Luminoso de Fundo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-tech-trust/20 via-white/5 to-tech-accent/20 rounded-full blur-2xl"></div>
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-xl animate-pulse"></div>

                  <img 
                    src="https://i.ibb.co/VckMmPhQ/logo.png" 
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://ibb.co/VckMmPhQ";
                    }}
                    alt="Trust Network Logo" 
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                  />
                </div>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Especialistas em soluções de comunicação corporativa, redes seguras e automação de atendimento. Conectando sua empresa ao futuro.
             </p>
             <div className="flex gap-4">
               <SocialIcon href="https://web.facebook.com/profile.php?id=825124389" icon={<Facebook size={18} />} />
               <SocialIcon href="#" icon={<Linkedin size={18} />} />
               <SocialIcon href="#" icon={<Instagram size={18} />} />
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-tech-trust transition-colors">Início</a></li>
              <li><a href="#voip" className="hover:text-tech-trust transition-colors">VoIP Server</a></li>
              <li><a href="#trustguard" className="hover:text-tech-trust transition-colors">TrustGuard</a></li>
              <li><a href="#store" className="hover:text-tech-trust transition-colors">Loja</a></li>
              <li><a href="#contact" className="hover:text-tech-trust transition-colors">Suporte Técnico</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Contactos</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tech-trust shrink-0" />
                <span>Rua Samuel Dambula, nº 34, R/C<br/>Maputo, Moçambique</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = "mailto:trustnetwork.vendas@outlook.com"}>
                <Mail className="w-5 h-5 text-tech-trust shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">trustnetwork.vendas@outlook.com</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer" onClick={handleWhatsAppClick}>
                <Phone className="w-5 h-5 text-tech-trust shrink-0 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">+258 87 612 4389</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-tech-trust shrink-0" />
                <span>Seg - Sex: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Fale Conosco</h4>
            <form onSubmit={handleSendEmail} className="space-y-3">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu Nome" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-tech-trust focus:outline-none focus:ring-1 focus:ring-tech-trust"
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu Email" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-tech-trust focus:outline-none focus:ring-1 focus:ring-tech-trust"
                required
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensagem" 
                rows={3}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-tech-trust focus:outline-none focus:ring-1 focus:ring-tech-trust"
                required
              ></textarea>
              <button type="submit" className="w-full bg-tech-trust hover:bg-green-500 text-black font-bold py-2 rounded-lg transition-colors text-sm">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 py-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Trust Network Lda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; href?: string }> = ({ icon, href = "#" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-tech-trust hover:text-black transition-all">
    {icon}
  </a>
);

export default Footer;