import React from 'react';
import { Language } from '../types';
import { AGENCY_INFO } from '../constants';
import { WhatsAppIcon } from './Header';
import { ArrowDown, Send, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreClick }) => {
  const isAr = lang === 'ar';

  return (
    <section id="home" className="relative min-h-[88vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
      {/* Background Travel Photography with Deep Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=85&w=2074&auto=format&fit=crop"
          alt="Travel Airplane Wing Over Sunset"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/75 to-[#0A1628]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Location & Agency Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {isAr
              ? 'وكالة معتمدة في عنابة، الجزائر'
              : 'Agence de voyages à Annaba, Algérie'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-6">
          {isAr ? (
            <>
              رحلتك تبدأ مع <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300">يوبي للسياحة والأسفار</span>
            </>
          ) : (
            <>
              Votre voyage commence avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300">Youbi Tourisme & Voyages</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          {isAr
            ? 'خطط لرحلتك بسهولة واترك لنا مهمة مساعدتك في اختيار الخدمات المناسبة.'
            : 'Préparez votre voyage simplement et faites-nous part de votre projet.'}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-base sm:text-lg shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>{isAr ? 'اطلب رحلتك الآن' : 'Demander mon voyage'}</span>
            <Send className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
          </button>

          {/* Secondary CTA (WhatsApp) */}
          <a
            href={AGENCY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-base sm:text-lg backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
            <span>{isAr ? 'تواصل معنا عبر واتساب' : 'Nous contacter sur WhatsApp'}</span>
          </a>
        </div>

        {/* Small trust indicator under buttons */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? 'إجراءات سفر منظمة وموثوقة' : 'Formalités de voyage fiables'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{isAr ? 'رد ومتابعة عبر واتساب' : 'Réponse & suivi via WhatsApp'}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'مقر الوكالة: عنابة' : 'Bureau local à Annaba'}</span>
          </div>
        </div>

        {/* Scroll anchor arrow */}
        <div className="mt-8 flex justify-center">
          <a
            href="#trust"
            className="p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 animate-bounce opacity-70" />
          </a>
        </div>

      </div>
    </section>
  );
};
