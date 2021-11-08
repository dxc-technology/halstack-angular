import { coerceBooleanProperty } from "@angular/cdk/coercion";
import {
  Component,
  HostBinding,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { css } from "emotion";
import { BehaviorSubject } from "rxjs";
import { FileData } from "../interfaces/file.interface";
import { FilesService } from "../services/files.services";

@Component({
  selector: "dxc-file",
  templateUrl: "./dxc-file.component.html",
})
export class DxcFileComponent implements OnInit {
  @HostBinding("class") className;
  @HostBinding("class.error") hasError: boolean = false;

  @Input() file: FileData;
  @Input() multiple: boolean;
  @Input() mode: string;
  @Input()
  get showPreview(): boolean {
    return this._showPreview;
  }
  set showPreview(value: boolean) {
    this._showPreview = coerceBooleanProperty(value);
  }
  private _showPreview = false;

  hasShowError: boolean = false;
  hasShowPreviewImage: boolean = false;
  hasShowPreviewIcon: boolean = false;

  defaultInputs = new BehaviorSubject<any>({
    showPreview: false,
    multiple: false,
    mode: null,
  });

  constructor(private service: FilesService) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.file.error !== null && this.file.error !== undefined
    ? (this.hasError = true)
    : (this.hasError = false);

    this.hasShowError = this.isErrorPrintable();
    this.hasShowPreviewImage = this.isShowPreviewPrintable();
    this.hasShowPreviewIcon = this.isShowPreviewPrintable(false);

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

  onRemoveHandler($event: any): void {
    this.service.removeFile(this.file);
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

  getDynamicStyle(inputs) {
    return css`
      height: ${!inputs.showPreview ? "40px" : "64px"};
      background: #ffffff 0% 0% no-repeat padding-box;
      border: var(--fileInput-fileItemBorderThickness)
        var(--fileInput-fileItemBorderStyle)
        var(--fileInput-fileItemBorderColor);
      width: 320px;
      border-radius: var(--fileInput-fileItemBorderRadius);
      padding: 8px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      margin-top: ${inputs.multiple || inputs.mode !== "file" ? "4px" : ""};
      margin-left: ${!inputs.multiple && inputs.mode === "file" ? "4px" : ""};
      .previewContainer {
        background-color: #e6e6e6;
        display: flex;
        align-items: center;
        place-content: center;
        padding: 12px;
        box-sizing: border-box;
        height: 48px;
        width: 48px;
        svg,
        img {
          fill: #808080;
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
            font-color: var(--fileInput-fileNameFontColor);
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
              }
              &:hover,
              &:active {
                border-radius: 4px;
                cursor: pointer;
              }
              &:hover {
                background-color: var(
                  --fileInput-hoverFileItemIconBackgroundColor
                );
              }
              &:active {
                background-color: var(
                  --fileInput-activeFileItemIconBackgroundColor
                );
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

      &.error {
        background: var(--fileInput-errorFileItemBackgroundColor) 0% 0%
          no-repeat padding-box;
        border: 1px solid var(--fileInput-errorFileItemBorderColor);
        height: ${inputs.mode !== "file"
          ? "fit-content"
          : !inputs.multiple
          ? "40px"
          : "fit-content"};
        .previewContainer {
          background-color: #ffc9ce;
          svg {
            fill: #d0011b;
          }
        }
        .infoContainer .errorContainer {
          width: 50%;
          padding-left: 8px;
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
      }
    `;
  }
}
