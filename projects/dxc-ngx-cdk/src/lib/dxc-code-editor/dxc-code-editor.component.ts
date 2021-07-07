import { HttpClient } from '@angular/common/http';
import { IRequest } from './../models/startup/configuration.model';
import { DxcCodeEditorService } from './dxc-code-editor.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, OnInit, Output, ViewChild, EventEmitter, forwardRef } from '@angular/core';
import * as CodeMirror from 'codemirror/lib/codemirror';

interface DxcCodeMirrorOption {
  lineNumbers: boolean;
  lineWrapping: boolean;
  theme: string;
  mode: object;
  extraKeys: object;
  autoCloseBrackets: boolean;
  matchBrackets: boolean;
  lint: boolean;
  dragDrop: boolean;
}

@Component({
  selector: 'dxc-code-editor',
  templateUrl: './dxc-code-editor.component.html',
  styleUrls: ['./dxc-code-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcCodeEditorComponent),
    multi: true
  }]
})
export class DxcCodeEditorComponent implements OnInit, ControlValueAccessor {
  @ViewChild('codeeditor', { static: false }) private codeEditor;
  editor: any;

  @Input() options: any;
  @Input() content = '';
  @Input() public disabled = false;
  @Input() modelRequest: IRequest;
  @Input() isReadonly = false;
  @Output() contentChange = new EventEmitter<string>();

  public onTouched: () => void = () => { };
  public onChangeRegister = (val) => { };
  constructor(private codeEditorService: DxcCodeEditorService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.options = {
      lineNumbers: true,
      lineWrapping: true,
      readOnly: this.isReadonly,
      theme: 'base16-light',
      mode: { name: 'text/x-vb' },
      hintOptions: { hint: this.synonyms.bind(this) },
      extraKeys: {
        getCall: this.codeEditorService,
        modelRequest: this.modelRequest,
        'Tab':  function (option) {
          option.display.input.blur();
        },
        'Shift-Tab':  function (option) {
          option.display.input.blur();
        },
        'Ctrl-Space': 'autocomplete',
        'Cmd-E': function (option) {
          // option.display.input.blur();
        },
        'Ctrl-E': function (option) {
          // option.display.input.blur();
        }
      },
      autoCloseBrackets: true,
      matchBrackets: true,
      lint: true,

      dragDrop: true,

    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      CodeMirror.defineExtension("autoFormatRange", function (from, to) {
        var cm = this;
        var outer = cm.getMode(), text = cm.getRange(from, to).split("\n");
        var state = CodeMirror.copyState(outer, cm.getTokenAt(from).state);
        var tabSize = cm.getOption("tabSize");

        var out = "", lines = 0, atSol = from.ch == 0;
        function newline() {
          out += "\n";
          atSol = true;
          ++lines;
        }

        for (var i = 0; i < text.length; ++i) {
          var stream = new CodeMirror.StringStream(text[i], tabSize);
          while (!stream.eol()) {
            var inner = CodeMirror.innerMode(outer, state);
            var style = outer.token(stream, state), cur = stream.current();
            stream.start = stream.pos;
            if (!atSol || /\S/.test(cur)) {
              out += cur;
              atSol = false;
            }
            if (!atSol && inner.mode.newlineAfterToken &&
              inner.mode.newlineAfterToken(style, cur, stream.string.slice(stream.pos) || text[i + 1] || "", inner.state))
              newline();
          }
          if (!stream.pos && outer.blankLine) outer.blankLine(state);
          if (!atSol) newline();
        }

        cm.operation(function () {
          cm.replaceRange(out, from, to);
          for (var cur = from.line + 1, end = from.line + lines; cur <= end; ++cur)
            cm.indentLine(cur, "smart");
        });
      });

      // Applies automatic mode-aware indentation to the specified range
      CodeMirror.defineExtension("autoIndentRange", function (from, to) {
        var cmInstance = this;
        this.operation(function () {
          for (var i = from.line; i <= to.line; i++) {
            cmInstance.indentLine(i, "smart");
          }
        });
      });
      this.editor = this.codeEditor.codeMirror;

      const doc = this.editor.getDoc();
      this.editor.on('change', (editor: CodeMirror.Editor, event: Event) => {
        this.content = editor.getDoc().getValue();
        this.contentChange.emit(this.content);
        this.onChangeRegister(this.content);
      });
      this.editor.on('dragstart', (editor: CodeMirror.Editor, event: Event) => {
        editor.getDoc().getValue();
      });
      this.editor.on('dragover', (editor: CodeMirror.Editor, event: Event) => {
      });
      this.editor.on('dragenter', (editor: CodeMirror.Editor, event: Event) => {
      });
      this.editor.on('dragleave', (editor: CodeMirror.Editor, event: Event) => {
        editor.getDoc().getValue();
      });
      this.editor.on('drop', (editor: CodeMirror.Editor, event: Event) => {
        editor.getDoc().getValue();
      });
    });
  }

  setEditorContent(event) {
    this.contentChange.emit(event);
  }
  formatCode = () => {
    var totalLines = this.editor.lineCount();
    this.editor.autoFormatRange({ line: 0, ch: 0 }, { line: totalLines });
  }

  snippet = function (option) {
    CodeMirror.showHint(option, function (): any {
      const cursor = this.editor.getCursor()
      const token = this.editor.getTokenAt(cursor)
      const start: number = token.start
      const end: number = cursor.ch
      const line: number = cursor.line
      const currentWord: string = token.string
    }, { completeSingle: false })
  }



  writeValue(val: any): void {
    this.content = val;
  }

  registerOnChange(fn: any): void {
    this.onChangeRegister = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(boolv: boolean): void {
    this.disabled = boolv;
  }

  synonyms(cm, option) {
    // var vm = this;
    return new Promise(
      function (accept) {

        const cursor = cm.getCursor()
        const token = cm.getTokenAt(cursor)
        const start: number = token.start
        const end: number = cursor.ch
        const line: number = cursor.line

        let word: string = token.string;
        word = word.replace('.', '')
        word = word.toLowerCase().replace('obj', '');
        if(word.length == 0){return;}

        let url = cm.options.extraKeys.modelRequest.url.replace('{word}', word);
        cm.options.extraKeys.getCall.getData(url).toPromise().then(
          (res) => {
            let autoList = [];
            if (res && res.length > 0) {
              autoList = res;
            }
            const iStart = start + end;
            const iEnd = iStart +1;
            return accept({
              list: autoList,
              from: CodeMirror.Pos(line, iStart),
              to: CodeMirror.Pos(line, iEnd)
            })
            return accept(null)
          })
      }

    )
  }
}
