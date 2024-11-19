import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnesthesiologyComponent } from './anesthesiology.component';

describe('AnesthesiologyComponent', () => {
  let component: AnesthesiologyComponent;
  let fixture: ComponentFixture<AnesthesiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnesthesiologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnesthesiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
