import { TestBed } from '@angular/core/testing';

import { CrudTableService } from './crud-table.service';

describe('CrudTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudTableService = TestBed.get(CrudTableService);
    expect(service).toBeTruthy();
  });
});
