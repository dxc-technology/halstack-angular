import { TestBed } from '@angular/core/testing';

import { CodesandboxServiceService } from './codesandbox-service.service';

describe('CodesandboxServiceService', () => {
  let service: CodesandboxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodesandboxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
