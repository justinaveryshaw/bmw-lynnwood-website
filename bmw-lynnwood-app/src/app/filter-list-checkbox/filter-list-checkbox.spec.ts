import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListCheckbox } from './filter-list-checkbox';

describe('FilterListCheckbox', () => {
  let component: FilterListCheckbox;
  let fixture: ComponentFixture<FilterListCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterListCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterListCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
