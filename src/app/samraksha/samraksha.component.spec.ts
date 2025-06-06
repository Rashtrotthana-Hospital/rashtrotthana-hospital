import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamrakshaComponent } from './samraksha.component';

describe('SamrakshaComponent', () => {
  let component: SamrakshaComponent;
  let fixture: ComponentFixture<SamrakshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SamrakshaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamrakshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
