import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieteryComponent } from './dietery.component';

describe('DieteryComponent', () => {
  let component: DieteryComponent;
  let fixture: ComponentFixture<DieteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DieteryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DieteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
