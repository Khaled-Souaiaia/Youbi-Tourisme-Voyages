export type Language = 'ar' | 'fr';

export type ServiceKey =
  | 'tourist_trip'
  | 'flight_ticket'
  | 'hotel_booking'
  | 'organized_tour'
  | 'omra'
  | 'hajj'
  | 'car_rental'
  | 'other';

export type BudgetKey =
  | 'less_100k'
  | '100k_200k'
  | '200k_500k'
  | 'more_500k'
  | 'unknown';

export interface InquiryFormData {
  fullName: string;
  phone: string;
  serviceType: ServiceKey;
  destination: string;
  travelDate: string;
  returnDate: string;
  travelersCount: number;
  budget: BudgetKey;
  notes: string;
}

export interface FormErrors {
  fullName?: string;
  phone?: string;
  serviceType?: string;
  destination?: string;
  travelDate?: string;
  travelersCount?: string;
  general?: string;
}
