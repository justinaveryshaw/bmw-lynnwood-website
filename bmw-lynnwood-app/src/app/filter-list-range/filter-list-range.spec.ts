import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListRange } from './filter-list-range';

describe('FilterListRange', () => {
  let component: FilterListRange;
  let fixture: ComponentFixture<FilterListRange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterListRange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterListRange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
