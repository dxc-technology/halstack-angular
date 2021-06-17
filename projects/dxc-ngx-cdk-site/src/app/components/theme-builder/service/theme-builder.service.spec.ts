import { TestBed } from '@angular/core/testing';

import { ThemeBuilderService } from './theme-builder.service';

describe('ThemeBuilderService', () => {
  let service: ThemeBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
