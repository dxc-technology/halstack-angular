import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcTextEditorComponent } from './dxc-text-editor.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
// import 'froala-editor/js/plugins/plugins.pkgd.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/code_beautifier.min.js';
import 'froala-editor/js/plugins/code_view.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/entities.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/fullscreen.min.js';
import 'froala-editor/js/plugins/inline_style.min.js';
import 'froala-editor/js/plugins/line_breaker.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/quote.min.js';
import 'froala-editor/js/plugins/save.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/url.min.js';
import 'froala-editor/js/plugins/word_paste.min.js';

@NgModule({
  declarations: [DxcTextEditorComponent],
  imports: [
    CommonModule,
    FroalaEditorModule.forRoot()
  ],
  exports: [DxcTextEditorComponent]
})
export class DxcTextEditorModule {
  static forRoot() {
    return {
      ngModule: DxcTextEditorModule
    };
  }
}
