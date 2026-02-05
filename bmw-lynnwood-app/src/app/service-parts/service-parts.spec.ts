import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceParts } from './service-parts';

describe('ServiceParts', () => {
  let component: ServiceParts;
  let fixture: ComponentFixture<ServiceParts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceParts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceParts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
