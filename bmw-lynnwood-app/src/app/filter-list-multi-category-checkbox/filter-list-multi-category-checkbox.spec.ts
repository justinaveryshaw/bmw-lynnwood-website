import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListMultiCategoryCheckbox } from './filter-list-multi-category-checkbox';

describe('FilterListMultiCategoryCheckbox', () => {
  let component: FilterListMultiCategoryCheckbox;
  let fixture: ComponentFixture<FilterListMultiCategoryCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterListMultiCategoryCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterListMultiCategoryCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
