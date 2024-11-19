import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyFacilityComponent } from './emergency-facility.component';

describe('EmergencyFacilityComponent', () => {
  let component: EmergencyFacilityComponent;
  let fixture: ComponentFixture<EmergencyFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergencyFacilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmergencyFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
