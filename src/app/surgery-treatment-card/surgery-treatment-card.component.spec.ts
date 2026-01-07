import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeryTreatmentCardComponent } from './surgery-treatment-card.component';

describe('SurgeryTreatmentCardComponent', () => {
  let component: SurgeryTreatmentCardComponent;
  let fixture: ComponentFixture<SurgeryTreatmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurgeryTreatmentCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurgeryTreatmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
