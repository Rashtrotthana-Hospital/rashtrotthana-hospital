import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstetricsGynaecologyComponent } from './obstetrics-gynaecology.component';

describe('ObstetricsGynaecologyComponent', () => {
  let component: ObstetricsGynaecologyComponent;
  let fixture: ComponentFixture<ObstetricsGynaecologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObstetricsGynaecologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObstetricsGynaecologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
