import { TestBed } from '@angular/core/testing';

import { OrgTreeService } from './org-tree.service';

describe('OrgTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgTreeService = TestBed.get(OrgTreeService);
    expect(service).toBeTruthy();
  });
});
