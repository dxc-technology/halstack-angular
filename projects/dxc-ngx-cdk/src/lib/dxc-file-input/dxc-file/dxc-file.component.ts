import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import { C } from "@angular/cdk/keycodes";
import {
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs";
import { FileData } from "../model/file-info";
import { RemoveFileData } from "../model/removefiledata";
import { IFileService } from "../model/IFileService";
import { FILE_SERVICE } from "../services/file-provider..service";

@Component({
  selector: "dxc-file",
  templateUrl: "./dxc-file.component.html",
})
export class DxcFileComponent implements OnInit {
  @HostBinding("class") className;

  @Input() file: FileData;
  @Input() multiple: boolean;
  @Input() mode: string;
  @Input() updatable: boolean;
  @Input()
  get showPreview(): boolean {
    return this._showPreview;
  }
  set showPreview(value: boolean) {
    this._showPreview = coerceBooleanProperty(value);
  }
  private _showPreview = false;
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }

  @Output() onFileRemove = new EventEmitter<RemoveFileData>();

  private _tabIndexValue = 0;
  public postResp: Array<string> = [];

  hasError: boolean = false;
  hasShowError: boolean = false;
  hasShowPreviewImage: boolean = false;
  hasShowPreviewIcon: boolean = false;
  hasShowPreview: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    showPreview: false,
    multiple: false,
    mode: null,
  });

  constructor(@Inject(FILE_SERVICE) private fileService: IFileService) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.file.error !== null &&
    this.file.error !== undefined &&
    this.file.error.length !== 0
      ? (this.hasError = true)
      : (this.hasError = false);
    this.hasShowError = this.isErrorPrintable();
    this.hasShowPreviewImage = this.isShowPreviewPrintable();
    this.hasShowPreviewIcon = this.isShowPreviewPrintable(false);
    this.hasShowPreview = this.isShowPreview();

    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  ngOnInit(): void {
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  onRemoveHandler(event: any): void {
    let filedata = new RemoveFileData();
    filedata.fileName = this.file.data.name;
    filedata.uniqueFileName = this.file.data.uniqueFileName;
    filedata.uploadId = this.file.postResponse['uploadId'];  //Prakash changes
    filedata.lastModified = this.file.data.lastModified;
    if (this.updatable) {
      this.fileService.remove(this.file);
      this.onFileRemove.emit(filedata);
    }
  }

  private isShowPreview() {
    return (
      (this.showPreview && this.mode !== "file") ||
      (this.showPreview && this.mode === "file" && this.multiple)
    );
  }

  private isShowPreviewPrintable(containsImage = true) {
    return containsImage
      ? (this.showPreview && this.file.image && this.mode !== "file") ||
          (this.showPreview &&
            this.file.image &&
            this.mode === "file" &&
            this.multiple)
      : (this.showPreview && !this.file.image && this.mode !== "file") ||
          (this.showPreview &&
            !this.file.image &&
            this.mode === "file" &&
            this.multiple);
  }

  private isErrorPrintable() {
    return (
      this.hasError &&
      ((this.multiple && this.mode === "file") || this.mode !== "file")
    );
  }

  getIconAriaLabel() {
    if (this.file.data.type.includes("video")) {
      return "video";
    }
    if (this.file.data.type.includes("audio")) {
      return "audio";
    }
    if (this.file.data.type.includes("image")) {
      return "image";
    }
    return "file";
  }

  getRemoveAriaLabel() {
    return "Remove " + this.file.data.name;
  }

  getDynamicStyle(inputs) {
    return css`
      height: ${this.hasError
        ? inputs.mode !== "file"
          ? "fit-content"
          : !inputs.multiple
          ? "40px"
          : "fit-content"
        : this.hasShowPreviewImage || this.hasShowPreviewIcon
        ? "64px"
        : "40px"};
      background: ${this.hasError
          ? "var(--fileInput-errorFileItemBackgroundColor)"
          : "#ffffff"}
        0% 0% no-repeat padding-box;
      border: var(--fileInput-fileItemBorderThickness)
        var(--fileInput-fileItemBorderStyle);
      border-color: ${this.hasError
        ? "var(--fileInput-errorFileItemBorderColor)"
        : "var(--fileInput-fileItemBorderColor)"};
      width: ${inputs.multiple || inputs.mode !== "file" ? "320px" : "230px"};
      border-radius: var(--fileInput-fileItemBorderRadius);
      padding: 8px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      margin-top: ${inputs.multiple || inputs.mode !== "file" ? "4px" : ""};
      margin-left: ${!inputs.multiple && inputs.mode === "file" ? "4px" : ""};
      .previewContainer {
        background-color: ${this.hasError
          ? "var(--fileInput-errorFilePreviewBackgroundColor)"
          : "var(--fileInput-filePreviewBackgroundColor)"};
        display: flex;
        align-items: center;
        place-content: center;
        padding: 12px;
        box-sizing: border-box;
        height: 48px;
        width: 48px;
        svg,
        img {
          fill: ${this.hasError
            ? "var(--fileInput-errorFilePreviewIconColor)"
            : "var(--fileInput-filePreviewIconColor)"};
          height: 24px;
          width: 24px;
        }
      }
      .infoContainer {
        display: flex;
        flex-direction: column;
        width: ${(inputs.showPreview &&
          inputs.mode === "file" &&
          !inputs.multiple) ||
        !inputs.showPreview
          ? "100% "
          : "calc(100% - 48px)"};
        .fileContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .fileName {
            color: var(--fileInput-fileNameFontColor);
            padding-left: 8px;
            height: 24px;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 100%;
            display: block;
            overflow: hidden;
            box-sizing: border-box;
            font-family: var(--fileInput-fileItemFontFamily);
            font-size: var(--fileInput-fileItemFontSize);
            font-weight: var(--fileInput-fileItemFontWeight);
            line-height: var(--fileInput-fileItemLineHeight);
          }
          .fileIcons {
            display: flex;
            flex-direction: row;
            .removeIcon,
            .errorIcon {
              display: flex;
              align-items: center;
              height: 24px;
              width: 24px;
              justify-content: center;
            }
            .removeIcon {
              svg {
                height: 16px;
                width: 16px;
                fill: var(--fileInput-deleteFileItemIconColor);
              }
              &:hover,
              &:active {
                border-radius: 4px;
                cursor: pointer;
              }
              &:hover {
                background-color: var(
                  --fileInput-hoverDeleteFileItemBackgroundColor
                );
              }
              &:active {
                background-color: var(
                  --fileInput-activeDeleteFileItemBackgroundColor
                );
              }
              &:focus {
                outline: var(--fileInput-focusDeleteFileItemBackgroundColor)
                  auto 1px;
              }
            }
            .errorIcon {
              margin-right: 4px;
              svg {
                height: 18px;
                width: 18px;
                fill: #d0011b;
              }
            }
          }
        }
      }
      .errorContainer {
        width: 100%;
        padding-left: 8px;
        box-sizing: border-box;
        .errorMessage {
          text-align: left;
          letter-spacing: 0.37px;
          color: var(--fileInput-errorMessageFontColor);
          font-family: var(--fileInput-errorMessageFontFamily);
          font-size: var(--fileInput-errorMessageFontSize);
          font-weight: var(--fileInput-errorMessageFontWeight);
          line-height: var(--fileInput-errorMessageLineHeight);
        }
      }
    `;
  }
}
