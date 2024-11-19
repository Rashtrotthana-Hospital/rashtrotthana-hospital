import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicCommitteeComponent } from './ethic-committee.component';

describe('EthicCommitteeComponent', () => {
  let component: EthicCommitteeComponent;
  let fixture: ComponentFixture<EthicCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EthicCommitteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EthicCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
