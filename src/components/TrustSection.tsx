import React from 'react';
import { Language } from '../types';
import { TRUST_ITEMS } from '../constants';
import { Globe, MessageSquareText, MapPin, Sliders } from 'lucide-react';

interface TrustSectionProps {
  lang: Language;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ lang }) => {
  const items = TRUST_ITEMS[lang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-amber-600" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-emerald-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#0B1528]" />;
      case 'Sliders':
      default:
        return <Sliders className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="trust" className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x lg:divide-x-0 rtl:divide-x-reverse divide-slate-100">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start gap-3 ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:ltr:pl-6 sm:rtl:pr-6 lg:ltr:pl-0 lg:rtl:pr-0' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center shrink-0 shadow-2xs">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
