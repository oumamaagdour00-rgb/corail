import { Brand, Product } from './types';
import colgateObj from './public/colgate.png';
import esemmatObj from './public/esemmat.jpg';
import joyfulObj from './public/joyful.png';
import souplineObj from './public/soupline.png';
import ajaxObj from './public/ajax.png';
import cadumObj from './public/cadum.png';
import tahitiObj from './public/tahiti.png';
import holderObj from './public/holder.jpg';

export const COMPANY_NAME = "Corail L'Océan";
export const FOUNDED_YEAR = 2010;
export const LOCATION = "Casablanca, Morocco";

export const BRAND_DETAILS = [
  {
    id: Brand.Colgate,
    logoUrl: colgateObj,
    color: "border-red-600",
    website: "https://www.colgate.com"
  },
  {
    id: Brand.Esemmat,
    logoUrl: esemmatObj,
    color: "border-orange-500",
    website: "https://sinaikimya.com/esemmat/"
  },
  {
    id: Brand.Joyful,
    logoUrl: joyfulObj,
    color: "border-purple-400",
    website: "https://pakten.com.tr/en/our-brands/5/baby-care-baby#:~:text=nature%20of%20motherhood!-,JOYFUL,-JOYFUL%20WE%20WORK"
  },
  {
    id: Brand.Soupline,
    logoUrl: souplineObj,
    color: "border-blue-400",
    website: "https://www.soupline.fr"
  },
  {
    id: Brand.Ajax,
    logoUrl: ajaxObj,
    color: "border-blue-600",
    website: "https://www.ajax.com"
  },
  {
    id: Brand.Cadum,
    logoUrl: cadumObj,
    color: "border-pink-300",
    website: "https://www.instagram.com/cadum_maroc"
  },
  {
    id: Brand.Tahiti,
    logoUrl: tahitiObj,
    color: "border-green-500",
    // website: "https://www.colgatepalmolive.fr/local-brands"
  },
  {
    id: Brand.Holder,
    logoUrl: holderObj,
    color: "border-teal-500",
    website: "https://pakten.com.tr/en/our-brands/6/adult-care#:~:text=Discover-,HOLDER,-HOLDER%20is%20an"
  }
];

export const PRODUCTS: Product[] = [
  // Joyful
  { id: 'j1', brand: Brand.Joyful, name: 'Joyful Mini 2', category: 'Baby Care', details: ['3-6 KG', '64 Pieces'] },
  { id: 'j2', brand: Brand.Joyful, name: 'Joyful Midi 3', category: 'Baby Care', details: ['4-9 KG', '52 Pieces'] },
  { id: 'j3', brand: Brand.Joyful, name: 'Joyful Maxi 4', category: 'Baby Care', details: ['7-18 KG', '44 Pieces'] },
  { id: 'j4', brand: Brand.Joyful, name: 'Joyful Junior 5', category: 'Baby Care', details: ['11-25 KG', '36 Pieces'] },
  { id: 'j5', brand: Brand.Joyful, name: 'Joyful XL 6', category: 'Baby Care', details: ['16+ KG', '32 Pieces'] },

  // Holder
  { id: 'h1', brand: Brand.Holder, name: 'Holder 12 Rolls', category: 'Paper', details: ['Toilet Paper', 'Eco Friendly'] },
  { id: 'h2', brand: Brand.Holder, name: 'Holder 6 Rolls', category: 'Paper', details: ['Kitchen Towel', 'Strong'] },

  // Colgate
  { id: 'c1', brand: Brand.Colgate, name: 'Colgate Total', category: 'Oral Care', details: ['Toothpaste', '12 Hour Protection'] },
  { id: 'c2', brand: Brand.Colgate, name: 'Colgate Max Fresh', category: 'Oral Care', details: ['Toothpaste', 'Cooling Crystals'] },
  { id: 'c3', brand: Brand.Colgate, name: 'Colgate 360', category: 'Oral Care', details: ['Toothbrush', 'Medium'] },

  // Soupline
  { id: 'sp1', brand: Brand.Soupline, name: 'Soupline Grand Air', category: 'Laundry', details: ['Fabric Softener', '3L'] },
  { id: 'sp2', brand: Brand.Soupline, name: 'Soupline Lavande', category: 'Laundry', details: ['Fabric Softener', '3L'] },
];