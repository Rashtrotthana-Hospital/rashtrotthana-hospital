import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiacComponent } from './cardiac.component';

describe('CardiacComponent', () => {
  let component: CardiacComponent;
  let fixture: ComponentFixture<CardiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardiacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
