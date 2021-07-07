import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from './dxc-localstorage.service';
import { DXC_LOCAL_STORAGE_CONFIG } from '../../helpers/localstorage/storage-config';
import { DefaultSerializer } from '../../helpers/localstorage/default-serializer';
import { DXC_LOCAL_STORAGE_SERIALIZER } from '../../helpers/localstorage/storage-serializer';

describe('LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DXC_LOCAL_STORAGE_CONFIG,
          useValue: {
            prefix: 'dxc-localstorage'
          }
        },
        {
          provide: DXC_LOCAL_STORAGE_SERIALIZER,
          useClass: DefaultSerializer
        }
      ]
    });
  });

  afterEach(inject(
    [LocalStorageService],
    (service: LocalStorageService) => {

      service.clear();
    }
  ));

  it('should be created', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should be have injected config', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {
      expect(service.config.allowNull).toBeTruthy();
      expect(service.config.prefix).toBe('dxc-localstorage');
    }
  ));

  it('should add entries', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {

      let count = service.count();
      expect(count).toBe(0);

      service.set('entry', 'value');

      count = service.count();
      expect(count).toBe(1);
    }
  ));

  it('should add entries with configured prefix', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {

      const prefixlessKey = 'entry';

      service.set(prefixlessKey, 'value');

      const key = service.getKey(0);
      expect(key).toBe(`${service.config.prefix}_${prefixlessKey}`)
    }
  ));

  it('should remove entries', inject(
    [LocalStorageService],
    (service: LocalStorageService) => {

      let count = service.count();
      expect(count).toBe(0);

      service.set('entry', 'value');

      count = service.count();
      expect(count).toBe(1);

      service.remove('entry');

      count = service.count();
      expect(count).toBe(0);
    }
  ));
});
