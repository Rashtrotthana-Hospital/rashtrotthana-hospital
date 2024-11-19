import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFormDonationComponent } from './popup-form-donation.component';

describe('PopupFormDonationComponent', () => {
  let component: PopupFormDonationComponent;
  let fixture: ComponentFixture<PopupFormDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupFormDonationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupFormDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
