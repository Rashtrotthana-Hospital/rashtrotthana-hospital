import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityDocCardComponent } from './speciality-doc-card.component';

describe('SpecialityDocCardComponent', () => {
  let component: SpecialityDocCardComponent;
  let fixture: ComponentFixture<SpecialityDocCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialityDocCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialityDocCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
