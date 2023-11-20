import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileData, FilesData } from '../model/file-info';

@Injectable({
  providedIn: 'root'
})
export class FileAddService {

  constructor() { }

  public files: BehaviorSubject<FilesData> = new BehaviorSubject({
    files: new Array<FileData>(),
    event: null,
  });

  add(file: FileData) {
    // Check if exist
    const existingFile = this.files.value.files.filter(
      (item) => item.data.name === file.data.name
    );
    let updatedValue: FileData[];

    if (existingFile.length > 0) {
      updatedValue = this.files.value.files.map((item) => {
        if (item.data.name === file.data.name) {
          item.data = file.data;
          item.error = file.error;
        }
        return item;
      });
    } else {
      updatedValue = [...this.files.value.files, file];
    }

    this.files.next({
      files: updatedValue,
      event: "add",
    });
  }

  remove(file: FileData) {
    const array: Array<FileData> = this.files.value.files.filter((item) => {
      return item.data.name !== file.data.name;
    });

    this.files.next({
      files: array,
      event: "remove",
    });
  }

  removeAll() {
    this.files.next({
      files: [],
      event: "",
    });
  }
}
