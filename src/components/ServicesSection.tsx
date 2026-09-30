import React from 'react';
import { Language, ServiceKey } from '../types';
import { SERVICES_LIST } from '../constants';
import { Plane, Building2, Compass, MoonStar, Award, Car, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceKey: ServiceKey) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
}) => {
  const isAr = lang === 'ar';
  const services = SERVICES_LIST[lang];

  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-amber-500";
    switch (iconName) {
      case 'Plane':
        return <Plane className={iconClass} />;
      case 'Building2':
        return <Building2 className={iconClass} />;
      case 'Compass':
        return <Compass className={iconClass} />;
      case 'MoonStar':
        return <MoonStar className={iconClass} />;
      case 'Award':
        return <Award className={iconClass} />;
      case 'Car':
        return <Car className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full mb-3">
            {isAr ? 'عروضنا وخدماتنا' : 'Nos prestations'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mb-4">
            {isAr ? 'خدماتنا' : 'Nos services'}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {isAr
              ? 'حلول سفر متكاملة ومصممة لتسهيل تنقلاتكم وحجوزاتكم بكل راحة واطمئنان.'
              : 'Des solutions complètes de voyage adaptées à vos besoins personnels ou professionnels.'}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400/50 shadow-xs hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md">
                  {getServiceIcon(service.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA: Scrolls to inquiry form and preselects service */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.key)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#0B1528] text-slate-800 hover:text-white border border-slate-200 hover:border-[#0B1528] font-bold text-sm transition-all duration-200 cursor-pointer"
                >
                  <span>{isAr ? 'اطلب معلومات' : 'Demander des informations'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
