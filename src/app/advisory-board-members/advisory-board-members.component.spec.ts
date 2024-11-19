import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryBoardMembersComponent } from './advisory-board-members.component';

describe('AdvisoryBoardMembersComponent', () => {
  let component: AdvisoryBoardMembersComponent;
  let fixture: ComponentFixture<AdvisoryBoardMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvisoryBoardMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisoryBoardMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
