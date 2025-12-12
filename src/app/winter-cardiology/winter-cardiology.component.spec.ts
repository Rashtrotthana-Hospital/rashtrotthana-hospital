import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterCardiologyComponent } from './winter-cardiology.component';

describe('WinterCardiologyComponent', () => {
  let component: WinterCardiologyComponent;
  let fixture: ComponentFixture<WinterCardiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinterCardiologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WinterCardiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
