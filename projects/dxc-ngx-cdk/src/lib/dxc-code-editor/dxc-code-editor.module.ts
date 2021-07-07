import { DxcCodeEditorService } from './dxc-code-editor.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCodeEditorComponent } from './dxc-code-editor.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import 'codemirror/mode/vb/vb';
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/css-hint';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule
  ],
  declarations: [DxcCodeEditorComponent],
  exports: [DxcCodeEditorComponent],
  providers: [DxcCodeEditorService]
})
export class DxcCodeEditorModule {
  static forRoot() {
    return {
      ngModule: DxcCodeEditorModule
    };
  }
}
