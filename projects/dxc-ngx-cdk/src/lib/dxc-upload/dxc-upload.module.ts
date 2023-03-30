import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { DxcUploadComponent } from "./dxc-upload.component";
import { DxcDragAndDropComponent } from "./dxc-drag-and-drop/dxc-drag-and-drop.component";
import { DxcFilesToUploadComponent } from "./dxc-files-to-upload/dxc-files-to-upload.component";
import { DxcFilesPreviewComponent } from "./dxc-files-to-upload/dxc-files-preview/dxc-files-preview.component";
import { DxcFilePreviewComponent } from "./dxc-files-to-upload/dxc-files-preview/dxc-file-preview/dxc-file-preview.component";
import { DxcUploadButtonsComponent } from "./dxc-files-to-upload/dxc-upload-buttons/dxc-upload-buttons.component";
import { DxcTransactionsComponent } from "./dxc-transactions/dxc-transactions.component";
import { DxcTransactionComponent } from "./dxc-transactions/dxc-transaction/dxc-transaction.component";
import { DxcButtonModule } from "../dxc-button/dxc-button.module";
import { DxcSpinnerModule } from "../dxc-spinner/dxc-spinner.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    DxcUploadComponent,
    DxcDragAndDropComponent,
    DxcFilePreviewComponent,
    DxcFilesPreviewComponent,
    DxcUploadButtonsComponent,
    DxcFilesToUploadComponent,
    DxcTransactionsComponent,
    DxcTransactionComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    DxcButtonModule,
    DxcSpinnerModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    DxcUploadComponent,
    DxcDragAndDropComponent,
    DxcFilePreviewComponent,
    DxcFilesPreviewComponent,
    DxcUploadButtonsComponent,
    DxcFilesToUploadComponent,
    DxcTransactionsComponent,
    DxcTransactionComponent,
  ],
})
export class DxcUploadModule {}
