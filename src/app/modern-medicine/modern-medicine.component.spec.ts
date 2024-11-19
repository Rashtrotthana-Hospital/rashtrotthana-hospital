import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernMedicineComponent } from './modern-medicine.component';

describe('ModernMedicineComponent', () => {
  let component: ModernMedicineComponent;
  let fixture: ComponentFixture<ModernMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModernMedicineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModernMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
