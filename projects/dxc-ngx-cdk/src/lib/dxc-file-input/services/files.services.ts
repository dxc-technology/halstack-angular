import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FileData } from "../interfaces/file.interface";
import { FilesData } from "../interfaces/files.interface";

@Injectable({
  providedIn: "root",
})
export class FilesService {
  constructor() {}

  public files: BehaviorSubject<FilesData> = new BehaviorSubject({
    files: [],
    event: null,
  });

  addFile(file: FileData) {
    const currentValue = this.files.value.files;
    const updatedValue = [...currentValue, file];
    this.files.next({
      files: updatedValue,
      event: "add",
    });
  }

  removeFile(file: FileData) {
    const array: Array<FileData> = this.files.value.files.filter((item) => {
      console.log(file);
      return item.data.name !== file.data.name;
    });
    this.files.next({
      files: array,
      event: "remove",
    });
  }
}
