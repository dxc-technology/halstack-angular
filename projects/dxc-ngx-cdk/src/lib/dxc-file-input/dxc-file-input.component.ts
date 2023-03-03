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
import { FileInputProperties, Space, Spacing } from "./dxc-file-input.types";
import { filemetadata } from './model/filemetadata';
import { chunkmetadata } from './model/chunkmetadata';
import { IfileuploadRequest, EventType } from "./services/fileupload.request.services";

@Component({
  selector: "dxc-file-input",
  templateUrl: "./dxc-file-input.component.html",
  providers: [CssUtils, FilesService],
})
export class DxcFileInputComponent implements OnChanges, OnInit {
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
  @Input('requests') requests: IfileuploadRequest = null;
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
  global_filehit: number = 0;
  global_chunkcount: number = 0;
  global_actualchunkcount: number = 0;
  filedataupload: filemetadata;
  GUID: string;
  fileEventType: EventType = EventType.PREUPLOAD;
  chunkresult: boolean;
  data: any;
  Postresp: any;
  //fileinfo: any;
  
  constructor(private utils: CssUtils, private service: FilesService) {
    this.service.files.subscribe(({ files, event }) => {
      if (event !== "reset" && (files.length || this.hasValue)) {
        this.data = files;
        this.hasShowError = this.isErrorShow();
        this.hasMultipleFiles = this.isMultipleFilesPrintables();
        this.hasSingleFile = this.isSingleFilesPrintables();
        this.callbackFile.emit(files);
        this.uploadEventType.emit(this.fileEventType);
      }
    });
  }

  ngOnInit() {
    this.id = this.id || uuidv4();
    this.value ? (this.hasValue = true) : (this.hasValue = false);
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
      this.service.files.next({ files: arr, event: "reset" });
      this.value.forEach((file) => {
        if (!file.error) {
          file.error = this.checkFileSize(file.data);
        }
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
    if (this.fileInputNative) {
      this.multiple
        ? this.fileInputNative.nativeElement.setAttribute("multiple", true)
        : this.fileInputNative.nativeElement.removeAttribute("multiple");
    }
  }

  checkFileSize(file: File) {
    if (file.size < this.minSize) {
      return "File size must be greater than min size.";
    }
    if (file.size > this.maxSize) {
      return "File size must be less than max size.";
    }
    return null;
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
        this.service.emptyArrayFiles();
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
        this.service.emptyArrayFiles();
      }
      this.getPreviewsFiles(event.target.files);
      this.processFiles(event.target.files);
      event.target.value = "";
    }
  }

    /**
   * File upload logic to send file as chunk and receive response.
   * @param event
   */
    processFiles(event) {
    // var len = event.length;
    // if(this.global_filehit == 0 && len > 0)
    // {
    //   this.files = event;
    //   this.UploadFile(this.files);
    // }
    //this.UploadFile(event);
    this.files=event;
    this.fileEventType = EventType.UPLOAD;
    for(let i=0;i<event.length;i++)
    {
      this.uploadChunkDoc(event[i])
    }
  }

  UploadFile(eventFiles) {
  //this.global_filehit = 1;
  // Array.from(eventFiles).map((file) => {
  //   this.uploadChunkDoc(file);
  // });
  this.uploadChunkDoc(eventFiles);
}
uploadChunkDoc(file) {
  let lastChunksize = 0;
  this.filedataupload = new filemetadata();
  this.GUID = uuidv4();
  this.global_actualchunkcount = 0;
  this.global_chunkcount = file.size % 1000000 == 0 ? file.size / 1000000 : Math.floor(file.size / 1000000) + 1;

  this.readFile(file, lastChunksize, this.uploadtoAPI.bind(this));
 }

 uploadtoAPI(filedata,file, lastChunksize, result) {
  lastChunksize = lastChunksize + 1000000;
  this.chunkresult = result;
  if(result) {
    //Add you logic what do you want after reading the file
      // this.upload(filedata).subscribe(resp => { 
      // //global_actualchunkcount++;
      // console.log(" Chunk Upload complete"); });
      this.uploads(filedata);
      this.readFile(file, lastChunksize, this.uploadtoAPI.bind(this));

  }
  else if(this.global_actualchunkcount == this.global_chunkcount)
  {
    setTimeout(() => {
      this.uploadcomplete(this.filedataupload).then(resp => { 
        this.data[0].postresponse = resp;
        this.fileEventType = EventType.POSTUPLOAD;
        //let data = this.getPreview(file);
        this.data[0].eventtype = this.fileEventType;
        this.callbackFile.emit(this.data);
        alert("File Upload completed"); });
    }, 3000);
    //this.uploadcomplete(this.filedataupload);
  }
 }

 readFile(file,lastChunksize: number, callback) {
  let filedata = new chunkmetadata();
  filedata.fileName = this.global_actualchunkcount + "-" + this.GUID + file.name;
   filedata.fileSize = file.size;
   filedata.fileType = file.type;
   this.filedataupload.GUID = this.GUID;
  var chunk = file.slice(lastChunksize,lastChunksize+1000000);
  if(chunk.size !=0) {
    let fileReader = new FileReader();
    fileReader.onloadend= (result)=>{
      // Store base64 encoded representation of file
    filedata.fileAsBase64 = fileReader.result.toString();
    this.global_actualchunkcount++;
    this.filedataupload.fileNames.push(filedata.fileName);
    return callback(filedata,file,lastChunksize,fileReader.result)
    }
    fileReader.readAsDataURL(chunk);
  }else {
   return callback(filedata,file,lastChunksize,false);
  }
 }
 public async uploads(theFile: chunkmetadata) 
 {
   const response = await fetch(this.requests.uploadrequest.url, {
     method: 'POST',
     body: JSON.stringify(theFile),
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json',
       clientId: '0',
       'Authorization': 'bearer '+ sessionStorage.session
     }
  });
  if (!response.ok) {
   throw new Error(`Error! status: ${response.status}`);
 }

 // const result: CreateUserResponse
//  const result = (await response.json());

//  console.log('result is: ', JSON.stringify(result, null, 4));

//  return result;
 }
  public async uploadcomplete(theFiles: filemetadata) {
    const response = await fetch(this.requests.uploadcompleterequest.url, {
      method: 'POST',
      body: JSON.stringify(theFiles),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        clientId: '0',
        'Authorization': 'bearer '+ sessionStorage.session
      }
   });
   if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
 
  // const result: CreateUserResponse
   const result = (await response.json());
 
  //console.log('result is: ', JSON.stringify(result, null, 4));
 
   return result;
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
          eventtype: this.fileEventType,
          postresponse: this.Postresp
        };
        this.service.addFile(fileToAdd);
      } else {
        let fileToAdd: FileData = {
          data: file,
          image: event.target["result"],
          error: this.checkFileSize(file),
          eventtype: this.fileEventType,
          postresponse: this.Postresp
        };
        this.service.addFile(fileToAdd);
      }
    };
  }

  private isMultipleFilesPrintables(isSingle = false) {
    return isSingle
      ? this.value?.length > 0 && !this.disabled && !this.multiple
      : this.value?.length > 0 && !this.disabled && this.multiple;
  }

  private isSingleFilesPrintables() {
    return this.mode === "file" && this.value?.length === 1 && !this.multiple;
  }

  private isErrorShow = (): boolean =>
    this.value?.length === 1 &&
    this.mode === "file" &&
    this.value[0]?.error &&
    !this.multiple &&
    !this.disabled;

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
