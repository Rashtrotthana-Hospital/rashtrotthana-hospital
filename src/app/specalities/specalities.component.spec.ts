import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecalitiesComponent } from './specalities.component';

describe('SpecalitiesComponent', () => {
  let component: SpecalitiesComponent;
  let fixture: ComponentFixture<SpecalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecalitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
