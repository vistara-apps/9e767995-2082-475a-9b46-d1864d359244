export interface User {
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  languagePreference: 'en' | 'es';
  trustedContacts: string[];
  subscriptionStatus: 'free' | 'active' | 'expired';
}

export interface LegalCard {
  cardId: string;
  title: string;
  content: string;
  languages: string[];
  locationContext: string;
  createdAt: Date;
}

export interface Script {
  scriptId: string;
  title: string;
  scriptText: string;
  language: string;
  scenario: string;
  createdAt: Date;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  state?: string;
  country?: string;
}
