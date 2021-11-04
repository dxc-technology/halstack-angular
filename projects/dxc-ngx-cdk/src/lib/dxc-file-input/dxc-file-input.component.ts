import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { v4 as uuidv4 } from "uuid";
import { FileData } from "./interfaces/file.interface";
import { FilesService } from "./services/files.services";

@Component({
  selector: "dxc-file-input",
  templateUrl: "./dxc-file-input.component.html",
  providers: [CssUtils, FilesService],
})
export class DxcFileInputComponent implements OnChanges, OnInit {
  @HostBinding("class") className;

  @Input() public name: string;
  @Input() public mode: string = "file";
  @Input() public label: string;
  @Input() public helperText: string;
  @Input() public value: Array<FileData>;
  @Input() public accept: any;
  @Input()
  get maxSize(): number {
    return this._maxSize;
  }
  set maxSize(value: number) {
    this._maxSize = coerceNumberProperty(value);
  }
  private _maxSize;
  @Input()
  get minSize(): number {
    return this._minSize;
  }
  set minSize(value: number) {
    this._minSize = coerceNumberProperty(value);
  }
  private _minSize;
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple = true;
  @Input()
  get showPreview(): boolean {
    return this._showPreview;
  }
  set showPreview(value: boolean) {
    this._showPreview = coerceBooleanProperty(value);
  }
  private _showPreview;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled;
  @Input() public margin: any;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue = 0;

  @Output() callbackFile = new EventEmitter<any>();

  defaultInputs = new BehaviorSubject<any>({
    name: null,
    mode: "file",
    label: null,
    helperText: null,
    accept: null,
    maxSize: null,
    minSize: null,
    multiple: true,
    showPreview: false,
    disabled: false,
    margin: null,
    tabIndexValue: 0,
    value: null
  });

  id: string;
  files: Array<FileData> = [];
  hoveringWithFile: boolean = false;
  filesLoaded: boolean = false;
  numberFiles: number = 0;

  constructor(private utils: CssUtils, private service: FilesService) {
    this.service.files.subscribe(({files, event}) => {
      if (files) {
        this.files = files;
        if ((this.numberFiles === this.files?.length && event === "add") || event === "remove") {
          this.callbackFile.emit(this.files);
        }
        if(event === "remove"){
          this.numberFiles = this.files.length;
        }
      }
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if(this.files !== this.value && this.value !== null && this.value){
      this.files = this.value;
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnInit() {
    this.id = this.id || uuidv4();
    this.files = this.value;
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  dragOver(event) {
    event.preventDefault();
    this.hoveringWithFile = true;
  }

  dragLeave(event) {
    event.preventDefault();
    this.hoveringWithFile = false;
  }

  drop(event) {
    event.preventDefault();
    this.hoveringWithFile = false;
    this.numberFiles = event.dataTransfer.files.length;
    Array.from(event.dataTransfer.files).map((file) => {
      this.getPreview(file);
    });
  }

  onFileInput(event) {
    this.numberFiles = event.target.files.length;
    Array.from(event.target.files).map((file) => {
      this.getPreview(file);
    });
  }

  getPreview(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (!file.type.includes("image") || file.type.includes("image/svg")) {
        let fileToAdd: FileData = {
          data: file,
          image: null
        };
        this.service.addFile(fileToAdd);
      } else {
        let fileToAdd: FileData = {
          data: file,
          image: event.target["result"]
        };
        this.service.addFile(fileToAdd);
      }
    };
  }

  getModeStyle(inputs) {
    if (inputs.mode === "filedrop") {
      return this.getFileDropStyle();
    } else if (inputs.mode === "dropzone") {
      return this.getDropZoneStyle();
    } else {
      return this.getFileStyle();
    }
  }

  getFileStyle() {
    return css`
      .fileInputContainer {
        flex-direction: ${!this.multiple ? "row" : "column"};
      }
    `;
  }

  getDropZoneStyle() {
    return css`
      .fileInputContainer {
        flex-direction: column;
        .dragDropArea {
          height: 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .dropLabel {
            margin-top: 8px;
          }
        }
      }
    `;
  }

  getFileDropStyle() {
    return css`
      .fileInputContainer {
        flex-direction: column;
        .dragDropArea {
          padding: 3px;
          height: 48px;
          box-sizing: border-box;
          .dropLabel {
            margin-left: 12px;
          }
        }
      }
    `;
  }

  getDynamicStyle(inputs) {
    return css`
      ${this.utils.getMargins(inputs.margin)}
      ${this.getModeStyle(inputs)}
      width: fit-content;
      display: flex;
      flex-direction: column;
      ${inputs.disabled ? "cursor: not-allowed;" : ""}
      .fileInputContainer {
        display: flex;
        dxc-button {
          width: fit-content;
        }
        .dragDropArea {
          width: 320px;
          box-sizing: border-box;
          background: #ffffff 0% 0% no-repeat padding-box;
          border: var(--fileInput-dropBorderThickness)
            var(--fileInput-dropBorderStyle)
            ${!inputs.disabled
              ? "var(--fileInput-dropBorderColor)"
              : "var(--fileInput-disabledDropBorderColor)"};
          border-radius: var(--fileInput-dropBorderRadius);
          .dropLabel {
            text-align: left;
            letter-spacing: 0.49px;
            color: ${!inputs.disabled
              ? "var(--fileInput-dropLabelFontColor)"
              : "var(--fileInput-disabledDropLabelFontColor)"};
            font-family: var(--fileInput-dropLabelFontFamily);
            font-size: var(--fileInput-dropLabelFontSize);
            font-weight: var(--fileInput-dropLabelFontWeight);
          }
          &.hovering {
            ${!inputs.disabled
              ? "border: 2px solid var(--fileInput-focusDropBorderColor); background: var(--fileInput-focusDropBackgroundColor) 0% 0% no-repeat padding-box;"
              : ""}
          }
        }
        .fileContainer {
          display: flex;
          flex-direction: column;
        }
      }
      .errorMessage {
        text-align: left;
        letter-spacing: 0.37px;
        color: var(--fileInput-errorMessageFontColor);
        font-family: var(--fileInput-errorMessageFontFamily);
        font-size: var(--fileInput-errorMessageFontSize);
        font-weight: var(--fileInput-errorMessageFontWeight);
        line-height: var(--fileInput-errorMessageLineHeight);
      }
      .label {
        text-align: left;
        letter-spacing: 0px;
        color: ${!inputs.disabled
          ? "var(--fileInput-labelFontColor)"
          : "var(--fileInput-disabledLabelFontColor)"};
        font-family: var(--fileInput-labelFontFamily);
        font-size: var(--fileInput-labelFontSize);
        font-weight: var(--fileInput-labelFontWeight);
        line-height: var(--fileInput-labelLineHeight);
      }
      .helperText {
        text-align: left;
        letter-spacing: 0px;
        color: ${!inputs.disabled
          ? "var(--fileInput-helperTextFontColor)"
          : "var(--fileInput-disabledHelperTextFontColor)"};
        font-family: var(--fileInput-helperTextFontFamily);
        font-size: var(--fileInput-helperTextFontSize);
        font-weight: var(--fileInput-helperTextFontWeight);
        line-height: var(--fileInput-helperTextLineHeight);
      }
    `;
  }
}
