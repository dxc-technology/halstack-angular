import {
  Component,
  Input,
  OnChanges,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "dxc-upload",
  templateUrl: "./dxc-upload.component.html",
  styleUrls: ["./dxc-upload.component.scss"]
})
export class DxcUploadComponent implements OnChanges {
  private files = [];

   uploadedFiles = [];

  newFile = new EventEmitter<any>();

  @Input() public uploadCallback: Function;

  public ngOnInit() {}

  public ngOnChanges(): void {}

  addFiles($event) {
    const aux = this;
    $event.forEach(file => {
      this.getPreview(file);
    });
  }

  getPreview(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = event => {
      if (!file.type.includes("image")) {
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
      .filter(function(file) {
        return file.status === "pending";
      })
      .map(function(file) {
        const fileInfo = {};
        fileInfo["name"] = file.fileData.name;
        fileInfo["format"] = file.fileData.type;
        fileInfo["image"] = file.image;
        fileInfo["removeFile"] = function() {
          const index = aux.files.indexOf(file, 0);
          if (index > -1) {
            aux.files.splice(index, 1);
          }
        };
        return fileInfo;
      });
  }

  getUploadedFiles() {
    const aux = this;
    this.uploadedFiles = this.files
      .filter(function(file) {
        return file.status !== "pending";
      })
      .map(function(file) {
        const fileInfo = {};
        fileInfo["name"] = file.fileData.name;
        fileInfo["format"] = file.fileData.type;
        fileInfo["status"] = file.status;
        fileInfo["errorMessage"] = file.errorMessage;
        return fileInfo;
      });
  }

  getSuccessfullyUploadedFiles() {
    return this.files.filter(function(file) {
      return file.status === "success";
    }).length;
  }

  toUploadVisibility() {
    const pending = this.files.filter(function(file) {
      return file.status === "pending";
    });

    if (pending.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  uploadedVisibility() {
    const pending = this.files.filter(function(file) {
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
    this.files.forEach(file => {
      if (file.status === "pending") {
        file.status = "processing";
        this.uploadCallback(file)
          .then(() => {
            file.status = "success";
            aux.getUploadedFiles()
          })
          .catch(err => {
            file.status = "error";
            file.errorMessage = err;
            aux.getUploadedFiles()
          })
          .finally();
        this.getUploadedFiles();
      }
    });
  }
}
