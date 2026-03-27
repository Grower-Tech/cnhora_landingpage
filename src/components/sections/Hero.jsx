import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12 bg-surface dark:bg-[#131314] pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="display-hero text-secondary dark:text-white mb-6">
            O CNHora foi criado para transformar a maneira como alunos, instrutores e autoescolas se conectam.
          </h1>
          <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
            A plataforma definitiva para gerir, agendar e evoluir sua jornada rumo à habilitação com tecnologia de ponta e confiança.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-orange-gradient text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
            >
              Começar agora
            </motion.button>
            <motion.a
              href="#manifesto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-surface-container-highest dark:bg-slate-800 text-secondary dark:text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
            >
              Saber mais
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
          <div className="relative rounded-lg overflow-hidden shadow-2xl tonal-stack-low">
            <img 
              className="w-full h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4eEgXYksH9EyiCr4aJrTDRqmdc5RDIllUGy9kashs53oEyI5PDZKj75gRxZgTxoJO35EzCRoOg1OqsIe2JAfXU0tiuHqcH2-6FERaqf598ZlGvVliOpL7NzKR3KyFSGtTbFmbKCi99LLsSDIDSWwqgEGI-ftkX32TYM_yYWZfIBytstsuU6FEY-J55PFuFHT35fonMUfFVt8Bt-ankrotb25rWhh0L9cYDykEwZPtX5Fb4BHjP73g0_T_d_cDfpSv4CSXCTHTONk" 
              alt="Modern high-tech driving school interior"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
