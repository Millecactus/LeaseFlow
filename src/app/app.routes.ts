import { Routes } from '@angular/router';
import {ListingComponent} from './pages/listing/listing.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ListingListComponent} from './pages/listing-list/listing-list.component';
import {SortingComponent} from './components/filters/sorting/sorting.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path:"home", component: ListingListComponent },
  { path:"listing", component: ListingComponent },
  { path:"listing/:id", component: ListingComponent },
  { path:"sort", component: SortingComponent },
  { path:"**", component: NotFoundComponent }
];
