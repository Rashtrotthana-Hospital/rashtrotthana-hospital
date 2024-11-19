import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndocrinologyComponent } from './endocrinology.component';

describe('EndocrinologyComponent', () => {
  let component: EndocrinologyComponent;
  let fixture: ComponentFixture<EndocrinologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndocrinologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndocrinologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
