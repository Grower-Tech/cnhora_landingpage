import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bell, Calendar, Award } from 'lucide-react';

const PlayStoreBadge = () => (
  <svg viewBox="0 0 135 40" className="h-14 w-auto">
    <rect width="135" height="40" rx="5" fill="#000" />
    <path
      d="M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.5-.7 1.1-.7 1.8s.2 1.3.7 1.8c.5.5 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.2z"
      fill="#fff"
    />
    <path d="M52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7h3.5v.7z" fill="#fff" />
    <path d="M55.3 13h-.8V7.7h-1.7V7H57v.7h-1.7V13z" fill="#fff" />
    <path d="M59.9 13V7h.8v6h-.8z" fill="#fff" />
    <path d="M64.1 13h-.8V7.7h-1.7V7h4.1v.7h-1.7V13z" fill="#fff" />
    <path
      d="M73.6 12.2c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2s-.3 1.6-.9 2.2zm-3.8-.5c.4.5 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.5.7-1.1.7-1.8s-.2-1.3-.7-1.8c-.4-.5-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.5-.7 1.1-.7 1.8s.2 1.3.7 1.8z"
      fill="#fff"
    />
    <path d="M75.6 13V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z" fill="#fff" />
    <path
      d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6s3.1 6.6 6.7 6.6c2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.1zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4v-7.6h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6.1h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z"
      fill="#fff"
    />
    <path
      d="M10.4 7.5c-.3.3-.5.8-.5 1.4v22.1c0 .6.2 1.1.5 1.4l.1.1 12.4-12.4v-.3L10.4 7.5z"
      fill="#00d9ff"
    />
    <path
      d="M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z"
      fill="#ffbc00"
    />
    <path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4" fill="#ff3a44" />
    <path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z" fill="#00f076" />
  </svg>
);

const FeatureItem = ({ icon: Icon, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 text-white/80"
  >
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
      <Icon size={20} className="text-primary-container" />
    </div>
    <span className="font-medium">{text}</span>
  </motion.div>
);

const CTA = () => {
  return (
    <section className="py-32 px-6 dark:bg-[#131314]" id="cta">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-lg p-12 md:p-20 relative overflow-hidden shadow-2xl tonal-stack-low"
        >
          {/* Background effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container opacity-20 blur-[120px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container opacity-20 blur-[120px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
              >
                <Smartphone size={18} className="text-primary-container" />
                <span className="text-white/90 text-sm font-semibold">Disponivel para Android</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Baixe o app e comece sua jornada hoje
              </h2>

              <p className="text-secondary-fixed text-lg mb-10 opacity-90 font-medium max-w-md mx-auto lg:mx-0">
                Tenha o controle total da sua habilitacao na palma da mao. Agende aulas, acompanhe seu progresso e conecte-se com instrutores.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <FeatureItem icon={Calendar} text="Agendamento facil" />
                <FeatureItem icon={Bell} text="Notificacoes em tempo real" />
                <FeatureItem icon={Award} text="Acompanhe seu progresso" />
                <FeatureItem icon={Smartphone} text="100% gratuito" />
              </div>

              {/* Play Store Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <PlayStoreBadge />
              </motion.a>

              <p className="text-white/50 text-sm mt-4">
                Em breve disponivel na App Store
              </p>
            </div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary-container/30 blur-3xl rounded-full scale-75"></div>

                {/* Phone frame */}
                <div className="relative w-64 md:w-72 h-[500px] md:h-[560px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                  {/* Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl"></div>

                    {/* App content preview */}
                    <div className="p-6 pt-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full liquid-orange-gradient flex items-center justify-center">
                          <span className="text-white font-bold text-lg">CN</span>
                        </div>
                        <div>
                          <p className="text-white font-bold">CNHora</p>
                          <p className="text-white/50 text-sm">Bem-vindo!</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-white/70 text-sm mb-2">Proxima aula</p>
                          <p className="text-white font-semibold">Quinta, 14:00</p>
                          <p className="text-primary-container text-sm">Aula pratica - Baliza</p>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-white/70 text-sm mb-2">Seu progresso</p>
                          <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                            <div className="liquid-orange-gradient h-2 rounded-full w-3/4"></div>
                          </div>
                          <p className="text-white/50 text-sm">18 de 24 aulas concluidas</p>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-4">
                          <p className="text-white/70 text-sm mb-2">Instrutor</p>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary-container"></div>
                            <p className="text-white font-medium">Carlos Silva</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
