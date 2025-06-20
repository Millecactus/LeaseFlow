import {Component} from '@angular/core';
import {FilterComponent} from '../../components/filters/filter/filter.component';
import {ListingCardComponent} from '../../components/listing-card/listing-card.component';
import {ListingImpl} from '../../models/ListingImpl.model';
import listings from '../../../assets/listings.json'
import {RouterLink} from "@angular/router";
import {SortingComponent} from '../../components/filters/sorting/sorting.component';

@Component({
  selector: 'app-listing-list',
  imports: [
    FilterComponent,
    ListingCardComponent,
    RouterLink,
    SortingComponent,
  ],
  templateUrl: './listing-list.component.html',
  styleUrl: './listing-list.component.css'
})
export class ListingListComponent {
  // Liste complète des annonces, chargée depuis un fichier JSON
  listings: ListingImpl[] = listings;

  // Liste des annonces filtrées, affichée à l'utilisateur
  filteredListings: ListingImpl[] = [...listings];

  /**
   * Méthode appelée lorsqu'un filtre est appliqué ou modifié.
   * Elle met à jour la liste filteredListings en fonction des critères choisis.
   * @param filter Un objet contenant les critères de filtrage : ville, prix max, surface min
   */
  onFilterChanged(filter: { city: string; maxPrice: number | null; minSurface: number | null }) {
    // filtre la liste complète selon les critères reçus
    this.filteredListings = this.listings.filter(listing => {
      // Vérifie si la ville correspond (ou si aucun filtre ville n'est appliqué)
      const matchesCity = filter.city ? listing.city.toLowerCase().includes(filter.city.toLowerCase()) : true;
      const matchesMaxPrice = filter.maxPrice ? listing.price <= filter.maxPrice : true;
      const matchesMinSurface = filter.minSurface ? listing.surface >= filter.minSurface : true;

      // retourne que les annonces qui passent tous les filtres
      return matchesCity && matchesMaxPrice && matchesMinSurface;
    });
  }

  /**
   * Méthode appelée lorsqu'un tri est appliqué.
   * Elle met à jour la liste filteredListings avec la nouvelle liste triée.
   * @param sortedList La liste triée à afficher
   */
  onSorted(sortedList: ListingImpl[]) {
    this.filteredListings= sortedList;
  }

}
