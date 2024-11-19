import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaediatricsComponent } from './paediatrics.component';

describe('PaediatricsComponent', () => {
  let component: PaediatricsComponent;
  let fixture: ComponentFixture<PaediatricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaediatricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaediatricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
