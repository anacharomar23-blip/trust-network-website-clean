import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VoipSection from './components/VoipSection';
import TrustGuardSection from './components/TrustGuardSection';
import StoreSection from './components/StoreSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-tech-dark overflow-x-hidden selection:bg-tech-trust selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <VoipSection />
        <TrustGuardSection />
        <StoreSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;