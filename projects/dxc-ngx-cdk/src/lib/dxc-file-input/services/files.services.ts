import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FileData } from "../interfaces/file.interface";

@Injectable({
  providedIn: "root",
})
export class FilesService {
  constructor() {}

  public files: BehaviorSubject<Array<FileData>> = new BehaviorSubject([]);

  addFile(file: FileData) {
    const currentValue = this.files.value;
    const updatedValue = [...currentValue, file];
    this.files.next(updatedValue);
  }

  removeFile(file: FileData) {
    const array: Array<FileData> = this.files.getValue();
    array.splice(array.indexOf(file), 1);
    this.files.next(array);
  }
}
