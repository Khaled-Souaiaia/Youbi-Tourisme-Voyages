import { Language, ServiceKey, BudgetKey, InquiryFormData } from './types';

export const AGENCY_INFO = {
  name: 'Youbi Tourisme et Voyages',
  nameAr: 'وكالة يوبي للسياحة والأسفار',
  city: 'Annaba',
  cityAr: 'عنابة',
  whatsappNumber: '0550666001',
  whatsappIntl: '+213550666001',
  whatsappLink: 'https://wa.me/213550666001',
  landline: '038 44 82 26',
  mobile: '0550 66 60 01',
  address: 'Centre d’Affaires Tassili, 14 Rue Okba Ibn Nafaa, Annaba, Algérie',
  addressAr: 'مركز الأعمال طاسيلي، 14 شارع عقبة بن نافع، عنابة، الجزائر',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Centre+d%27Affaires+Tassili+14+Rue+Okba+Ibn+Nafaa+Annaba+Algeria',
  hoursAr: {
    workDays: 'السبت – الخميس: 08:00 – 17:00',
    offDay: 'الجمعة: مغلق'
  },
  hoursFr: {
    workDays: 'Samedi – Jeudi: 08:00 – 17:00',
    offDay: 'Vendredi: Fermé'
  }
};

export const SERVICE_OPTIONS: Record<Language, { key: ServiceKey; label: string }[]> = {
  ar: [
    { key: 'tourist_trip', label: 'رحلة سياحية' },
    { key: 'flight_ticket', label: 'تذكرة طيران' },
    { key: 'hotel_booking', label: 'حجز فندق' },
    { key: 'organized_tour', label: 'رحلة منظمة' },
    { key: 'omra', label: 'عمرة' },
    { key: 'hajj', label: 'حج' },
    { key: 'car_rental', label: 'تأجير سيارة' },
    { key: 'other', label: 'استفسار آخر' },
  ],
  fr: [
    { key: 'tourist_trip', label: 'Voyage touristique' },
    { key: 'flight_ticket', label: "Billet d'avion" },
    { key: 'hotel_booking', label: "Réservation d'hôtel" },
    { key: 'organized_tour', label: 'Voyage organisé' },
    { key: 'omra', label: 'Omra' },
    { key: 'hajj', label: 'Hajj' },
    { key: 'car_rental', label: 'Location de voiture' },
    { key: 'other', label: 'Autre demande' },
  ],
};

export const BUDGET_OPTIONS: Record<Language, { key: BudgetKey; label: string }[]> = {
  ar: [
    { key: 'unknown', label: 'لا أعرف بعد' },
    { key: 'less_100k', label: 'أقل من 100,000 دج' },
    { key: '100k_200k', label: '100,000 – 200,000 دج' },
    { key: '200k_500k', label: '200,000 – 500,000 دج' },
    { key: 'more_500k', label: 'أكثر من 500,000 دج' },
  ],
  fr: [
    { key: 'unknown', label: 'Je ne sais pas encore' },
    { key: 'less_100k', label: 'Moins de 100 000 DA' },
    { key: '100k_200k', label: '100 000 – 200 000 DA' },
    { key: '200k_500k', label: '200 000 – 500 000 DA' },
    { key: 'more_500k', label: 'Plus de 500 000 DA' },
  ],
};

export const SERVICES_LIST: Record<
  Language,
  {
    key: ServiceKey;
    title: string;
    description: string;
    icon: string;
    image: string;
  }[]
> = {
  ar: [
    {
      key: 'flight_ticket',
      title: 'تذاكر الطيران',
      description: 'حجوزات رحلات الطيران الداخلية والدولية مع أفضل مسارات السفر والأسعار المناسبة.',
      icon: 'Plane',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'hotel_booking',
      title: 'حجز الفنادق',
      description: 'اختيار وحجز الإقامات الفندقية والمنتجعات بمختلف التصنيفات حول العالم.',
      icon: 'Building2',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'organized_tour',
      title: 'الرحلات المنظمة',
      description: 'برامج سياحية متكاملة تشمل الطيران، الإقامة، والجولات السياحية لأجمل الوجهات.',
      icon: 'Compass',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'omra',
      title: 'العمرة',
      description: 'تنظيم رحلات العمرة طوال مواسم العام مع توفير السكن القريب والخدمات المريحة.',
      icon: 'MoonStar',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'hajj',
      title: 'الحج',
      description: 'مرافقة حجاج بيت الله الحرام بأرقى مستويات التنظيم والإرشاد خلال موسم الحج.',
      icon: 'Award',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'car_rental',
      title: 'تأجير السيارات',
      description: 'تسهيل خدمات كراء المركبات والسيارات الحديثة لتنقلاتكم المريحة في الجزائر وخارجها.',
      icon: 'Car',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop'
    },
  ],
  fr: [
    {
      key: 'flight_ticket',
      title: 'Billetterie aérienne',
      description: 'Réservations de vols nationaux et internationaux sur les meilleures compagnies aériennes.',
      icon: 'Plane',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'hotel_booking',
      title: "Réservation d'hôtels",
      description: 'Sélection et réservation d’hôtels et hébergements de toutes catégories dans le monde entier.',
      icon: 'Building2',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'organized_tour',
      title: 'Voyages organisés',
      description: 'Circuits et séjours touristiques complets avec vols, hébergements et excursions.',
      icon: 'Compass',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'omra',
      title: 'Omra',
      description: 'Organisation de pèlerinages de la Omra toute l’année avec hébergements proches des lieux saints.',
      icon: 'MoonStar',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'hajj',
      title: 'Hajj',
      description: 'Accompagnement rigoureux et encadrement complet pour le pèlerinage du Hajj.',
      icon: 'Award',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800&auto=format&fit=crop'
    },
    {
      key: 'car_rental',
      title: 'Location de voitures',
      description: 'Mise à disposition de véhicules récents pour vos déplacements professionnels et privés.',
      icon: 'Car',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop'
    },
  ],
};

