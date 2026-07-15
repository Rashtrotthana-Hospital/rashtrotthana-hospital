import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResearchPageComponent } from './new-research-page.component';

describe('NewResearchPageComponent', () => {
  let component: NewResearchPageComponent;
  let fixture: ComponentFixture<NewResearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewResearchPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewResearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
