import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VascularSurgeriesComponent } from './vascular-surgeries.component';

describe('VascularSurgeriesComponent', () => {
  let component: VascularSurgeriesComponent;
  let fixture: ComponentFixture<VascularSurgeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VascularSurgeriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VascularSurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
