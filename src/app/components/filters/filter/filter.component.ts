import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [
    FormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Output() city: string= "";
  @Output() maxPrice: number | null = null;
  @Output() minSurface: number | null = null;

  @Output() filterChanged = new EventEmitter<{
    city:string,
    maxPrice: number | null,
    minSurface: number | null,
  }>();

  applyFilters() {
    this.filterChanged.emit({
      city: this.city,
      maxPrice: this.maxPrice,
      minSurface: this.minSurface,
    });
  }

}
