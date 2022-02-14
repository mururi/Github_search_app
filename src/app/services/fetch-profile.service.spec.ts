import { TestBed } from '@angular/core/testing';

import { FetchProfileService } from './fetch-profile.service';

describe('FetchProfileService', () => {
  let service: FetchProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
