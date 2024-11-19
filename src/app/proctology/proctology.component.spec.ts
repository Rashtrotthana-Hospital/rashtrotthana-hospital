import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProctologyComponent } from './proctology.component';

describe('ProctologyComponent', () => {
  let component: ProctologyComponent;
  let fixture: ComponentFixture<ProctologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProctologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProctologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
