import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupForm } from './popup-form';

describe('PopupForm', () => {
  let component: PopupForm;
  let fixture: ComponentFixture<PopupForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
