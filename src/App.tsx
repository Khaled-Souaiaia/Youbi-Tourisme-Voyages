import React, { useState, useEffect } from 'react';
import { Language, ServiceKey } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { InquiryForm } from './components/InquiryForm';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [selectedService, setSelectedService] = useState<ServiceKey>('tourist_trip');

  // Sync document language, direction, and title
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (lang === 'ar') {
      document.title = 'Youbi Voyages | وكالة يوبي للسياحة والأسفار – Annaba';
    } else {
      document.title = 'Youbi Voyages | Youbi Tourisme & Voyages – Annaba';
    }
  }, [lang]);

  const scrollToForm = () => {
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceKey: ServiceKey) => {
    setSelectedService(serviceKey);
    scrollToForm();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Header */}
      <Header lang={lang} onLanguageChange={setLang} />

      {/* Hero Section */}
      <Hero lang={lang} onExploreClick={scrollToForm} />

      {/* Quick Trust Section */}
      <TrustSection lang={lang} />

      {/* Services Section */}
      <ServicesSection lang={lang} onSelectService={handleSelectService} />

      {/* Main Inquiry Form Section */}
      <InquiryForm
        lang={lang}
        selectedService={selectedService}
        onServiceChange={setSelectedService}
      />

      {/* Contact Section */}
      <ContactSection lang={lang} />

      {/* Final Call to Action */}
      <FinalCta lang={lang} onScrollToForm={scrollToForm} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
