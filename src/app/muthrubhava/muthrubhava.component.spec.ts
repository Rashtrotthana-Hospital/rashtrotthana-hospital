import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuthrubhavaComponent } from './muthrubhava.component';

describe('MuthrubhavaComponent', () => {
  let component: MuthrubhavaComponent;
  let fixture: ComponentFixture<MuthrubhavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuthrubhavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuthrubhavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
