import { Component, Input, OnChanges, EventEmitter } from "@angular/core";
import { CssUtils } from "../utils";
import { css } from "emotion";
import { SimpleChanges, HostBinding } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { coerceNumberProperty } from "@angular/cdk/coercion";
import { UploadService } from "./services/upload.service";
import { Space, Spacing, UploadProperties } from "./dxc-upload.type";

@Component({
  selector: "dxc-upload",
  templateUrl: "./dxc-upload.component.html",
  styleUrls: ["./dxc-upload.component.scss"],
  providers: [CssUtils, UploadService],
})
export class DxcUploadComponent implements OnChanges {
  private files = [];

  uploadedFiles = [];

  newFile = new EventEmitter<any>();

  /**
   * This function will be called when the user clicks the 'Upload' button for every file to be uploaded, we will as a parameter the File object; apart from that this function should return one promise on which we should make 'then'(here we should show a Success alert) or 'catch' (in this case we would receive the error message as a string)
   */
  @Input() public uploadCallback: Function;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different padding sizes.
   */
  @Input() margin: Spacing | Space;
  /**
   * Value of the tabindex given to every interactuable elements.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  private _tabIndexValue;
  @HostBinding("class") className;

  styleDxcUpload: string;

  defaultInputs = new BehaviorSubject<UploadProperties>({
    margin: null,
    tabIndexValue: 0,
  });

  constructor(private utils: CssUtils, private service: UploadService) {}

  ngOnInit() {
    this.className = `${this.setDxcUploadDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const inputs = Object.keys(changes).reduce((result, item) => {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.setDxcUploadDynamicStyle(
      this.defaultInputs.getValue()
    )}`;
  }

  addFiles($event) {
    Array.from($event).forEach((file) => {
      this.getPreview(file);
    });
  }

  getPreview(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (!file.type.includes("image") || file.type.includes("image/svg")) {
        const fileToPush = {};
        fileToPush["status"] = "pending";
        fileToPush["fileData"] = file;
        fileToPush["image"] = null;
        this.files.push(fileToPush);
      } else {
        const fileToPush = {};
        fileToPush["status"] = "pending";
        fileToPush["fileData"] = file;
        fileToPush["image"] = event.target["result"];
        this.files.push(fileToPush);
      }
    };
  }

  getFilesToUpload() {
    const aux = this;
    return this.files
      .filter(function (file) {
        return file.status === "pending";
      })
      .map(function (file) {
        const fileInfo = {};
        let sizeValue = file.fileData.size / (1024 * 1024);
        let size;
        sizeValue < 0.001
          ? (size = `${(file.fileData.size / 1024).toFixed(2)} KB`)
          : (size = `${sizeValue.toFixed(2)} MB`);
        fileInfo["name"] = file.fileData.name;
        fileInfo["size"] = size;
        fileInfo["format"] = file.fileData.type;
        fileInfo["image"] = file.image;
        fileInfo["removeFile"] = function () {
          const index = aux.files.indexOf(file, 0);
          if (index > -1) {
            aux.files.splice(index, 1);
          }
        };
        return fileInfo;
      });
  }

  getUploadedFiles() {
    this.uploadedFiles = this.files
      .filter(function (file) {
        return file.status !== "pending";
      })
      .map(function (file) {
        const fileInfo = {};
        fileInfo["name"] = file.fileData.name;
        fileInfo["format"] = file.fileData.type;
        fileInfo["status"] = file.status;
        fileInfo["errorMessage"] = file.errorMessage;
        return fileInfo;
      });
  }

  getSuccessfullyUploadedFiles() {
    return this.files.filter(function (file) {
      return file.status === "success";
    }).length;
  }

  toUploadVisibility() {
    const pending = this.files.filter(function (file) {
      return file.status === "pending";
    });

    if (pending.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  uploadedVisibility() {
    const pending = this.files.filter(function (file) {
      return file.status !== "pending";
    });

    if (pending.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  handleUpload() {
    const aux = this;
    let promises = [];
    let errorMessage = "";
    this.files.forEach((file) => {
      if (file.status === "pending") {
        file.status = "processing";
        promises.push(
          this.uploadCallback(file)
            .then(() => {
              file.status = "success";
              aux.getUploadedFiles();
            })
            .catch((err) => {
              errorMessage = err;
              file.status = "error";
              file.errorMessage = err;
              aux.getUploadedFiles();
            })
            .finally()
        );
        this.getUploadedFiles();
      }
    });
    Promise.all(promises).then(() => {
      errorMessage
        ? this.service.setErrorMessage(errorMessage)
        : this.service.setSuccess(true);
    });
  }

  setDxcUploadDynamicStyle(input: any) {
    return css`
      ${this.utils.getMargins(input.margin)};
    `;
  }
}
