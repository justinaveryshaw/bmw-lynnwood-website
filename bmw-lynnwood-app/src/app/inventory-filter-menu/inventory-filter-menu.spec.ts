import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFilterMenu } from './inventory-filter-menu';

describe('InventoryFilterMenu', () => {
  let component: InventoryFilterMenu;
  let fixture: ComponentFixture<InventoryFilterMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryFilterMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryFilterMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
