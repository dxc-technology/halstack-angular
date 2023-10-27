import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxcFileInputComponent } from "./dxc-file-input.component";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcFileComponent } from "./dxc-file/dxc-file.component";
import { DxcFileErrorComponent } from "./dxc-file-error/dxc-file-error.component";
import { FileFormatDirective } from "./directives/file-format.directive";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FilesService } from "./services/files.services";
import { IFileService } from "./model/IFileService";
import {
  FILE_SERVICE,
  IFileServiceProvider,
} from "./services/file-provider..service";
import { DxcProgressbarModule } from "../dxc-progressbar/dxc-progressbar.module";
@NgModule({
  declarations: [
    DxcFileInputComponent,
    DxcFileComponent,
    DxcFileErrorComponent,
    FileFormatDirective,
  ],
  imports: [
    CommonModule,
    DxcButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    DxcProgressbarModule,
    HttpClientModule,
  ],
  exports: [DxcFileInputComponent],
})
export class DxcFileInputModule {
  static forRoot(
    fileSeriveProvider?: IFileServiceProvider
  ): ModuleWithProviders<DxcFileInputModule> {
    return {
      ngModule: DxcFileInputModule,
      providers: [
        {
          provide: FILE_SERVICE,
          useClass:
            (fileSeriveProvider && fileSeriveProvider.fileService) ||
            FilesService,
        },
      ],
    };
  }
}
