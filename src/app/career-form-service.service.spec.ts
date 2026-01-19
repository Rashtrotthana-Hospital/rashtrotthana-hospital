import { TestBed } from '@angular/core/testing';

import { CareerFormServiceService } from './career-form-service.service';

describe('CareerFormServiceService', () => {
  let service: CareerFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
