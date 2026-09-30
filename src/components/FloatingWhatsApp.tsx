import React from 'react';
import { Language } from '../types';
import { AGENCY_INFO } from '../constants';
import { WhatsAppIcon } from './Header';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <div
      className={`fixed bottom-6 z-50 transition-all duration-300 ${
        isAr ? 'right-6 sm:right-8' : 'right-6 sm:right-8'
      }`}
    >
      <a
        href={AGENCY_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isAr ? 'تحدث معنا عبر WhatsApp' : 'Parlez-nous sur WhatsApp'}
        className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-emerald-950/30 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Subtle breathing glow */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-6 h-6 text-white" />
        </div>

        <span className="relative font-bold text-sm sm:text-base tracking-wide whitespace-nowrap">
          {isAr ? 'تحدث معنا' : 'Parlez-nous'}
        </span>
      </a>
    </div>
  );
};
