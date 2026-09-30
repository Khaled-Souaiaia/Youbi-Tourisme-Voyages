import React, { useState, useEffect } from 'react';
import { Language, ServiceKey, BudgetKey, InquiryFormData, FormErrors } from '../types';
import { AGENCY_INFO, SERVICE_OPTIONS, BUDGET_OPTIONS, buildWhatsAppMessage } from '../constants';
import { WhatsAppIcon } from './Header';
import {
  User,
  Phone,
  PlaneTakeoff,
  MapPin,
  Calendar,
  Users,
  Wallet,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  Loader2
} from 'lucide-react';

interface InquiryFormProps {
  lang: Language;
  selectedService: ServiceKey;
  onServiceChange: (service: ServiceKey) => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  lang,
  selectedService,
  onServiceChange,
}) => {
  const isAr = lang === 'ar';

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    serviceType: selectedService,
    destination: '',
    travelDate: '',
    returnDate: '',
    travelersCount: 1,
    budget: 'unknown',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync external selectedService changes (e.g. from service cards click)
  useEffect(() => {
    setFormData((prev) => ({ ...prev, serviceType: selectedService }));
  }, [selectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'travelersCount' ? Math.max(1, parseInt(value, 10) || 1) : value,
    }));

    if (name === 'serviceType') {
      onServiceChange(value as ServiceKey);
    }

    // Clear error for edited field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined, general: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = isAr ? 'يرجى إدخال الاسم الكامل' : 'Veuillez saisir votre nom complet';
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone) {
      newErrors.phone = isAr ? 'يرجى إدخال رقم الهاتف' : 'Veuillez saisir votre numéro de téléphone';
    } else if (cleanPhone.length < 9) {
      newErrors.phone = isAr
        ? 'يرجى إدخال رقم هاتف صحيح (مثال: 0550123456)'
        : 'Numéro de téléphone invalide (ex: 0550123456)';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = isAr ? 'يرجى تحديد وجهة السفر' : 'Veuillez indiquer une destination';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = isAr ? 'يرجى اختيار تاريخ السفر' : 'Veuillez choisir une date de départ';
    }

    if (!formData.travelersCount || formData.travelersCount < 1) {
      newErrors.travelersCount = isAr ? 'الحد الأدنى مسافر واحد' : 'Au moins 1 voyageur';
    }

    if (Object.keys(newErrors).length > 0) {
      newErrors.general = isAr
        ? 'يرجى ملء جميع المعلومات المطلوبة.'
        : 'Veuillez remplir tous les champs obligatoires.';
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setPopupBlocked(false);

    // Prepare WhatsApp Message
    const message = buildWhatsAppMessage(formData, lang);
    const whatsappUrl = `https://wa.me/213550666001?text=${encodeURIComponent(message)}`;

    setGeneratedText(message);
    setGeneratedUrl(whatsappUrl);

    // Emulate realistic preparation UX (700ms) then open WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);

      try {
        const win = window.open(whatsappUrl, '_blank');
        if (!win || win.closed || typeof win.closed === 'undefined') {
          // Popup blocked or not supported
          setPopupBlocked(true);
        }
      } catch (err) {
        console.error('Error opening WhatsApp URL:', err);
        setPopupBlocked(true);
      }
    }, 700);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="inquiry-form" className="py-20 lg:py-24 bg-white relative scroll-mt-16">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-1/3 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-bold mb-3">
            <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
            <span>
              {isAr ? 'إرسال مباشر إلى وكالة يوبي عبر واتساب' : 'Envoi direct via WhatsApp à l’agence'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight mb-3">
            {isAr ? 'أخبرنا عن رحلتك' : 'Parlez-nous de votre voyage'}
          </h2>
          <p className="max-w-xl mx-auto text-slate-600 text-base sm:text-lg">
            {isAr
              ? 'املأ المعلومات التالية وسنساعدك في الحصول على التفاصيل المناسبة لطلبك.'
              : 'Remplissez le formulaire et envoyez votre demande directement à notre agence via WhatsApp.'}
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-900/5 p-6 sm:p-10 lg:p-12">
          
          {/* General Error Banner */}
          {errors.general && (
            <div className="mb-8 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 text-sm animate-shake">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span className="font-semibold">{errors.general}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            
            {/* Group 1: Personal Information */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <User className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {isAr ? 'المعلومات الشخصية' : 'Informations personnelles'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold text-slate-800 mb-2">
                    {isAr ? 'الاسم الكامل' : 'Nom complet'}{' '}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={isAr ? 'أدخل اسمك الكامل' : 'Entrez votre nom complet'}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/60 focus:bg-white text-slate-900 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-slate-200 focus:border-amber-500 focus:ring-amber-100'
                      }`}
                      required
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-800 mb-2">
                    {isAr ? 'رقم الهاتف' : 'Numéro de téléphone'}{' '}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05 XX XX XX XX"
                      dir="ltr"
                      className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/60 focus:bg-white text-slate-900 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all text-left ${
                        errors.phone
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-slate-200 focus:border-amber-500 focus:ring-amber-100'
                      }`}
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Group 2: Travel Information */}
            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <PlaneTakeoff className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {isAr ? 'معلومات الرحلة والسفر' : 'Détails du voyage'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-bold text-slate-800 mb-2">
                    {isAr ? 'نوع الخدمة' : 'Type de service'}{' '}
                    <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-amber-100 focus:border-amber-500 transition-all cursor-pointer"
                  >
                    {SERVICE_OPTIONS[lang].map((s) => (
                      <option key={s.key} value={s.key}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="destination" className="block text-sm font-bold text-slate-800 mb-2">
                    {isAr ? 'الوجهة' : 'Destination'}{' '}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="destination"
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder={isAr ? 'إسطنبول، باريس، مكة...' : 'Istanbul, Paris, La Mecque...'}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/60 focus:bg-white text-slate-900 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.destination
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-200 focus:border-amber-500 focus:ring-amber-100'
                    }`}
                    required
                  />
                  {errors.destination && (
                    <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors.destination}</p>
                  )}
                </div>

                {/* Travel Date */}
                <div>
                  <label htmlFor="travelDate" className="block text-sm font-bold text-slate-800 mb-2">
                    {isAr ? 'تاريخ السفر' : 'Date de départ'}{' '}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="travelDate"
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/60 focus:bg-white text-slate-900 text-base focus:outline-none focus:ring-2 transition-all ${
                      errors.travelDate
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-200 focus:border-amber-500 focus:ring-amber-100'
                    }`}
                    required
                  />
                  {errors.travelDate && (
                    <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors.travelDate}</p>
                  )}
                </div>

                {/* Return Date (Optional) */}
                <div>
                  <label htmlFor="returnDate" className="block text-sm font-bold text-slate-800 mb-2">
                    {isAr ? 'تاريخ العودة' : 'Date de retour'}{' '}
                    <span className="text-xs font-normal text-slate-400">
                      ({isAr ? 'اختياري' : 'Optionnel'})
                    </span>
                  </label>
                  <input
                    id="returnDate"
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    min={formData.travelDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-amber-100 focus:border-amber-500 transition-all"
                  />
                </div>

                {/* Travelers Count */}
                <div>
                  <label htmlFor="travelersCount" className="block text-sm font-bold text-slate-800 mb-2">
                    {isAr ? 'عدد المسافرين' : 'Nombre de voyageurs'}{' '}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="travelersCount"
                    type="number"
                    name="travelersCount"
                    min="1"
                    max="100"
                    value={formData.travelersCount}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50/60 focus:bg-white text-slate-900 text-base focus:outline-none focus:ring-2 transition-all ${
                      errors.travelersCount
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-200 focus:border-amber-500 focus:ring-amber-100'
                    }`}
                    required
                  />
                  {errors.travelersCount && (
                    <p className="mt-1.5 text-xs font-semibold text-rose-600">{errors.travelersCount}</p>
                  )}
                </div>

                {/* Approximate Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-bold text-slate-800 mb-2">
                    {isAr ? 'الميزانية التقريبية' : 'Budget approximatif'}{' '}
                    <span className="text-xs font-normal text-slate-400">
                      ({isAr ? 'اختياري' : 'Optionnel'})
                    </span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-amber-100 focus:border-amber-500 transition-all cursor-pointer"
                  >
                    {BUDGET_OPTIONS[lang].map((b) => (
                      <option key={b.key} value={b.key}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-bold text-slate-800 mb-2">
                  {isAr ? 'ملاحظات إضافية' : 'Informations supplémentaires'}{' '}
                  <span className="text-xs font-normal text-slate-400">
                    ({isAr ? 'اختياري' : 'Optionnel'})
                  </span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={
                    isAr
                      ? 'أخبرنا بأي تفاصيل إضافية حول رحلتك...'
                      : 'Partagez tout détail utile concernant votre projet de voyage...'
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-slate-900 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-100 focus:border-amber-500 transition-all resize-y"
                />
              </div>
            </div>

            {/* Submit Button Section */}
            <div className="pt-4 border-t border-slate-100 flex flex-col items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-lg shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>{isAr ? 'جاري تجهيز طلبك...' : 'Préparation de votre demande...'}</span>
                  </>
                ) : (
                  <>
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                    <span>{isAr ? 'إرسال الطلب عبر WhatsApp' : 'Envoyer la demande via WhatsApp'}</span>
                  </>
                )}
              </button>

              <p className="mt-3 text-xs text-slate-500 text-center flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {isAr
                    ? 'سيفتح تطبيق WhatsApp مباشرة مع رسالة منسقة جاهزة للإرسال إلى 0550666001'
                    : 'WhatsApp s’ouvrira directement avec un message prêt à être envoyé au 0550666001'}
                </span>
              </p>
            </div>

          </form>

          {/* Submission Feedback / Fallback Banner if popup was blocked */}
          {submissionSuccess && (
            <div className="mt-8 p-6 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-slate-900 animate-fadeIn">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-emerald-950 mb-1">
                    {isAr ? 'تم تجهيز رسالة طلبك بنجاح!' : 'Votre message a été préparé avec succès !'}
                  </h4>
                  <p className="text-sm text-emerald-900 mb-4">
                    {popupBlocked
                      ? isAr
                        ? 'تعذر فتح WhatsApp تلقائياً. يرجى الضغط على الزر أدناه لفتح المحادثة أو التواصل معنا مباشرة على 0550666001.'
                        : 'Impossible d’ouvrir WhatsApp automatiquement. Cliquez sur le bouton ci-dessous pour ouvrir la discussion ou contactez-nous au 0550666001.'
                      : isAr
                        ? 'إذا لم يفتح تطبيق WhatsApp في نافذة جديدة، يمكنك الضغط على الزر أدناه مباشرة:'
                        : 'Si WhatsApp ne s’est pas ouvert automatiquement, cliquez sur le bouton ci-dessous :'}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>{isAr ? 'فتح WhatsApp الآن' : 'Ouvrir WhatsApp maintenant'}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>{copied ? (isAr ? 'تم النسخ!' : 'Copié !') : (isAr ? 'نسخ نص الرسالة' : 'Copier le message')}</span>
                    </button>
                  </div>

                  {/* Message Preview Box */}
                  <div className="mt-4 p-4 rounded-xl bg-white/90 border border-emerald-100 text-xs text-slate-700 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
                    {generatedText}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
