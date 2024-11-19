import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMedicineComponent } from './general-medicine.component';

describe('GeneralMedicineComponent', () => {
  let component: GeneralMedicineComponent;
  let fixture: ComponentFixture<GeneralMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralMedicineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
