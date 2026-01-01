import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdenoidectomyComponent } from './adenoidectomy.component';

describe('AdenoidectomyComponent', () => {
  let component: AdenoidectomyComponent;
  let fixture: ComponentFixture<AdenoidectomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdenoidectomyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdenoidectomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
