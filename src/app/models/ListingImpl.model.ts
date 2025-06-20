import {Listing} from './Listing.model';

export class ListingImpl implements Listing {
  id: number = 0;
  title: string= "";
  type: string= ""; // ex: 'office', 'coworking', etc.
  transaction: string= ""; // ex: 'rent', 'sale'
  price: number= 0;
  surface: number=0;
  city: string= "";
  postal:number=0;
  address: string= "";
  availableFrom: string = "";
  description: string= "";
  photos: string[]= [];
  sidephotos: string[]= [];
  floor: number= 0;
  rooms: number=0;
  parking: boolean= false;
  leaseType: string = "";//ex: co-propriété
  fiscalRegime: string = "";//ex: neuf
  certifications: string[] = []; //ex : PMR, ERP
  leaseDuration:string= "";
  slug:string= "";
}
