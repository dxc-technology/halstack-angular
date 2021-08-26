import { TestBed } from '@angular/core/testing';

import { DxcCrudService } from './dxc-crud.service';

describe('DxcCrudService', () => {
  let service: DxcCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DxcCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
