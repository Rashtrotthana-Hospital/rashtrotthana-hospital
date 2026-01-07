import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AclReconstructionComponent } from './acl-reconstruction.component';

describe('AclReconstructionComponent', () => {
  let component: AclReconstructionComponent;
  let fixture: ComponentFixture<AclReconstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AclReconstructionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AclReconstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
