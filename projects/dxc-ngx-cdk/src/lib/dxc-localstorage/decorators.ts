import { filter } from 'rxjs/operators';

import { DecoratorOpts } from '../models/localstorage/decorator-options';
import { LocalStorageService } from '../services/localstorage/dxc-localstorage.service';
import { StorageEventService } from '../services/localstorage/storage-event.service';
import { constructKey } from './utils';
import { DefaultSerializer } from '../helpers/localStorage/default-serializer';

/**
 * Provides a decoarator to bind a property directly to a storage value.
 * @param options configuration used for the decoarator
 */
export function DxcLocalStorage(options?: DecoratorOpts) {
  return function (target: Object, propertyDescription: string) {

    const key = !!options && !!options.key ? options.key : propertyDescription;
    const prefix = !!options && !!options.prefix ? options.prefix : null;
    const storage = options?.storage ?? localStorage;

    const service: LocalStorageService = new LocalStorageService(new DefaultSerializer(),
      {
        prefix: prefix,
        storage: storage
      });


    const eventService: StorageEventService = new StorageEventService();
    eventService.stream.pipe(
      filter((ev: StorageEvent) => ev.key && ev.key.indexOf(constructKey(key, prefix)) >= 0)
    )
      .subscribe((ev: StorageEvent) => {
        if (!!ev.newValue && typeof ev.newValue === 'string') {
          if (ev.newValue !== 'null') {
            target[propertyDescription] = ev.newValue;
          } else {
            target[propertyDescription] = !!options.nullTransformer ? options.nullTransformer() : null;
          }
        }
      });

    Object.defineProperty(target, propertyDescription, {
      get: function () {
        const storageValue = service.get(key, prefix);
        return storageValue == null && !!options.nullTransformer ? options.nullTransformer() : storageValue;
      },
      set: function (value: any) {
        service.set(key, value, prefix);
      }
    });
  };
}
