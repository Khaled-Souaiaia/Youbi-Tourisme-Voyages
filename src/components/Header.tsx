import React, { useState } from 'react';
import { Language } from '../types';
import { AGENCY_INFO } from '../constants';
import { Compass, Menu, X, PhoneCall } from 'lucide-react';

// Custom WhatsApp SVG icon component
export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';

  const navLinks = [
    { href: '#home', label: isAr ? 'الرئيسية' : 'Accueil' },
    { href: '#services', label: isAr ? 'خدماتنا' : 'Services' },
    { href: '#inquiry-form', label: isAr ? 'طلب رحلة' : 'Demande' },
    { href: '#contact', label: isAr ? 'اتصل بنا' : 'Contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-[#0B1528] flex items-center justify-center text-amber-400 shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0B1528] font-['Plus_Jakarta_Sans',sans-serif]">
                Youbi <span className="text-amber-600">Voyages</span>
              </span>
              <span className="text-xs font-semibold text-slate-500 -mt-1">
                {isAr ? 'وكالة يوبي للسياحة والأسفار – عنابة' : 'Youbi Tourisme & Voyages – Annaba'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side: Lang Switcher & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${
                  isAr
                    ? 'bg-white text-[#0B1528] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="العربية"
              >
                العربية
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('fr')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${
                  !isAr
                    ? 'bg-white text-[#0B1528] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Français"
              >
                Français
              </button>
            </div>

            {/* Prominent WhatsApp Header CTA */}
            <a
              href={AGENCY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>
                {isAr ? 'تواصل معنا عبر واتساب' : 'Contactez-nous sur WhatsApp'}
              </span>
            </a>
          </div>

          {/* Mobile Right Controls: Lang switcher + Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Compact Lang Switcher */}
            <button
              type="button"
              onClick={() => onLanguageChange(isAr ? 'fr' : 'ar')}
              className="px-2.5 py-1.5 text-xs font-bold bg-slate-100 border border-slate-200 rounded-lg text-slate-800"
            >
              {isAr ? 'Français' : 'العربية'}
            </button>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={AGENCY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>
                {isAr ? 'تواصل معنا عبر واتساب' : 'Contactez-nous sur WhatsApp'}
              </span>
            </a>

            <a
              href={`tel:${AGENCY_INFO.landline.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium text-xs bg-slate-50"
            >
              <PhoneCall className="w-4 h-4 text-slate-500" />
              <span>038 44 82 26 / 0550 66 60 01</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
