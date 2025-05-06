import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocPageComponent } from './new-doc-page.component';

describe('NewDocPageComponent', () => {
  let component: NewDocPageComponent;
  let fixture: ComponentFixture<NewDocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewDocPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
