import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeCarouselComponent } from './committee-carousel.component';

describe('CommitteeCarouselComponent', () => {
  let component: CommitteeCarouselComponent;
  let fixture: ComponentFixture<CommitteeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitteeCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommitteeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
