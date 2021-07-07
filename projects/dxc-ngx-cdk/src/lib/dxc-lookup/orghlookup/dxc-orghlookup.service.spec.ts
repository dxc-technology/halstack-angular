/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DxcOrghlookupService } from './dxc-orghlookup.service';

describe('Service: Orghlookup.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DxcOrghlookupService]
    });
  });

  it('should ...', inject([DxcOrghlookupService], (service: DxcOrghlookupService) => {
    expect(service).toBeTruthy();
  }));
});
