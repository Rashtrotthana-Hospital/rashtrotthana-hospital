import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbulanceComponent } from './abulance.component';

describe('AbulanceComponent', () => {
  let component: AbulanceComponent;
  let fixture: ComponentFixture<AbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbulanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
