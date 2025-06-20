export interface Listing {
  id: number;
  title: string;
  type: string; // ex: 'office', 'coworking', etc.
  transaction: string; // ex: 'rent', 'sale'
  price: number;
  surface: number;
  postal:number;
  city: string;
  address: string;
  availableFrom: string;
  description: string;
  photos: string[];
  sidephotos: string[];
  floor: number;
  rooms: number;
  parking: boolean;
  leaseType: string;//ex: co-propriété
  fiscalRegime: string;//ex: neuf
  certifications: string[]; //ex : PMR, ERP
  leaseDuration:string;
  slug ?:string;

}



