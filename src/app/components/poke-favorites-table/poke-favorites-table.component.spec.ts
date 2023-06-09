import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFavoritesTableComponent } from './poke-favorites-table.component';

describe('PokeFavoritesTableComponent', () => {
  let component: PokeFavoritesTableComponent;
  let fixture: ComponentFixture<PokeFavoritesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeFavoritesTableComponent]
    });
    fixture = TestBed.createComponent(PokeFavoritesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
