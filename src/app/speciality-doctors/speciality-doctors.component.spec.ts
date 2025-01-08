import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityDoctorsComponent } from './speciality-doctors.component';

describe('SpecialityDoctorsComponent', () => {
  let component: SpecialityDoctorsComponent;
  let fixture: ComponentFixture<SpecialityDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialityDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialityDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
