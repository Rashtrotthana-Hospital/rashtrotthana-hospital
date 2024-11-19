import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurosciencesComponent } from './neurosciences.component';

describe('NeurosciencesComponent', () => {
  let component: NeurosciencesComponent;
  let fixture: ComponentFixture<NeurosciencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeurosciencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeurosciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
