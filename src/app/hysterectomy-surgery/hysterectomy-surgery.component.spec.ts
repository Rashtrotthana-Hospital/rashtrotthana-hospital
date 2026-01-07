import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysterectomySurgeryComponent } from './hysterectomy-surgery.component';

describe('HysterectomySurgeryComponent', () => {
  let component: HysterectomySurgeryComponent;
  let fixture: ComponentFixture<HysterectomySurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HysterectomySurgeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HysterectomySurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
