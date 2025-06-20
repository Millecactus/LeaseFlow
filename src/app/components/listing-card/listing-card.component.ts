import {Component, Input} from '@angular/core';
import {ListingImpl} from '../../models/ListingImpl.model';

@Component({
  selector: 'app-listing-card',
  imports: [],
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.css'
})
export class ListingCardComponent {

  // Récupère les données depuis le parent (listing-list.component.ts)
  @Input() listing: ListingImpl = new ListingImpl();


}
