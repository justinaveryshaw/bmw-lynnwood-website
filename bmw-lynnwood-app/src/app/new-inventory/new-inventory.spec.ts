import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInventory } from './new-inventory';

describe('NewInventory', () => {
  let component: NewInventory;
  let fixture: ComponentFixture<NewInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
