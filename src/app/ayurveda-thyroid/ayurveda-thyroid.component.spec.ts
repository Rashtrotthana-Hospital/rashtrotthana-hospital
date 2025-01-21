import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedaThyroidComponent } from './ayurveda-thyroid.component';

describe('AyurvedaThyroidComponent', () => {
  let component: AyurvedaThyroidComponent;
  let fixture: ComponentFixture<AyurvedaThyroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AyurvedaThyroidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyurvedaThyroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
