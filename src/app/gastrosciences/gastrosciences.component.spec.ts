import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastrosciencesComponent } from './gastrosciences.component';

describe('GastrosciencesComponent', () => {
  let component: GastrosciencesComponent;
  let fixture: ComponentFixture<GastrosciencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GastrosciencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GastrosciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
