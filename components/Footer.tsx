import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Facebook, Linkedin, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Cria o assunto e o corpo do email com base no formulário
    const subject = `Contacto via Site: ${formData.name}`;
    const body = `Nome: ${formData.name}
Email: ${formData.email}

Mensagem:
${formData.message}`;

    // Redireciona para o cliente de email
    window.location.href = `mailto:trustnetwork.vendas@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer id="contact" className="bg-black pt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-tech-trust">
                    <path d="M15 45 C15 45 35 20 50 20 C65 20 85 45 85 45" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <path d="M28 58 C28 58 40 45 50 45 C60 45 72 58 72 58" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <path d="M35 75 Q 50 60 65 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <circle cx="35" cy="88" r="6" fill="currentColor" />
                    <circle cx="65" cy="88" r="6" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl tracking-wide text-white leading-none">
                    TRUST
                  </span>
                  <span className="font-sans text-sm tracking-[0.1em] text-tech-trust font-medium leading-none lowercase">
                    network lda
                  </span>
                </div>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Especialistas em soluções de comunicação corporativa, redes seguras e automação de atendimento. Conectando sua empresa ao futuro.
             </p>
             <div className="flex gap-4">
               <SocialIcon icon={<Facebook size={18} />} />
               <SocialIcon icon={<Linkedin size={18} />} />
               <SocialIcon icon={<Instagram size={18} />} />
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-tech-trust transition-colors">Início</a></li>
              <li><a href="#voip" className="hover:text-tech-trust transition-colors">VoIP Server</a></li>
              <li><a href="#trustguard" className="hover:text-tech-trust transition-colors">TrustGuard</a></li>
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
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tech-trust shrink-0" />
                <a href="mailto:trustnetwork.vendas@outlook.com" className="hover:text-white transition-colors">trustnetwork.vendas@outlook.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-tech-trust shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span>+258 84 230 0058</span>
                  <span>+258 87 612 4389</span>
                </div>
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
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu Nome" 
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-tech-trust focus:outline-none focus:ring-1 focus:ring-tech-trust transition-all"
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu Email" 
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-tech-trust focus:outline-none focus:ring-1 focus:ring-tech-trust transition-all"
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..." 
                required
                rows={3}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:border-tech-trust focus:outline-none focus:ring-1 focus:ring-tech-trust resize-none transition-all"
              ></textarea>
              <button 
                type="submit"
                className="w-full group bg-tech-trust hover:bg-green-500 text-black font-bold py-2 rounded-lg transition-all text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
              >
                <span>Enviar Email</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
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

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-tech-trust hover:text-black transition-all">
    {icon}
  </a>
);

export default Footer;