import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingListComponent } from './listing-list.component';
import { ListingImpl } from '../../models/ListingImpl.model';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

// On crée un jeu de données de test
const TEST_LISTINGS: ListingImpl[] = [
  {
    id: 1,
    title: 'Maison Bordeaux',
    type: 'Maison',
    transaction: 'Vente',
    price: 300000,
    surface: 120,
    city: 'Bordeaux',
    postal: 33000,
    address: '1 rue du Test',
    availableFrom: '2025-06-01',
    description: 'Belle maison à Bordeaux.',
    slug: '1-maison-bordeaux',
    photos: [],
    sidephotos: [],
    floor: 1,
    rooms: 4,
    parking: true,
    leaseType: '',
    fiscalRegime: '',
    certifications: [],
    leaseDuration: ''
  },
  {
    id: 2,
    title: 'Appartement Marseille',
    type: 'Appartement',
    transaction: 'Location',
    price: 1500,
    surface: 45,
    city: 'Marseille',
    postal: 75000,
    address: '2 avenue du Test',
    availableFrom: '2025-07-01',
    description: 'Appartement à Marseille.',
    slug: '2-appartement-marseille',
    photos: [],
    sidephotos: [],
    floor: 3,
    rooms: 2,
    parking: false,
    leaseType: '',
    fiscalRegime: '',
    certifications: [],
    leaseDuration: ''
  }
];

describe('ListingListComponent', () => {
  let component: ListingListComponent;
  let fixture: ComponentFixture<ListingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListingListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // ou selon vos besoins
            queryParams: of({}),
            snapshot: { params: {}, queryParams: {} }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingListComponent);
    component = fixture.componentInstance;

    // injections des données de test
    component.listings = [...TEST_LISTINGS];
    component.filteredListings = [...TEST_LISTINGS];
    fixture.detectChanges();
  });

  it('should initialize filteredListings with all listings', () => {
    // Vérifie que la liste filtrée est bien initialisée
    expect(component.filteredListings.length).toBe(2);
    expect(component.filteredListings).toEqual(TEST_LISTINGS);
  });

  it('should filter by city', () => {
    component.onFilterChanged({ city: 'Bordeaux', maxPrice: null, minSurface: null });
    expect(component.filteredListings.length).toBe(1);
    expect(component.filteredListings[0].city).toBe('Bordeaux');    // Vérifie que le onfilterChanged() filtre bien selon la ville (Bordeaux ici)
  });

  it('should filter by max price', () => {
    component.onFilterChanged({ city: '', maxPrice: 2000, minSurface: null });
    expect(component.filteredListings.length).toBe(1);
    expect(component.filteredListings[0].price).toBeLessThanOrEqual(2000);
  });

  it('should filter by min surface', () => {
    component.onFilterChanged({ city: '', maxPrice: null, minSurface: 100 });
    expect(component.filteredListings.length).toBe(1);
    expect(component.filteredListings[0].surface).toBeGreaterThanOrEqual(100);
  });

  it('should filter by multiple criteria', () => {
    component.onFilterChanged({ city: 'Marseille', maxPrice: 2000, minSurface: 40 });
    expect(component.filteredListings.length).toBe(1);
    expect(component.filteredListings[0].city).toBe('Marseille');
  });

  it('should set filteredListings to sortedList on onSorted', () => {
    const sorted = [TEST_LISTINGS[1], TEST_LISTINGS[0]]; // Inversé
    component.onSorted(sorted);
    expect(component.filteredListings).toEqual(sorted);
  });
});
