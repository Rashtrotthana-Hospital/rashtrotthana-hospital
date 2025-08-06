import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityCarouselComponent } from './speciality-carousel.component';

describe('SpecialityCarouselComponent', () => {
  let component: SpecialityCarouselComponent;
  let fixture: ComponentFixture<SpecialityCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialityCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialityCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
