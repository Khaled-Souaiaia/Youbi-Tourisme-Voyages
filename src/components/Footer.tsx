import React from 'react';
import { Language } from '../types';
import { AGENCY_INFO } from '../constants';
import { Compass, MapPin, Phone, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './Header';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const navLinks = [
    { href: '#home', label: isAr ? 'الرئيسية' : 'Accueil' },
    { href: '#services', label: isAr ? 'خدماتنا' : 'Services' },
    { href: '#inquiry-form', label: isAr ? 'طلب رحلة' : 'Demande' },
    { href: '#contact', label: isAr ? 'اتصل بنا' : 'Contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-800/80">
          
          {/* Logo & Subtitle */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif]">
                Youbi <span className="text-amber-500">Voyages</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isAr ? AGENCY_INFO.nameAr : AGENCY_INFO.name}
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500/70" />
              <span>Annaba, Algeria – Centre d'Affaires Tassili</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Quick Contact & WhatsApp */}
          <div className="flex flex-col md:items-end items-start gap-2 text-xs">
            <a
              href={AGENCY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>0550 66 60 01</span>
            </a>
            <div className="text-slate-400 flex items-center gap-2" dir="ltr">
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>038 44 82 26</span>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Youbi Tourisme et Voyages. Tous droits réservés.</p>
          <p className="text-slate-500">
            {isAr
              ? 'وكالة سياحة وأسفار معتمدة – عنابة'
              : 'Agence de Tourisme et de Voyages – Annaba'}
          </p>
        </div>
      </div>
    </footer>
  );
};
