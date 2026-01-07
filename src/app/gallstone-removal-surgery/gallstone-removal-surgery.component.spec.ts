import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallstoneRemovalSurgeryComponent } from './gallstone-removal-surgery.component';

describe('GallstoneRemovalSurgeryComponent', () => {
  let component: GallstoneRemovalSurgeryComponent;
  let fixture: ComponentFixture<GallstoneRemovalSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GallstoneRemovalSurgeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallstoneRemovalSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
