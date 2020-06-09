import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';

describe('SortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortService = TestBed.get(SortService);
    expect(service).toBeTruthy();
  });
});