export const TRUST_ITEMS = {
  ar: [
    {
      title: 'خدمات سفر متنوعة',
      description: 'نساعدك في تنظيم مختلف احتياجات السفر.',
      icon: 'Globe'
    },
    {
      title: 'طلب سريع عبر واتساب',
      description: 'أرسل معلومات رحلتك مباشرة إلى الوكالة.',
      icon: 'MessageSquareText'
    },
    {
      title: 'وكالة في عنابة',
      description: 'Youbi Tourisme et Voyages – Annaba.',
      icon: 'MapPin'
    },
    {
      title: 'استفسار مخصص',
      description: 'أرسل تفاصيل رحلتك واحصل على المعلومات المناسبة.',
      icon: 'Sliders'
    },
  ],
  fr: [
    {
      title: 'Services de voyage variés',
      description: 'Nous vous accompagnons dans l’organisation de vos projets de voyage.',
      icon: 'Globe'
    },
    {
      title: 'Demande rapide via WhatsApp',
      description: 'Transmettez les détails de votre voyage directement à notre agence.',
      icon: 'MessageSquareText'
    },
    {
      title: 'Agence située à Annaba',
      description: 'Youbi Tourisme et Voyages – Annaba.',
      icon: 'MapPin'
    },
    {
      title: 'Demande personnalisée',
      description: 'Partagez vos critères pour recevoir les offres les plus adaptées.',
      icon: 'Sliders'
    },
  ]
};

export function buildWhatsAppMessage(data: InquiryFormData, lang: Language): string {
  const serviceLabel =
    SERVICE_OPTIONS[lang].find((s) => s.key === data.serviceType)?.label || data.serviceType;
  
  const budgetObj = BUDGET_OPTIONS[lang].find((b) => b.key === data.budget);
  const budgetLabel = budgetObj ? budgetObj.label : '';

  if (lang === 'ar') {
    let msg = `السلام عليكم، أريد الاستفسار عن رحلة.\n\n`;
    msg += `👤 الاسم: ${data.fullName.trim()}\n`;
    msg += `📱 الهاتف: ${data.phone.trim()}\n`;
    msg += `✈️ نوع الخدمة: ${serviceLabel}\n`;
    msg += `📍 الوجهة: ${data.destination.trim()}\n`;
    msg += `📅 تاريخ السفر: ${data.travelDate}\n`;
    if (data.returnDate) {
      msg += `📅 تاريخ العودة: ${data.returnDate}\n`;
    }
    msg += `👥 عدد المسافرين: ${data.travelersCount}\n`;
    if (data.budget && data.budget !== 'unknown') {
      msg += `💰 الميزانية: ${budgetLabel}\n`;
    }
    if (data.notes.trim()) {
      msg += `\n📝 ملاحظات:\n${data.notes.trim()}\n`;
    }
    msg += `\nتم إرسال الطلب من موقع Youbi Voyages.`;
    return msg;
  } else {
    let msg = `Bonjour, je souhaite demander des informations concernant un voyage.\n\n`;
    msg += `👤 Nom: ${data.fullName.trim()}\n`;
    msg += `📱 Téléphone: ${data.phone.trim()}\n`;
    msg += `✈️ Type de service: ${serviceLabel}\n`;
    msg += `📍 Destination: ${data.destination.trim()}\n`;
    msg += `📅 Date de départ: ${data.travelDate}\n`;
    if (data.returnDate) {
      msg += `📅 Date de retour: ${data.returnDate}\n`;
    }
    msg += `👥 Nombre de voyageurs: ${data.travelersCount}\n`;
    if (data.budget && data.budget !== 'unknown') {
      msg += `💰 Budget: ${budgetLabel}\n`;
    }
    if (data.notes.trim()) {
      msg += `\n📝 Informations supplémentaires:\n${data.notes.trim()}\n`;
    }
    msg += `\nDemande envoyée depuis le site Youbi Voyages.`;
    return msg;
  }
}
