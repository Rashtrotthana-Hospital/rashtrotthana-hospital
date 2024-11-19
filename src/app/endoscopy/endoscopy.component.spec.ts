import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoscopyComponent } from './endoscopy.component';

describe('EndoscopyComponent', () => {
  let component: EndoscopyComponent;
  let fixture: ComponentFixture<EndoscopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndoscopyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndoscopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
