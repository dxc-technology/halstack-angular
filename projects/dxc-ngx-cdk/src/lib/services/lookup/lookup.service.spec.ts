import { TestBed } from '@angular/core/testing';

import { LookupService } from './lookup.service';

describe('LookupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupService = TestBed.get(LookupService);
    expect(service).toBeTruthy();
  });
});
