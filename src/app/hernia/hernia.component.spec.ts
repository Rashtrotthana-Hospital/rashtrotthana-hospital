import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerniaComponent } from './hernia.component';

describe('HerniaComponent', () => {
  let component: HerniaComponent;
  let fixture: ComponentFixture<HerniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HerniaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
