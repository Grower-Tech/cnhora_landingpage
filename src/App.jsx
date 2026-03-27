import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Manifesto from './components/sections/Manifesto';
import BentoGrid from './components/sections/BentoGrid';
import Security from './components/sections/Security';
import Expansion from './components/sections/Expansion';
import CTA from './components/sections/CTA';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('cnhora-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('cnhora-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-surface dark:bg-[#131314] scroll-smooth`}>
      <Helmet>
        <title>CNHora - Evoluindo a Condução</title>
        <meta name="description" content="A plataforma definitiva para gerir, agendar e evoluir sua jornada rumo à habilitação com tecnologia de ponta e confiança." />
      </Helmet>

      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Manifesto />
        <BentoGrid />
        <Security />
        <Expansion />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
