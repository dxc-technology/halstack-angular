import { InjectionToken } from '@angular/core';
import { DxcLocalstorageConfiguration } from '../../models/localstorage/storage-configuration';

/**
 * Provides an injection token for the service configuration.
 */
export const DXC_LOCAL_STORAGE_CONFIG = new InjectionToken<DxcLocalstorageConfiguration>('DxcLocalstorageConfiguration');