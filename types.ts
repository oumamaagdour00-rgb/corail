
export type Language = 'en' | 'fr' | 'ar';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  details: string[];
  image?: string;
}

export interface ServiceBlock {
  type: 'text' | 'list' | 'emphasis';
  content: string | string[];
}

export interface Service {
  id: string;
  title: string;
  iconName: 'Truck' | 'Warehouse' | 'Handshake' | 'Megaphone' | 'CheckCircle2' | 'Shield';
  blocks: ServiceBlock[];
}

export interface Stat {
  value: string;
  label: string;
  subLabel?: string;
  description?: string;
  iconName?: 'DollarSign' | 'Package' | 'MapPin' | 'Users' | 'Warehouse' | 'Truck' | 'CheckCircle2' | 'Award' | 'Clock';
  logoUrl?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export enum Brand {
  Joyful = 'Joyful',
  Holder = 'Holder',
  Colgate = 'Colgate',
  Soupline = 'Soupline',
  Ajax = 'Ajax',
  Cadum = 'Cadum',
  Tahiti = 'Tahiti',
  Esemmat = 'Esemmat'
}
