import { TestBed } from '@angular/core/testing';

import { TextEditorService } from './text-editor.service';

describe('TextEditorService', () => {
  let service: TextEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
