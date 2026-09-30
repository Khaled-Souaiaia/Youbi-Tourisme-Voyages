import React from 'react';
import { Language } from '../types';
import { AGENCY_INFO } from '../constants';
import { WhatsAppIcon } from './Header';
import { MapPin, Phone, Smartphone, Clock, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full mb-3">
            {isAr ? 'عنابة، الجزائر' : 'Annaba, Algérie'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mb-4">
            {isAr
              ? 'تواصل مع وكالة يوبي للسياحة والأسفار'
              : 'Contactez Youbi Tourisme & Voyages'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {isAr
              ? 'فريقنا في خدمتكم للإجابة على جميع استفساراتكم وترتيب رحلاتكم القادمة.'
              : 'Notre équipe est à votre disposition pour vous conseiller et organiser vos voyages.'}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: Physical Address */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {isAr ? 'عنوان المقر' : 'Adresse de l’agence'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {isAr ? (
                  <>
                    <strong className="text-slate-900">Centre d’Affaires Tassili</strong>
                    <br />
                    14 Rue Okba Ibn Nafaa,
                    <br />
                    Annaba, Algérie
                  </>
                ) : (
                  <>
                    <strong className="text-slate-900">Centre d’Affaires Tassili</strong>
                    <br />
                    14 Rue Okba Ibn Nafaa,
                    <br />
                    Annaba, Algérie
                  </>
                )}
              </p>
            </div>

            {/* Google Maps Button */}
            <a
              href={AGENCY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'موقعنا على Google Maps' : 'Notre emplacement sur Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Card 2: Phones & WhatsApp */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">
                {isAr ? 'أرقام الهاتف وواتساب' : 'Téléphone & WhatsApp'}
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">
                    {isAr ? 'الهاتف الثابت' : 'Fixe'}:
                  </span>
                  <a
                    href="tel:038448226"
                    className="font-bold text-slate-900 hover:text-amber-600 transition-colors"
                    dir="ltr"
                  >
                    038 44 82 26
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 font-medium">
                    {isAr ? 'الهاتف النقال' : 'Mobile'}:
                  </span>
                  <a
                    href="tel:0550666001"
                    className="font-bold text-slate-900 hover:text-amber-600 transition-colors"
                    dir="ltr"
                  >
                    0550 66 60 01
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-950">
                  <span className="font-semibold flex items-center gap-1.5">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp:</span>
                  </span>
                  <a
                    href={AGENCY_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:underline"
                    dir="ltr"
                  >
                    0550 66 60 01
                  </a>
                </div>
              </div>
            </div>

            <a
              href={AGENCY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{isAr ? 'محادثة مباشرة عبر واتساب' : 'Discussion directe sur WhatsApp'}</span>
            </a>
          </div>

          {/* Card 3: Working Hours */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/80 text-indigo-600 flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {isAr ? 'أوقات العمل' : 'Horaires d’ouverture'}
              </h3>
              <p className="text-slate-500 text-xs mb-5">
                {isAr
                  ? 'مرحبًا بكم في مقرنا طوال أيام الأسبوع عدا يوم الجمعة'
                  : 'Nous vous accueillons toute la semaine sauf le vendredi'}
              </p>

              <div className="space-y-3 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">
                    {isAr ? AGENCY_INFO.hoursAr.workDays : AGENCY_INFO.hoursFr.workDays}
                  </div>
                  <div className="text-xs text-slate-500">
                    {isAr ? 'استقبال الزبائن والرد على الاستفسارات' : 'Accueil des clients & assistance'}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-900">
                  <div className="font-bold">
                    {isAr ? AGENCY_INFO.hoursAr.offDay : AGENCY_INFO.hoursFr.offDay}
                  </div>
                  <div className="text-xs text-rose-700/80">
                    {isAr ? 'عطلة أسبوعية' : 'Repos hebdomadaire'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>
                {isAr
                  ? 'خدمة الاستفسار عبر واتساب متاحة على مدار اليوم'
                  : 'Service de demande WhatsApp accessible à tout moment'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
