import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users } from 'lucide-react';

const Security = () => {
  const items = [
    {
      icon: <Shield className="text-primary dark:text-primary-container" size={24} />,
      title: 'Dados Protegidos',
      description: 'Utilizamos criptografia de ponta a ponta para garantir que todas as informações de alunos e parceiros estejam seguras.'
    },
    {
      icon: <Users className="text-primary dark:text-primary-container" size={24} />,
      title: 'Comunidade Validada',
      description: 'Todos os instrutores e autoescolas passam por um rigoroso processo de verificação antes de ingressarem na plataforma.'
    }
  ];

  return (
    <section className="py-32 bg-surface dark:bg-[#131314] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                className="rounded-lg shadow-2xl relative z-10" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl6zlEiqdQ0F5HzY0lwCxwfpvi5d3UdLLoBvm_FgFT3mMHh8MrohUApmEH444VGylFQeEkaprQpOM9k88YEwsU1BEGYDTtyBbpHFgnrEOn0Uk8XBKHZHpbckY_SXtcwVugMlZlNvwG3qGYSvSOFXr5-vS7EirQkddYIBhhNTlXqkF-ck6N6SATfKZZApJpXrLFLUBWrXQgYLCAYYcvL4amGHvdodsmFJYGozuhojJSEI41yGWniPFl-zfXFsf-1NMqXBHqtH4mRxw" 
                alt="Driving Safety"
              />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px] -z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary dark:text-white mb-12 leading-tight">Segurança e Confiança em Primeiro Lugar</h2>
            <div className="space-y-10">
              {items.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="bg-primary-container/10 dark:bg-primary-container/20 p-4 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-secondary dark:text-white mb-3">{item.title}</h4>
                    <p className="text-on-surface-variant dark:text-slate-400 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
