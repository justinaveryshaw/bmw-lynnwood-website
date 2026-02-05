import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricInventory } from './electric-inventory';

describe('ElectricInventory', () => {
  let component: ElectricInventory;
  let fixture: ComponentFixture<ElectricInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
