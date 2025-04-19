import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPagePopupComponent } from './career-page-popup.component';

describe('CareerPagePopupComponent', () => {
  let component: CareerPagePopupComponent;
  let fixture: ComponentFixture<CareerPagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareerPagePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerPagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
