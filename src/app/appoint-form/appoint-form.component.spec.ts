import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointFormComponent } from './appoint-form.component';

describe('AppointFormComponent', () => {
  let component: AppointFormComponent;
  let fixture: ComponentFixture<AppointFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
