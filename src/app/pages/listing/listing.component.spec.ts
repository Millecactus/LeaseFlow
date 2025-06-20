import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingComponent } from './listing.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingComponent],
      providers: [
        {//Mock de ActivatedRoute
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // ou selon vos besoins
            queryParams: of({}),
            snapshot: { params: {}, queryParams: {} }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
