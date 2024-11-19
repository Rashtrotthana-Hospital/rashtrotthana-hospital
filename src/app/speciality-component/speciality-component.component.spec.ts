import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityComponentComponent } from './speciality-component.component';

describe('SpecialityComponentComponent', () => {
  let component: SpecialityComponentComponent;
  let fixture: ComponentFixture<SpecialityComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialityComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
