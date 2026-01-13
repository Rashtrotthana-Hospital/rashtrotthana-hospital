import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBackFormComponent } from './call-back-form.component';

describe('CallBackFormComponent', () => {
  let component: CallBackFormComponent;
  let fixture: ComponentFixture<CallBackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallBackFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallBackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
