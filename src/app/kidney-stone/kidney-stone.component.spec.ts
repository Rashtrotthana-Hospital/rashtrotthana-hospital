import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidneyStoneComponent } from './kidney-stone.component';

describe('KidneyStoneComponent', () => {
  let component: KidneyStoneComponent;
  let fixture: ComponentFixture<KidneyStoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidneyStoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidneyStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
