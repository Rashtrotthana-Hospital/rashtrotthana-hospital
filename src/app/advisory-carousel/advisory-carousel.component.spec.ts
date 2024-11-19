import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryCarouselComponent } from './advisory-carousel.component';

describe('AdvisoryCarouselComponent', () => {
  let component: AdvisoryCarouselComponent;
  let fixture: ComponentFixture<AdvisoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvisoryCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
