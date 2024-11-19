import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrologyComponent } from './urology.component';

describe('UrologyComponent', () => {
  let component: UrologyComponent;
  let fixture: ComponentFixture<UrologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
