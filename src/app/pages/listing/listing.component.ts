import {Component, inject, OnInit, signal} from '@angular/core';
import listings from '../../../assets/listings.json'
import {ActivatedRoute} from '@angular/router';
import {ListingImpl} from '../../models/ListingImpl.model';


@Component({
  selector: 'app-listing',
  imports: [],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent implements OnInit{

  //activatedRoute permet de recuperer les params passes dans l'URL
  private route = inject(ActivatedRoute);

  listingId= signal<number | undefined>(undefined);
  listing = signal<ListingImpl | undefined>(undefined);

  ngOnInit(): void {
    //snapshot récupere l'id passé en params en l'etat actuel
    const params = this.route.snapshot.params;
    //si le param est trouve on le recupere via parseIntm sinon on le laisse a undefined
    this.listingId.set(params["id"] ? parseInt(params["id"],10): undefined); //force parseInt a bien interpreter l'ID en base 10 et non pas en octal


    if (this.listingId() !== undefined) {
      //on recupere l'objet json correspondant a l'íd passé en parametre
      this.listing.set(listings.find(listing => listing.id === this.listingId()));
    }
  }
}
