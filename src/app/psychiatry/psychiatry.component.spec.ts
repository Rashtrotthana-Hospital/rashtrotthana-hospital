import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatryComponent } from './psychiatry.component';

describe('PsychiatryComponent', () => {
  let component: PsychiatryComponent;
  let fixture: ComponentFixture<PsychiatryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PsychiatryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsychiatryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
