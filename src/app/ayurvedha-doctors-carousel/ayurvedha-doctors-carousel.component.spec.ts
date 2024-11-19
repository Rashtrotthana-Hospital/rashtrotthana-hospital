import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedhaDoctorsCarouselComponent } from './ayurvedha-doctors-carousel.component';

describe('AyurvedhaDoctorsCarouselComponent', () => {
  let component: AyurvedhaDoctorsCarouselComponent;
  let fixture: ComponentFixture<AyurvedhaDoctorsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyurvedhaDoctorsCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyurvedhaDoctorsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
