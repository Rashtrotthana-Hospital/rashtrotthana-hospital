import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationTheatreComponent } from './operation-theatre.component';

describe('OperationTheatreComponent', () => {
  let component: OperationTheatreComponent;
  let fixture: ComponentFixture<OperationTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationTheatreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
