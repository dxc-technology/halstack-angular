import { InjectionToken } from '@angular/core';
import { StorageSerializer } from '../../models/localstorage/storage-serializer';

/**
 * Provides an injection token for the services serializer.
 */
export const DXC_LOCAL_STORAGE_SERIALIZER = new InjectionToken<StorageSerializer>('StorageSerializer');