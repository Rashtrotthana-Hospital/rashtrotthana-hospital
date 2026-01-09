import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieUpPageComponent } from './tie-up-page.component';

describe('TieUpPageComponent', () => {
  let component: TieUpPageComponent;
  let fixture: ComponentFixture<TieUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TieUpPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TieUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
