import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListingImpl} from '../../../models/ListingImpl.model';

@Component({
  selector: 'app-sorting',
  imports: [],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.css'
})
export class SortingComponent {

  // Recupération la liste à trier du parent via le binding
  @Input() listing : ListingImpl[] = [];

  //Emission des donnees vers le parent
  @Output() sortingByPriceDesc = new EventEmitter <ListingImpl[]>();

  // Emission de la liste filtrée a retourner au parent
  @Output() sortingByPriceAsc = new EventEmitter<ListingImpl[]>();

  @Output() sortingByDateAsc = new EventEmitter <ListingImpl[]>();
  @Output() sortingByDateDesc = new EventEmitter <ListingImpl[]>();


  sortByPriceAsc() {
    // creation d'un nouveau tableau pour ne pas altérer la liste d'origine du parent
    const sorted = [...this.listing].sort((a, b) => a.price - b.price);
    this.sortingByPriceAsc.emit(sorted);
  }

  sortByPriceDesc() {
    const sorted = [...this.listing].sort((a, b) => b.price - a.price);
    this.sortingByPriceAsc.emit(sorted);
  }

  sortByDateAsc() {
    const sorted = [...this.listing].sort((a, b) => {
      const dateA = new Date(a.availableFrom); //casting
      const dateB = new Date(b.availableFrom);
      return dateA.getTime() - dateB.getTime();
    });

    this.sortingByDateAsc.emit(sorted);
  }

  sortByDateDesc() {
    const sorted = [...this.listing].sort((a, b) => {
      const dateA = new Date(a.availableFrom); //casting
      const dateB = new Date(b.availableFrom);
      return dateB.getTime() - dateA.getTime();
    });

    this.sortingByDateAsc.emit(sorted);
  }

}
