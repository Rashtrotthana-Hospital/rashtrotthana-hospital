import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulmonologyComponent } from './pulmonology.component';

describe('PulmonologyComponent', () => {
  let component: PulmonologyComponent;
  let fixture: ComponentFixture<PulmonologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PulmonologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PulmonologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
