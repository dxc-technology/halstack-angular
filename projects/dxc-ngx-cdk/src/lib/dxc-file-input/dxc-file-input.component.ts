import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { CssUtils } from "../utils";
import { v4 as uuidv4 } from "uuid";
import { FileData } from "./interfaces/file.interface";
import { FilesService } from "./services/files.services";
import { NgChanges } from "../typings/ng-onchange";

interface FileInputProperties {
  name: string;
  mode: string;
  label: string;
  helperText: string;
  accept: string;
  multiple: boolean;
  showPreview: boolean;
  disabled: boolean;
  margin: string;
  tabIndexValue: number;
  value: FileData;
}

@Component({
  selector: "dxc-file-input",
  templateUrl: "./dxc-file-input.component.html",
  providers: [CssUtils, FilesService],
})
export class DxcFileInputComponent implements OnChanges, OnInit {
  @ViewChild("fileInput", { static: false }) fileInputNative: ElementRef;
  @HostBinding("class") className;
  @Input() public name: string;
  @Input() public mode: string = "file";
  @Input() public label: string;
  @Input() public helperText: string;
  @Input() public value: Array<FileData>;
  @Input() public accept: any;
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
  hasShowError: boolean = false;

  @Output() callbackFile = new EventEmitter<any>();

  defaultInputs = new BehaviorSubject<FileInputProperties>({
    name: null,
    mode: "file",
    label: null,
    helperText: null,
    accept: null,
    multiple: true,
    showPreview: false,
    disabled: false,
    margin: null,
    tabIndexValue: 0,
    value: null,
  });

  id: string;
  files: Array<FileData> = [];
  hoveringWithFile: boolean = false;
  filesLoaded: boolean = false;
  numberFiles: number = 0;
  hasMultipleFiles: boolean = false;
  hasSingleFile: boolean = false;
  hasErrorSingleFile: boolean = false;

  constructor(private utils: CssUtils, private service: FilesService) {
    this.service.files.subscribe(({ files, event }) => {
      if (files) {
        this.files = files;
        this.hasShowError = this.isErrorShow();
        this.hasMultipleFiles = this.isMultipleFilesPrintables();
        this.hasSingleFile = this.isMultipleFilesPrintables(true);
        this.callbackFile.emit(this.files);
      }
    });
  }

  ngOnInit() {
    this.id = this.id || uuidv4();
    this.hasShowError = this.isErrorShow();
    this.hasMultipleFiles = this.isMultipleFilesPrintables();
    this.hasSingleFile = this.isMultipleFilesPrintables(true);
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnChanges(changes: NgChanges<DxcFileInputComponent>): void {
    if(this.fileInputNative){
      this.multiple ? this.fileInputNative.nativeElement.setAttribute("multiple", true) : this.fileInputNative.nativeElement.removeAttribute("multiple");
    }
    if (this.files !== this.value && this.value !== null && this.value) {
      this.value.forEach((file) => {
        this.service.addFile(file);
      });
    }
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngAfterViewInit(): void {
    if(this.fileInputNative){
      this.multiple ? this.fileInputNative.nativeElement.setAttribute("multiple", true) : this.fileInputNative.nativeElement.removeAttribute("multiple");
    }
  }

  /**
   * File drop y drop zone
   * @param event
   */
  dragOver(event) {
    event.preventDefault();
    this.hoveringWithFile = true;
  }

  /**
   * File drop y drop zone
   * @param event
   */
  dragLeave(event) {
    event.preventDefault();
    this.hoveringWithFile = false;
  }

  /**
   * File drop y drop zone
   * @param event
   */
  drop(event) {
    event.preventDefault();
    this.hoveringWithFile = false;
    if (this.multiple || (!this.multiple && this.files.length === 0)) {
      this.getPreviewsFiles(event.dataTransfer.files);
    }
  }

  /**
   * Common function for both file modes.
   * @param event
   */
  onFileInput(event) {
    if (this.multiple || (!this.multiple && this.files?.length === 0)) {
      this.getPreviewsFiles(event.target.files);
      event.target.value = "";
    }
  }

  /**
   * Common function for both file modes.
   * @param eventFiles
   */
  getPreviewsFiles(eventFiles) {
    this.numberFiles = eventFiles.length;
    Array.from(eventFiles).map((file) => {
      this.getPreview(file);
    });
  }

  /**
   * Common function for both file modes.
   * @param file
   */
  getPreview(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (!file.type.includes("image") || file.type.includes("image/svg")) {
        let fileToAdd: FileData = {
          data: file,
          image: null,
          error: null,
        };
        this.service.addFile(fileToAdd);
      } else {
        let fileToAdd: FileData = {
          data: file,
          image: event.target["result"],
          error: null,
        };
        this.service.addFile(fileToAdd);
      }
    };
  }

  private isMultipleFilesPrintables(isSingle = false) {
    return isSingle
      ? this.files?.length > 0 && !this.disabled && !this.multiple
      : this.files?.length > 0 && !this.disabled && this.multiple;
  }

  private isErrorShow = (): boolean =>
    !this.multiple &&
    this.mode === "file" &&
    this.files[0]?.error !== null &&
    this.files[0]?.error !== undefined &&
    !this.disabled;

  // /**
  //  * Update the native component input file via DOM with a
  //  * reference of the native element
  //  * @param files
  //  */
  // private updateFileInputNative(files: File[]) {
  //   const fileInput = this.fileInputNative.nativeElement;
  //   let list = new DataTransfer();
  //   for (let i = 0; i < files.length; i++) {
  //     list.items.add(files[i]);
  //   }
  //   fileInput.files = list.files;
  // }

  /**
   * Define the type of file component. Just for styling
   * @param inputs
   * @returns
   */
  getModeStyle(inputs: FileInputProperties) {
    if (inputs.mode === "filedrop") {
      return this.getFileDropStyle();
    } else if (inputs.mode === "dropzone") {
      return this.getDropZoneStyle();
    } else {
      return this.getFileStyle(inputs.multiple);
    }
  }

  /**
   * Just for file mode.
   * @param inputs
   * @returns
   */
  getFileStyle(multiple: boolean) {
    return css`
      .fileInputContainer {
        flex-direction: ${multiple === false ? "row" : "column"};
      }
    `;
  }

  /**
   * Just for drop zone.
   * @param inputs
   * @returns
   */
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
  /**
   * Just for drop zone.
   * @param inputs
   * @returns
   */
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

  /**
   * Common functionality for styling
   * @param inputs
   * @returns
   */
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
        input {
         visibility: hidden;
         width: 0px;
         height: 0px;
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
        margin-bottom: 4px;
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
function forEach() {
  throw new Error("Function not implemented.");
}
