import {
  coerceBooleanProperty,
  coerceNumberProperty,
} from "@angular/cdk/coercion";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  forwardRef,
} from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject, Subscription, take } from "rxjs";
import { CssUtils } from "../utils";
import { v4 as uuidv4 } from "uuid";
import { FileData } from "./model/file-info";
import { FilesService } from "./services/files.services";
import { NgChanges } from "../typings/ng-onchange";
import { FileInputProperties, Space, Spacing } from "./dxc-file-input.types";
import { FileMetaData } from "./model/fileupload.metadata";
import { ChunkMetaData } from "./model/chunk.metadata";
import { IFileUploadRequest, EventType } from "./model/fileuploadrequest.data";
import { RemoveFileData } from "./model/removefiledata";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FILE_SERVICE } from "./services/file-provider..service";
import { IFileService } from "./model/IFileService";
import {
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpResponse,
} from "@angular/common/http";
@Component({
  selector: "dxc-file-input",
  templateUrl: "./dxc-file-input.component.html",
  providers: [
    CssUtils,
    FilesService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DxcFileInputComponent),
      multi: true,
    },
  ],
})
export class DxcFileInputComponent
  implements OnChanges, OnInit, ControlValueAccessor {
  @ViewChild("fileInput", { static: false }) fileInputNative: ElementRef;
  @HostBinding("class") className;
  /**
   * Name attribute.
   */
  @Input() public name: string = "";
  /**
   * Available modes of the component.
   */
  @Input() public mode: "file" | "filedrop" | "dropzone" = "file";
  /**
   * Text to be placed above the component.
   */
  @Input() public label: string = "";
  /**
   * Text to be placed inside the button.
   */
  @Input() public buttonLabel: string;
  /**
   * Helper text to be placed above the component.
   */
  @Input() public helperText: string = "";
  /**
   * An array of files representing the selected files.
   */
  @Input() public value: FileData[];
  /**
   * The file types that the component accepts. Its value must be one of all the possible values of the HTML file input's accept attribute.
   */
  @Input() public accept: string;
  /**
   * If true, the component allows multiple file items and will show all of them. If false, only one file will be shown,
   * and if there is already one file selected and a new one is chosen, it will be replaced by the new selected one.
   */
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }
  private _multiple = true;
  /**
   * If true, if the file is an image, a preview of it will be shown. If not, an icon refering to the file type will be shown.
   */
  @Input()
  get showPreview(): boolean {
    return this._showPreview;
  }
  set showPreview(value: boolean) {
    this._showPreview = coerceBooleanProperty(value);
  }
  private _showPreview = false;
  /**
   * If true, the component will be disabled.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;
  /**
   * The minimum file size (in bytes) allowed. If the size of the file does not comply the minSize, the file will have an error.
   */
  @Input()
  get minSize(): number {
    return this._minSize;
  }
  set minSize(value: number) {
    this._minSize = coerceNumberProperty(value);
  }
  private _minSize;
  /**
   * The maximum file size (in bytes) allowed. If the size of the file does not comply the maxSize, the file will have an error.
   */
  @Input()
  get maxSize(): number {
    return this._maxSize;
  }
  set maxSize(value: number) {
    this._maxSize = coerceNumberProperty(value);
  }
  private _maxSize;
  /**
   * The maximum file count (in number) allowed. If the count of the files does not comply the maxFileCount, the file will have an error.
   */
  @Input()
  get maxFileCount(): number {
    return this._maxFileCount;
  }
  set maxFileCount(value: number) {
    this._maxFileCount = coerceNumberProperty(value);
  }
  private _maxFileCount;
  /**
   * Size of the margin to be applied to the component ('xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge').
   * You can pass an object with 'top', 'bottom', 'left' and 'right' properties in order to specify different margin sizes.
   */
  @Input() public margin: Space | Spacing;
  /**
   * Value of the tabindex attribute.
   */
  @Input()
  get tabIndexValue(): number {
    return this._tabIndexValue;
  }
  set tabIndexValue(value: number) {
    this._tabIndexValue = coerceNumberProperty(value);
  }
  /**
   * request object gets the value from APP and pass to halstack library.
   */
  @Input("resources") resources: {
    [key: string]: { description: string; type: string };
  };
  /**
   * request object gets the value from APP and pass to halstack library.
   */
  @Input("requests") requests: IFileUploadRequest = null;
  private _tabIndexValue = 0;
  hasShowError: boolean = false;
  /**
   * This event will emit when the user selects or drops a file. The file or list of files will be sent as a parameter.
   */
  @Output() callbackFile = new EventEmitter<FileData[]>();
  /**
   * This event has been added to indicate only PREUPLOAD, UPLOAD and POSTUPLOAD events. The event type will be sent as a parameter.
   */
  @Output() uploadEventType = new EventEmitter<EventType>();

  defaultInputs = new BehaviorSubject<FileInputProperties>({
    name: null,
    mode: "file",
    label: null,
    buttonLabel: null,
    helperText: null,
    accept: null,
    multiple: true,
    showPreview: false,
    disabled: false,
    margin: null,
    tabIndexValue: 0,
    value: null,
    maxSize: null,
    minSize: null,
    maxFileCount: null,
  });

  id: string;
  files: Array<FileData> = [];
  hoveringWithFile: boolean = false;
  filesLoaded: boolean = false;
  numberFiles: number = 0;
  hasMultipleFiles: boolean = false;
  hasSingleFile: boolean = false;
  hasErrorSingleFile: boolean = false;
  hasValue: boolean = false;
  chunkFileInfo: {
    fileName: string;
    chunkNumber: number;
    totalChunkCount: number;
    uploadedChunkCount;
  }[] = [];
  fileDataUpload: FileMetaData;
  fileEventType: EventType = EventType.PREUPLOAD;
  chunkResult: boolean;
  data: Array<FileData> = [];
  postResp: Array<string> = [];
  uniqueFileNameIndex: number = 0;
  //in byte
  uploadChunkSize: number = 1000000;
  isDuplicateUpload: boolean = false;
  uploadId: string;
  renderedValue = "";
  private totalUploadedChunkedSize = [];
  chunkUploadSubscription: {
    fileName: string;
    uploadRequests: Subscription[];
  }[] = [];
  uploadIdSubscription: Subscription;
  Subscription: Subscription;

  constructor(
    @Inject(FILE_SERVICE) private fileService: IFileService,
    private utils: CssUtils
  ) {
    this.Subscription = this.fileService.files.subscribe(({ files, event }) => {
      if (event !== "reset" && (files.length || this.hasValue)) {
        this.data = files;
        this.hasShowError = this.isErrorShow();
        this.hasMultipleFiles = this.isMultipleFilesPrintables();
        this.hasSingleFile = this.isSingleFilesPrintables();
        this.callbackFile.emit(files);
      }
    });
  }
  onTouched: () => void = () => { };
  onChangeRegister = (val) => { };

  writeValue(fileNames: any): void {
    this.renderedValue = fileNames || "";
  }

  registerOnChange(fn: any): void {
    this.onChangeRegister = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnDestroy(): void {
    this.uploadIdSubscription?.unsubscribe();
    this.Subscription?.unsubscribe();
    this.chunkUploadSubscription.forEach((subs) => {
      if (subs.uploadRequests.length > 0)
        this.unsubscribeUploadRequest(subs.fileName);
    });
  }

  ngOnInit() {
    this.id = this.id || uuidv4();
    this.hasValue = this.value ? true : false;
    this.hasShowError = this.isErrorShow();
    this.hasMultipleFiles = this.isMultipleFilesPrintables();
    this.hasSingleFile = this.isSingleFilesPrintables();
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
    if (!this.buttonLabel) {
      this.buttonLabel =
        this.mode === "file"
          ? this.multiple
            ? "Select files"
            : "Select file"
          : "Select";
    }
  }

  ngOnChanges(changes: NgChanges<DxcFileInputComponent>): void {
    if (this.fileInputNative) {
      this.multiple
        ? this.fileInputNative.nativeElement.setAttribute("multiple", true)
        : this.fileInputNative.nativeElement.removeAttribute("multiple");
    }
    if (this.value?.length > 0) {
      const arr: FileData[] = [];
      this.fileService.files.next({ files: arr, event: "reset" });
      this.value.forEach((file) => {
        if (!file.error) {
          file.error = this.checkFileSize(file.data);
        }
        this.fileService.add(file);
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
    if (this.fileInputNative) {
      this.multiple
        ? this.fileInputNative.nativeElement.setAttribute("multiple", true)
        : this.fileInputNative.nativeElement.removeAttribute("multiple");
    }
  }

  checkFileSize(file: File) {
    if (file.size < this.minSize) {
      return this.resources.minSize.description + "-" + this.minSize;
    }
    if (file.size > this.maxSize) {
      return this.resources.maxSize.description + "-" + this.maxSize;
    }
    if (this.data.length > this.maxFileCount) {
      return this.resources.maxFileCount.description + "-" + this.maxFileCount;
    }
    //return null;
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
    if (this.callbackFile.observers?.length > 0 && this.hasValue) {
      if (!this.multiple) {
        this.fileService.removeAll();
      }
      this.getPreviewsFiles(event.dataTransfer.files);
      this.processFiles(event.dataTransfer.files);
    }
  }

  /**
   * Common function for both file modes.
   * @param event
   */
  onFileInput(event) {
    if (this.callbackFile.observers?.length > 0 && this.hasValue) {
      if (!this.multiple) {
        this.fileService.removeAll();
      }
      this.onChangeRegister(event.target.files);
      this.getPreviewsFiles(event.target.files);
      for (let i = 0; i < this.data.length; i++) {
        if (event.target.files[0].name == this.data[i].data.name) {
          this.isDuplicateUpload = true;
        }
      }
      if (!this.isDuplicateUpload) {
        this.processFiles(event.target.files);
      }

      event.target.value = "";
    }
  }

  /**
   * File upload logic to send file as chunk and receive response.
   * @param event
   */
  processFiles(event) {
    this.files = event;
    this.isDuplicateUpload = false;
    this.fileEventType = EventType.UPLOAD;
    for (let i = 0; i < event.length; i++) {
      let fileDetails: any = event[i];
      this.uploadIdSubscription = this.fileService
        .uploadId(this.requests.uploadIdRequest.url + "/" + fileDetails.name)
        .subscribe((uploadResponse: Object) => {
          this.uploadId = uploadResponse as any;  //Prakash changes
          this.uploadFile(fileDetails);
        });
    }
  }

  uploadFile(eventFiles) {
    if (eventFiles.size < this.uploadChunkSize) {
      this.uploadWholeDoc(eventFiles);
    } else {
      this.uploadChunkDoc(eventFiles);
    }
    if (
      eventFiles.size < this.minSize ||
      eventFiles.size > this.maxSize ||
      this.data.length > this.maxFileCount
    ) {
      return;
    }
  }

  uploadChunkDoc(file) {
    let lastChunksize = 0;
    this.fileDataUpload = new FileMetaData();
    this.removeChunkFileInfo(file.name);
    let totalChunkCount =
      file.size % this.uploadChunkSize == 0
        ? file.size / this.uploadChunkSize
        : Math.floor(file.size / this.uploadChunkSize) + 1;
    this.chunkFileInfo.push({
      fileName: file.name,
      chunkNumber: 0,
      uploadedChunkCount: 0,
      totalChunkCount,
    });
    this.totalUploadedChunkedSize = [];
    this.chunkFileInfo.forEach((fileInfo) => {
      if (fileInfo.fileName == file.name) {
        this.totalUploadedChunkedSize.push(0);
      }
    });
    for (let x = 0; x < totalChunkCount; x++) { }
    this.fileDataUpload.fileName = file.name;
    this.readFile(file, lastChunksize, this.uploadtoAPI.bind(this));
  }

  uploadtoAPI(filedata, file, lastChunksize, result) {
    lastChunksize = lastChunksize + this.uploadChunkSize;
    this.chunkResult = result;
    if (result) {
      //Add you logic what do you want after reading the file
      this.uploadChunks(filedata);
      this.readFile(file, lastChunksize, this.uploadtoAPI.bind(this));
    }
  }

  uploadChunkComplete(fileName, progress) {
    let fileInfo = this.chunkFileInfo.filter(
      (fileInfo) => (fileInfo.fileName = fileName)
    );
    if (
      fileInfo.length > 0 &&
      fileInfo[0].uploadedChunkCount == fileInfo[0].totalChunkCount
    ) {
      this.fileDataUpload.totalChunks = fileInfo[0].totalChunkCount;
      this.fileDataUpload.uploadId = this.uploadId;
      this.fileService.uploadComplete(this.requests.uploadCompleteRequest.url, this.fileDataUpload).pipe(take(1)).subscribe(response => {
        //need to ask
        // if (!response.ok) {
        //   progress.status = 'failed';
        //   progress.value = 99;
        //   this.updateProgress(fileName, progress);
        // }
        this.data[0].postResponse = response as any //Prakash changes
        this.data[this.uniqueFileNameIndex].data.uniqueFileName = response as any;
        this.fileEventType = EventType.POSTUPLOAD;
        this.data[0].eventType = this.fileEventType;
        this.uniqueFileNameIndex++;
        this.callbackFile.emit(this.data);
        this.removeChunkFileInfo(fileName);
        progress.status = "success";
        progress.value = 100;
        this.updateProgress(fileName, progress, response); //Prakash changes
      });
    }
  }

  readFile(file, lastChunksize: number, uploadtoAPI) {
    let fileInfoIndex = this.chunkFileInfo.findIndex(
      (fileInfo) => fileInfo.fileName == file.name
    );
    let filedata = new ChunkMetaData();
    filedata.fileName = file.name;
    filedata.fileType = file.type;
    filedata.fileSize = file.size;
    filedata.chunkNumber = this.chunkFileInfo[fileInfoIndex].chunkNumber;
    filedata.uploadId = this.uploadId;
    var chunk = file.slice(lastChunksize, lastChunksize + 1000000);
    filedata.file = chunk;
    filedata.chunkSize = chunk.size;
    if (chunk.size != 0) {
      let fileReader = new FileReader();
      fileReader.onloadend = (result) => {
        this.chunkFileInfo[fileInfoIndex].chunkNumber =
          this.chunkFileInfo[fileInfoIndex].chunkNumber + 1;
        return uploadtoAPI(filedata, file, lastChunksize, fileReader.result);
      };
      fileReader.readAsDataURL(chunk);
    } else {
      return uploadtoAPI(filedata, file, lastChunksize, false);
    }
  }

  uploadWholeDoc(fileData) {
    let formParams = new FormData();
    formParams.set("file", fileData);
    const headers = new HttpHeaders({
      "Content-Type": "multipart/form-data",
    });
    const uploadSubscription = this.fileService
      .upload(this.requests.uploadRequest.url, formParams, headers)
      .subscribe((response: HttpEvent<Object>) => {
        let progress: {
          value: number;
          status: "progress" | "failed" | "success";
        } = {
          value: 0,
          status: "progress",
        };
        let postResponse;  //Prakash changes
        switch (response.type) {
          case HttpEventType.UploadProgress:
            progress.value =
              Math.round((100 * response.loaded) / response.total) > 99
                ? 99
                : Math.round((100 * response.loaded) / response.total);
            progress.status = "progress";
            break;
          case HttpEventType.ResponseHeader:
            if (!response?.ok) {
              progress.status = "failed";
            }
            break;
          case HttpEventType.Response:
            if (response?.ok) {
              progress.value = 100;
              progress.status = "success";
              postResponse = response?.body; //Prakash changes
            }

            break;
        }
        this.updateProgress(fileData.name, progress, postResponse); //Prakash changes
      });
    const SubscriptionManager = {
      fileName: fileData.fileName,
      uploadRequests: [uploadSubscription],
    };
    this.chunkUploadSubscription.push(SubscriptionManager);
  }

  /**
   * Common function for both file modes.
   * @param eventFiles
   */
  getPreviewsFiles(eventFiles) {
    this.numberFiles = eventFiles?.length;
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
          error: this.checkFileSize(file),
          eventType: this.fileEventType,
          postResponse: this.postResp,
          progress: {
            value: 0,
            status: "progress",
          },
        };
        this.fileService.add(fileToAdd);
      } else {
        let fileToAdd: FileData = {
          data: file,
          image: event.target["result"],
          error: this.checkFileSize(file),
          eventType: this.fileEventType,
          postResponse: this.postResp,
          progress: {
            value: 0,
            status: "progress",
          },
        };
        this.fileService.add(fileToAdd);
      }
    };
  }

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
      return this.getFileStyle();
    }
  }

  /**
   * Just for file mode.
   * @param inputs
   * @returns
   */
  getFileStyle() {
    return css`
      .fileInputContainer {
        flex-direction: ${this.value?.length > 1 || this.multiple
        ? "column"
        : "row"};
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
        ? "border: 2px solid var(--fileInput-focusDropBorderColor); background: var(--fileInput-dragoverDropBackgroundColor) 0% 0% no-repeat padding-box;"
        : ""}
          }
        }
        .fileContainer {
          display: flex;
          flex-direction: column;
          .success-progress-bar {
            .mdc-linear-progress__bar-inner {
              border-color: var(--file-input-success-progress-bar);
            }
            .mdc-linear-progress__buffer-bar {
              background-color: var(--file-input-success-buffer-bar);
            }
          }
          .active-progress-bar {
            .mdc-linear-progress__bar-inner {
              border-color: var(--file-input-active-progress-bar);
            }
            .mdc-linear-progress__buffer-bar {
              background-color: var(--file-input-active-buffer-bar);
            }
          }
          .failed-progress-bar {
            .mdc-linear-progress__bar-inner {
              border-color: var(--file-input-failed-progress-bar);
            }
            .mdc-linear-progress__buffer-bar {
              background-color: var(--file-input-failed-buffer-bar);
            }
          }
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

  fileRemoveHandler(fileData: RemoveFileData) {
    if (
      this.chunkUploadSubscription.filter((subscription) => {
        return subscription.fileName == fileData.fileName;
      }).length > 0
    ) {
      this.unsubscribeUploadRequest(fileData.fileName);
    }
    if (this.uniqueFileNameIndex == 0) {
      this.uniqueFileNameIndex--;
    }

    this.fileService.delete(this.requests.removeRequest.url, fileData).pipe(take(1)).subscribe((response) => {

    });
  }

  private uploadChunks(chunkFileDetails: ChunkMetaData) {
    let formParams = new FormData();
    formParams.append("file", chunkFileDetails.file);
    formParams.append("fileName", chunkFileDetails.fileName);
    formParams.append("fileSize", chunkFileDetails.fileSize.toString());
    formParams.append("fileType", chunkFileDetails.fileType);
    formParams.append("chunkNumber", chunkFileDetails.chunkNumber.toString());
    formParams.append("chunkSize", chunkFileDetails.chunkSize.toString());
    formParams.append("uploadId", this.uploadId);
    const headers = new HttpHeaders({
      "Content-Type": "multipart/form-data",
    });
    const uploadSubscription = this.fileService
      .upload(this.requests.uploadChunkRequest.url, formParams, headers)
      .subscribe((response: any) => {
        let progress: {
          value: number;
          status: "progress" | "failed" | "success";
        } = {
          value: 0,
          status: "progress",
        };
        switch (response.type) {
          case HttpEventType.UploadProgress:
            this.totalUploadedChunkedSize[chunkFileDetails.chunkNumber] =
              Math.round((100 * response.loaded) / response.total);
            let totalProgress = this.totalUploadedChunkedSize.reduce(
              (accumulator, currentValue) => {
                return accumulator + currentValue;
              },
              0
            );
            progress.value =
              Math.round(
                (100 * totalProgress) /
                (this.totalUploadedChunkedSize.length * 100)
              ) > 99
                ? 99
                : Math.round(
                  (100 * totalProgress) /
                  (this.totalUploadedChunkedSize.length * 100)
                );
            progress.status = "progress";
            break;
          case HttpEventType.ResponseHeader:
            if (!response?.ok) {
              progress.status = "failed";
              this.unsubscribeUploadRequest(chunkFileDetails.fileName);
              this.removeChunkFileInfo(chunkFileDetails.fileName);
            }
            break;
          case HttpEventType.Response:
            if (response?.ok) {
              chunkFileDetails.fileName = chunkFileDetails.fileName;
              this.fileDataUpload.fileChunks.push(chunkFileDetails);
              let fileInfoIndex = this.chunkFileInfo.findIndex(
                (fileInfo) => fileInfo.fileName == chunkFileDetails.fileName
              );
              this.chunkFileInfo[fileInfoIndex].uploadedChunkCount =
                this.chunkFileInfo[fileInfoIndex].uploadedChunkCount + 1;
              if (
                this.chunkFileInfo[fileInfoIndex].uploadedChunkCount ==
                this.chunkFileInfo[fileInfoIndex].totalChunkCount
              ) {
                this.uploadChunkComplete(chunkFileDetails.fileName, progress);
                this.unsubscribeUploadRequest(chunkFileDetails.fileName);
              }
            } else if (!response?.ok) {
              progress.status = "failed";
              this.unsubscribeUploadRequest(chunkFileDetails.fileName);
              this.removeChunkFileInfo(chunkFileDetails.fileName);
            }
            break;
        }
        this.updateProgress(chunkFileDetails.fileName, progress, response?.body); //Prakash changes
      });
    if (
      this.chunkUploadSubscription.filter((Subscription) => {
        return Subscription.fileName == chunkFileDetails.fileName;
      }).length > 0
    ) {
      this.chunkUploadSubscription.map((Subscription) => {
        if (Subscription.fileName == chunkFileDetails.fileName) {
          Subscription.uploadRequests.push(uploadSubscription);
        }
      });
    } else {
      const SubscriptionManager = {
        fileName: chunkFileDetails.fileName,
        uploadRequests: [uploadSubscription],
      };
      this.chunkUploadSubscription.push(SubscriptionManager);
    }
  }

  private removeChunkFileInfo(fileName: string) {
    let uploadCompleteFileIndex = this.chunkFileInfo.findIndex(
      (fileInfo) => fileInfo.fileName == fileName
    );
    if (uploadCompleteFileIndex > -1) {
      this.chunkFileInfo.splice(uploadCompleteFileIndex, 1);
    }
  }

  private unsubscribeUploadRequest(fileName: string) {
    let currentSubsIndex = -1;
    this.chunkUploadSubscription.forEach((subscription, index) => {
      if (subscription.fileName == fileName) {
        subscription.uploadRequests.forEach((request) => {
          request.unsubscribe();
        });
        subscription.uploadRequests = [];
        currentSubsIndex = index;
      }
    });
    if (currentSubsIndex > -1) {
      this.chunkUploadSubscription.splice(currentSubsIndex, 1);
    }
  }

  private isMultipleFilesPrintables(isSingle = false) {
    return isSingle
      ? this.value?.length > 0 && !this.disabled && !this.multiple
      : this.value?.length > 0 && !this.disabled && this.multiple;
  }

  private isSingleFilesPrintables() {
    return this.mode === "file" && this.value?.length === 1 && !this.multiple;
  }
  //Prakash changes
  private updateProgress(fileName: string, progress: any, postResponse: any) {
    let fileList = this.fileService.files.getValue();
    fileList.files.forEach((file) => {
      if (
        file.data.name == fileName &&
        (file?.progress?.value ?? 0) < (progress?.value ?? 0)
      ) {
        file.progress = progress;
        file.postResponse = postResponse;  //Prakash changes
      }
      this.fileService.add(file);
    });
  }

  private isErrorShow = (): boolean =>
    this.value?.length === 1 &&
    this.mode === "file" &&
    this.value[0]?.error &&
    !this.multiple &&
    !this.disabled;
}
