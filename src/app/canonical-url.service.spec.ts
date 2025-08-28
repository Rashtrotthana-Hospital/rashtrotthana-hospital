import { TestBed } from '@angular/core/testing';

import { CanonicalUrlService } from './canonical-url.service';

describe('CanonicalUrlService', () => {
  let service: CanonicalUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanonicalUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
