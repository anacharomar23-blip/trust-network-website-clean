import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VoipSection from './components/VoipSection';
import TrustGuardSection from './components/TrustGuardSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import ServicePage, { ServiceData } from './components/ServicePage';

// Data for the services pages
const servicesData: Record<string, ServiceData> = {
  'data-network': {
    id: 'data-network',
    title: 'Instalação de Redes de Dados',
    description: 'Projetamos e certificamos redes de dados modernas e seguras.',
    longDescription: [
      "Na Trust Network, projetamos, instalamos e certificamos redes de dados modernas, seguras e de alto desempenho, garantindo conectividade estável para empresas, instituições e residências.",
      "Fornecemos soluções completas de infraestrutura de rede, desde o planeamento até à implementação final, adaptadas às necessidades específicas de cada cliente."
    ],
    offers: [
      "Projeto e desenho de rede personalizado conforme o ambiente e objetivos do cliente",
      "Instalação de cabeamento estruturado (CAT6, CAT6A e fibra óptica)",
      "Montagem e organização de racks de telecomunicações",
      "Configuração de switches, routers e pontos Wi-Fi",
      "Certificação e testes de rede para garantir qualidade e desempenho",
      "Segmentação e segurança da rede (VLAN, firewall, controlo de acessos)",
      "Integração com sistemas VoIP, CCTV, controlo de acessos e servidores",
      "Manutenção preventiva e suporte técnico contínuo"
    ],
    whyUs: [
      "Técnicos especializados e certificados",
      "Uso de materiais de alta qualidade",
      "Cumprimento de normas internacionais de instalação",
      "Projetos entregues no prazo e com garantia",
      "Soluções escaláveis, preparadas para o crescimento"
    ],
    benefits: [
      "Internet mais rápida e estável",
      "Comunicação interna eficiente",
      "Maior segurança de dados",
      "Menos falhas e paragens técnicas",
      "Infraestrutura pronta para tecnologias futuras"
    ]
  },
  'voice-network': {
    id: 'voice-network',
    title: 'Instalação de Redes de Voz',
    description: 'Soluções completas de telefonia empresarial e VoIP.',
    longDescription: [
      "A Trust Network é especialista na implementação de redes de voz modernas, oferecendo soluções completas de telefonia empresarial e VoIP que garantem comunicação clara, estável e com redução significativa de custos.",
      "Projetamos e instalamos sistemas de voz totalmente integrados à sua infraestrutura de dados, permitindo maior eficiência operacional, mobilidade e controlo total das comunicações."
    ],
    offers: [
      "Projeto e planejamento de redes de voz personalizados",
      "Instalação de centrais telefônicas IP (trust voip)",
      "Configuração de ramais físicos e virtuais",
      "Implementação de SIP Trunk e integração com operadoras",
      "Cabeamento estruturado para voz e dados",
      "Instalação de telefones IP e softphones",
      "Montagem de call centers e filas de atendimento",
      "Configuração de gravação de chamadas e relatórios",
      "Segurança e controlo de acessos das comunicações",
      "Manutenção e suporte técnico especializado"
    ],
    whyUs: [
      "Profissionais com experiência comprovada em VoIP",
      "Redução de custos com chamadas",
      "Soluções escaláveis para qualquer porte",
      "Integração total com sistemas de CRM",
      "Atendimento personalizado e suporte contínuo"
    ],
    benefits: [
      "Comunicação mais eficiente e profissional",
      "Atendimento rápido aos clientes",
      "Monitoramento das chamadas em tempo real",
      "Relatórios completos de desempenho",
      "Mobilidade — atenda chamadas de qualquer lugar"
    ]
  },
  'call-center': {
    id: 'call-center',
    title: 'Call Center',
    description: 'Implementação completa de Call Centers profissionais.',
    longDescription: [
      "A Trust Network oferece implementação completa de Call Centers profissionais, utilizando tecnologia moderna para garantir atendimento de excelência, maior produtividade das equipas e total controlo das comunicações com os clientes.",
      "Desenvolvemos soluções sob medida, ideais para empresas de qualquer porte, desde pequenos centros de atendimento até grandes operações com dezenas de agentes."
    ],
    offers: [
      "Projeto e implementação completa de Call Center IP",
      "Instalação e configuração de plataformas Trust VoIP",
      "Criação de filas de atendimento (queues) inteligentes",
      "Distribuição automática de chamadas (ACD)",
      "Configuração de login de agentes por ramal ou softphone",
      "Painel em tempo real para monitoramento de chamadas",
      "Gravação de chamadas com histórico seguro",
      "Relatórios detalhados de desempenho (atendidas, perdidas, tempo, etc.)",
      "Integração com CRM e sistemas empresariais",
      "Treinamento de operadores e gestores",
      "Manutenção técnica e suporte contínuo"
    ],
    whyUs: [
      "Especialistas em soluções de Call Center profissional",
      "Plataformas confiáveis e de fácil utilização",
      "Sistemas escaláveis, que crescem com o seu negócio",
      "Técnicos certificados e implementação rápida",
      "Atendimento local com suporte dedicado"
    ],
    benefits: [
      "Atendimento mais rápido e organizado",
      "Aumento da satisfação dos clientes",
      "Maior controlo da equipa de atendimento",
      "Redução de perdas por chamadas não atendidas",
      "Dados completos para tomada de decisões"
    ]
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (pageId: string) => {
    // If the pageId starts with #, it's an anchor on the home page
    if (pageId.startsWith('#')) {
      setCurrentPage('home');
      // Use setTimeout to allow the home page to render before scrolling
      setTimeout(() => {
        const element = document.querySelector(pageId);
        if (element) {
          const headerOffset = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // It's a separate page
      setCurrentPage(pageId);
    }
  };

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <main>
          <Hero />
          <VoipSection />
          <TrustGuardSection />
          <GallerySection />
        </main>
      );
    }

    const serviceData = servicesData[currentPage];
    if (serviceData) {
      return (
        <ServicePage 
          data={serviceData} 
          onBack={() => setCurrentPage('home')} 
        />
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-tech-dark overflow-x-hidden selection:bg-tech-trust selection:text-white flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      
      {renderContent()}
      
      <Footer />
    </div>
  );
};

export default App;
