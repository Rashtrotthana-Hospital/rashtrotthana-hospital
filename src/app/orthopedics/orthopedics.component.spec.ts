import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopedicsComponent } from './orthopedics.component';

describe('OrthopedicsComponent', () => {
  let component: OrthopedicsComponent;
  let fixture: ComponentFixture<OrthopedicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrthopedicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrthopedicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
