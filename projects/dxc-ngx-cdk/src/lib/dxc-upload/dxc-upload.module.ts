import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatTooltipModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcUploadComponent } from "./dxc-upload.component";
import { DxcDragAndDropComponent } from "./dxc-drag-and-drop/dxc-drag-and-drop.component";
import { DxcFilesToUploadComponent } from "./dxc-files-to-upload/dxc-files-to-upload.component";
import { DxcFilePreviewComponent } from "./dxc-files-to-upload/dxc-file-preview/dxc-file-preview.component";
import { DxcFilePreviewRowComponent } from "./dxc-files-to-upload/dxc-file-preview/dxc-file-preview-row/dxc-file-preview-row.component";
import { DxcUploadButtonsComponent } from "./dxc-files-to-upload/dxc-upload-buttons/dxc-upload-buttons.component";
import { DxcUploadedSummaryComponent } from "./dxc-uploaded-summary/dxc-uploaded-summary.component";
import { DxcUploadedSummaryRowComponent } from "./dxc-uploaded-summary/dxc-uploaded-summary-row/dxc-uploaded-summary-row.component";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcSpinnerModule } from "../dxc-spinner/dxc-spinner.module";
import { MatProgressSpinnerModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [
    DxcUploadComponent,
    DxcDragAndDropComponent,
    DxcFilePreviewComponent,
    DxcFilePreviewRowComponent,
    DxcUploadButtonsComponent,
    DxcFilesToUploadComponent,
    DxcUploadedSummaryComponent,
    DxcUploadedSummaryRowComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    DxcButtonModule,
    DxcSpinnerModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    DxcUploadComponent,
    DxcDragAndDropComponent,
    DxcFilePreviewComponent,
    DxcFilePreviewRowComponent,
    DxcUploadButtonsComponent,
    DxcFilesToUploadComponent,
    DxcUploadedSummaryComponent,
    DxcUploadedSummaryRowComponent
  ]
})
export class DXCUploadModule {}
