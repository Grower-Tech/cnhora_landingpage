import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import cnhoraLogo from '/cnhora-logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-6 max-w-7xl mx-auto text-white">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img
              src={cnhoraLogo}
              alt="CNHora Logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold">CNHora</span>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
            Acelerando o futuro da educação no trânsito através de tecnologia e conexões humanas.
          </p>
          <div className="flex gap-6">
            <Globe className="text-slate-500 hover:text-primary-container cursor-pointer transition-colors" />
            <Mail className="text-slate-500 hover:text-primary-container cursor-pointer transition-colors" />
            <Phone className="text-slate-500 hover:text-primary-container cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-bold text-sm mb-8 tracking-widest text-primary-container uppercase">Plataforma</h4>
          <ul className="space-y-6">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Sobre nós</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Instrutores</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Autoescolas</a></li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-bold text-sm mb-8 tracking-widest text-primary-container uppercase">Legal</h4>
          <ul className="space-y-6">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacidade</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Termos</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Segurança</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 font-medium">© {currentYear} CNHora. Todos os direitos reservados.</p>
        <div className="flex gap-10">
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-semibold">Central de Ajuda</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-semibold">Suporte 24h</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
