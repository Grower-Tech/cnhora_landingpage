import React from 'react';
import { motion } from 'framer-motion';

const Expansion = () => {
  return (
    <section className="py-32 bg-surface-container-highest dark:bg-[#1a1a1b] px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-secondary dark:text-white mb-8">Expansão e Liquidez Local</h2>
        <p className="text-on-surface-variant dark:text-slate-400 text-xl max-w-2xl mx-auto mb-20 leading-relaxed font-medium opacity-80">
          Estamos conectando o Brasil. Do interior às capitais, o CNHora garante que sempre haverá um instrutor qualificado perto de você.
        </p>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative h-[600px] bg-secondary rounded-lg overflow-hidden shadow-2xl tonal-stack-low"
        >
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhCBLJLcJSU8sYRxFMpU0t0hV988wqLf6JX7Lwk683-qHwl_WZ8C7TMmETQo4pHUyRkP_Ngt9Aoomf86XD7dcYGczZhEpvE2XTKV9Zi550DTaCjc9hhJ5VBIlphJAkz6fcGxjRvlMsl1gfPDsM3Gc6nBClcdGz8zx-Boq4XQnmqPULImEBUEJ-6THfdrhsspkHdVhpNQYoG_MaywjgtUUneaQG8FUHsGbfbP-ilvgtLRNK5Nyl3edXBpgjcZ-0ngnDVM1lvR6Lx7k" 
              alt="Brazil Highway Expansion"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 dark:bg-[#232325]/95 backdrop-blur-xl p-12 rounded-lg shadow-2xl max-w-md border-b-4 border-primary-container"
            >
              <p className="text-secondary dark:text-white font-black text-5xl mb-4 tracking-tighter">+50 Cidades</p>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-semibold leading-relaxed">Presença nacional em constante crescimento para facilitar sua jornada.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expansion;
