import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityContentComponent } from './facility-content.component';

describe('FacilityContentComponent', () => {
  let component: FacilityContentComponent;
  let fixture: ComponentFixture<FacilityContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacilityContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacilityContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
