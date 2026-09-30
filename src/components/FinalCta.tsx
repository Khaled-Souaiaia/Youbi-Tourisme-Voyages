import React from 'react';
import { Language } from '../types';
import { AGENCY_INFO } from '../constants';
import { WhatsAppIcon } from './Header';
import { ArrowUp, Send } from 'lucide-react';

interface FinalCtaProps {
  lang: Language;
  onScrollToForm: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ lang, onScrollToForm }) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative py-16 lg:py-20 bg-[#0B1528] text-white overflow-hidden">
      {/* Decorative background lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
          {isAr ? 'جاهز لرحلتك القادمة؟' : 'Prêt pour votre prochain voyage ?'}
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 mb-8 font-normal leading-relaxed">
          {isAr
            ? 'أرسل لنا تفاصيل رحلتك وسنتواصل معك عبر WhatsApp.'
            : 'Envoyez-nous les détails de votre projet et contactez notre agence via WhatsApp.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Scroll to Form CTA */}
          <button
            type="button"
            onClick={onScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>{isAr ? 'أرسل طلبك الآن' : 'Envoyer ma demande'}</span>
            <Send className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
          </button>

          {/* Direct WhatsApp button */}
          <a
            href={AGENCY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span>{isAr ? 'تواصل مباشرة عبر واتساب' : 'Contacter sur WhatsApp'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
