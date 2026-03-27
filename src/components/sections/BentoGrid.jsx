import React from 'react';
import { motion } from 'framer-motion';
import { School, ShieldCheck, Landmark, ArrowRight } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-low dark:bg-[#1a1a1b]" id="alunos">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Alunos */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-1 md:col-span-2 bg-surface-container-lowest dark:bg-[#232325] p-10 rounded-lg tonal-stack-low flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
          >
            <div>
              <School className="text-primary-container mb-6" size={40} />
              <h3 className="text-3xl font-bold text-secondary dark:text-white mb-4">Para Alunos</h3>
              <p className="text-on-surface-variant dark:text-slate-400 text-lg leading-relaxed max-w-md">
                Controle total da sua agenda, acompanhamento de progresso em tempo real e escolha dos melhores instrutores da sua região.
              </p>
            </div>
            <a href="#cta" className="mt-12 flex items-center text-primary dark:text-primary-container font-bold group-hover:gap-4 transition-all cursor-pointer">
              Ver benefícios <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>

          {/* Side Card */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="bg-secondary dark:bg-[#1e3a6e] p-10 rounded-lg text-white flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Praticidade na palma da mão</h3>
              <p className="text-secondary-fixed opacity-80 decoration-secondary-container">Notificações inteligentes sobre suas aulas e simulados.</p>
            </div>
            <div className="mt-8 bg-white/10 p-4 rounded-lg relative z-10">
              <img 
                className="rounded-lg h-32 w-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjnGzPzOHWVkbbgraMPGClA0Lc2hTdE4j9hjV52LCc2OU6AQMUmAhlM-U_1lBJy18n34O6kqn0qi6UXX_CfjlzRzaRJHaHjcbmDkozLUCvpZOGLolW442yFQH2zXg5ypBUHOjW2qxGAbCBiFt1WR3n9Ml8frXlPLdMrHwG0VZVIcDi-zKFHlGXDb3g4IRZkHc9GESLd8Kj-jbbhye0avTfd1b2OoDzhAfHcLeu7LwXbXD2v86b87PymIsfP1tbgVSu9recB98seDU" 
                alt="Mobile App Preview"
              />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Instrutores */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-surface-container-lowest dark:bg-[#232325] p-10 rounded-lg shadow-sm hover:shadow-xl transition-all" id="instrutores"
          >
            <ShieldCheck className="text-primary-container mb-6" size={40} />
            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">Para Instrutores</h3>
            <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed">
              Gestão de horários otimizada, redução de faltas e maior visibilidade profissional.
            </p>
          </motion.div>

          {/* Autoescolas */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-1 md:col-span-2 bg-white dark:bg-[#232325] p-10 rounded-lg shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-10 items-center" id="autoescolas"
          >
            <div className="flex-1">
              <Landmark className="text-primary-container mb-6" size={40} />
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">Para Autoescolas</h3>
              <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed mb-6">
                Digitalize sua operação. Aumente a eficiência administrativa e a satisfação dos seus clientes com processos transparentes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-on-surface-variant dark:text-slate-400 font-medium text-sm">
                  <div className="p-1 bg-primary/10 rounded-full"><ArrowRight size={14} className="text-primary dark:text-primary-container" /></div> Dashboard financeiro
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant dark:text-slate-400 font-medium text-sm">
                  <div className="p-1 bg-primary/10 rounded-full"><ArrowRight size={14} className="text-primary dark:text-primary-container" /></div> Gestão de frota
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 bg-surface-container-high dark:bg-[#2a2a2c] h-full rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                className="rounded-lg shadow-md" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm2Bx4bQBSmNj9ScOuxzRxefsq2Aeyn1JdIeZyXwISr1O3rvfMaLk-7GtyeZlH3NlkwxkLpsVqxkrrg29I08kXUxl0iNpN7Cq3uEiB5YIfEWFeJco7mZDFeGBEhREQ42q44KWW6M4HQfCkIgP-2k4Bz11GzbzS6Gj81B8jK2CWGsSnOuqW1AzvhSd70aL4qIUOFXVXPyG4l4hGK0o8zMsarED3Iglhs25G-Axnk6aAqbfkUXvAzz8Zi2PzBKSPIAYns4TGkeX_CCk" 
                alt="Dashboard Preview"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
