import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsFinance } from './specials-finance';

describe('SpecialsFinance', () => {
  let component: SpecialsFinance;
  let fixture: ComponentFixture<SpecialsFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialsFinance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialsFinance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
