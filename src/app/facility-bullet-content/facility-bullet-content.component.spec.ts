import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityBulletContentComponent } from './facility-bullet-content.component';

describe('FacilityBulletContentComponent', () => {
  let component: FacilityBulletContentComponent;
  let fixture: ComponentFixture<FacilityBulletContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacilityBulletContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacilityBulletContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
