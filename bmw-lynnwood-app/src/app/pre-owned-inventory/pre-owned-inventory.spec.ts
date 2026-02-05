import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOwnedInventory } from './pre-owned-inventory';

describe('PreOwnedInventory', () => {
  let component: PreOwnedInventory;
  let fixture: ComponentFixture<PreOwnedInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreOwnedInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOwnedInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
