import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeticFoot } from './diabetic-foot';

describe('DiabeticFoot', () => {
  let component: DiabeticFoot;
  let fixture: ComponentFixture<DiabeticFoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiabeticFoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabeticFoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
