import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NephrologyComponent } from './nephrology.component';

describe('NephrologyComponent', () => {
  let component: NephrologyComponent;
  let fixture: ComponentFixture<NephrologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NephrologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NephrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
