import { TestBed } from '@angular/core/testing';

import { DxcResizeService } from './dxc-size-detector.service';

describe('DxcResizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DxcResizeService = TestBed.get(DxcResizeService);
    expect(service).toBeTruthy();
  });
});
