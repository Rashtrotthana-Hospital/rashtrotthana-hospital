import { TestBed } from '@angular/core/testing';

import { CallBackFormService } from './call-back-form.service';

describe('CallBackFormService', () => {
  let service: CallBackFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallBackFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
