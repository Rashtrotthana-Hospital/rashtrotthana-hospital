import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedaCarouselComponent } from './ayurveda-carousel.component';

describe('AyurvedaCarouselComponent', () => {
  let component: AyurvedaCarouselComponent;
  let fixture: ComponentFixture<AyurvedaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyurvedaCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyurvedaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
