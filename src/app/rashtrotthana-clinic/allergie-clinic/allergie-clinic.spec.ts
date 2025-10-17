import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergieClinic } from './allergie-clinic';

describe('AllergieClinic', () => {
  let component: AllergieClinic;
  let fixture: ComponentFixture<AllergieClinic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllergieClinic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllergieClinic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
