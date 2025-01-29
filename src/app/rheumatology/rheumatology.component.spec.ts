import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheumatologyComponent } from './rheumatology.component';

describe('RheumatologyComponent', () => {
  let component: RheumatologyComponent;
  let fixture: ComponentFixture<RheumatologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RheumatologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RheumatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
