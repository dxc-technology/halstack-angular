import { TestBed } from '@angular/core/testing';

import { DxcConfirmationDialogService } from './dxc-confirmation-dialog.service';

describe('DxcConfirmationDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DxcConfirmationDialogService = TestBed.get(DxcConfirmationDialogService);
    expect(service).toBeTruthy();
  });
});
