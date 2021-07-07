import { CssUtils } from './../scss/utils';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';

@Component({
  selector: 'dxc-text-editor',
  templateUrl: './dxc-text-editor.component.html',
  styleUrls: ['./dxc-text-editor.component.scss'],
  providers: [CssUtils, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcTextEditorComponent),
    multi: true
  }]
})
export class DxcTextEditorComponent implements OnInit, ControlValueAccessor {
  @Input() id = '';
  @Input() result = '';
  @Input() disabled = false;
  @Output() resultChange = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<string>();

  froalaOptions = {
    charCounterCount: true,
    autofocus: true,
    tabSpaces: false,
    attribution: false,
    height: '265',
    key: 'mPD4tE1C1E1G2I2B1sGXd1WWTDSGXYOUKh1KINLb1OG1g1H-8D1B3D3C1E6D1G2B4D4A3==',
    htmlAllowedTags: ['font', 'a', 'abbr', "address",
      "area", "article", "aside", "audio", "b", "base",
      "bdi", "bdo", "blockquote", "br", "button", "canvas",
      "caption", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "queue", "rp", "rt", "ruby", "s", "samp", "script", "style", "section", "select", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "var", "video", "wbr"],
    htmlAllowedAttrs: ["face", "style", "class", "data", "dir", "accept", "accept-charset", "accesskey", "action", "align", "allowfullscreen", "allowtransparency", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "background", "bgcolor", "border", "charset", "cellpadding", "cellspacing", "checked", "cite", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "datetime", "default", "defer", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "frameborder", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "mozallowfullscreen", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "src", "srcdoc", "srclang", "srcset", "start", "step", "summary", "spellcheck", "tabindex", "target", "title", "type", "translate", "usemap", "value", "valign", "webkitallowfullscreen", "width", "wrap"],
    pasteDeniedAttrs: ["id"],
    events: {
      contentChanged: (e: any, editor: any) => {
        setTimeout(() => {
          this.onChanges(this.result);
        });
      },
      'froalaEditor.html.set': function () { },
      'froalaEditor.paste.after': function () { },
      'froalaEditor.paste.beforeCleanup': function (e, editor, clipboard_html) {
      }
    },
  };

  constructor() { }
  public onTouched: () => void = () => { };
  public onChangeRegister = (val) => { };

  ngOnInit() {
  }

  onChanges = (value) => {
    this.resultChange.emit(value);
    this.onChangeRegister(value);
    this.onChange.emit(value);
  }

  writeValue(val: any): void {
    this.result = val;
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
}
