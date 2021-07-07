import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { DxcLocalstorageConfiguration } from '../models/localstorage/storage-configuration';
import { DxcLocalStorageDirective } from '../directives/localstorage/dxc-localstorage.directive';
import { DXC_LOCAL_STORAGE_CONFIG } from '../helpers/localstorage/storage-config';
import { DefaultSerializer } from '../helpers/localstorage/default-serializer';
import { DXC_LOCAL_STORAGE_SERIALIZER } from '../helpers/localstorage/storage-serializer';

/**
 * Provides the librarys module.
 */
@NgModule({
  imports: [
  ],
  declarations: [
    DxcLocalStorageDirective
  ],
  exports: [
    DxcLocalStorageDirective
  ],
  providers: [
    {
      provide: DXC_LOCAL_STORAGE_SERIALIZER,
      useClass: DefaultSerializer
    }
  ]
})
export class DxcLocalStorageModule {

  /**
   * Creates and configures a module with all the providers and directives.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```
   * @NgModule({
   *   imports: [DxcLocalStorageModule.forRoot(config)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param config An `DxcLocalstorageConfiguration` configuration object that controls how accessing localstorage is performed.
   * @return The new `NgModule`.
   *
   */
  public static forRoot(config?: DxcLocalstorageConfiguration): ModuleWithProviders<DxcLocalStorageModule> {
    return {
      ngModule: DxcLocalStorageModule,
      providers: [
        {
          provide: DXC_LOCAL_STORAGE_CONFIG,
          useValue: config
        }
      ]
    };
  }

  /**
   * Creates and configures a module with all the providers and directives.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```
   * @NgModule({
   *   imports: [DxcLocalStorageModule.forChild()]
   * })
   * class MyNgModule {}
   * ```
   *
   * @return The new NgModule.
   *
   */
  public static forChild(): ModuleWithProviders<DxcLocalStorageModule> {
    return { ngModule: DxcLocalStorageModule }
  }
}
