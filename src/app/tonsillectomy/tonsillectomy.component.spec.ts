import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonsillectomyComponent } from './tonsillectomy.component';

describe('TonsillectomyComponent', () => {
  let component: TonsillectomyComponent;
  let fixture: ComponentFixture<TonsillectomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TonsillectomyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TonsillectomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
