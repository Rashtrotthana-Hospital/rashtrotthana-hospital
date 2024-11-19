import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENTComponent } from './ent.component';

describe('ENTComponent', () => {
  let component: ENTComponent;
  let fixture: ComponentFixture<ENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ENTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
