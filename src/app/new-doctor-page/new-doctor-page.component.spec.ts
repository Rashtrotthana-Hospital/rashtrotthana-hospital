import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDoctorPageComponent } from './new-doctor-page.component';

describe('NewDoctorPageComponent', () => {
  let component: NewDoctorPageComponent;
  let fixture: ComponentFixture<NewDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewDoctorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
