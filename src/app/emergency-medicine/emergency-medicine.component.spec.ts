import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyMedicineComponent } from './emergency-medicine.component';

describe('EmergencyMedicineComponent', () => {
  let component: EmergencyMedicineComponent;
  let fixture: ComponentFixture<EmergencyMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergencyMedicineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergencyMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
