import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KneeReplacementComponent } from './knee-replacement.component';

describe('KneeReplacementComponent', () => {
  let component: KneeReplacementComponent;
  let fixture: ComponentFixture<KneeReplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KneeReplacementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KneeReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
