/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DxcCodeEditorService } from './dxc-code-editor.service';

describe('Service: CodeEditor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DxcCodeEditorService]
    });
  });

  it('should ...', inject([DxcCodeEditorService], (service: DxcCodeEditorService) => {
    expect(service).toBeTruthy();
  }));
});
