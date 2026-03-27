import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-24 bg-secondary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary-container font-bold tracking-[0.2em] uppercase text-sm mb-6 block"
        >
          MANIFESTO
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-10"
        >
          Aprender a dirigir deveria ser uma experiência de evolução, confiança e segurança.
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-primary-container mx-auto rounded-full"
        ></motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
