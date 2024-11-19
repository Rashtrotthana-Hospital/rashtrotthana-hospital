import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePdfBoxComponent } from './insurance-pdf-box.component';

describe('InsurancePdfBoxComponent', () => {
  let component: InsurancePdfBoxComponent;
  let fixture: ComponentFixture<InsurancePdfBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsurancePdfBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsurancePdfBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
