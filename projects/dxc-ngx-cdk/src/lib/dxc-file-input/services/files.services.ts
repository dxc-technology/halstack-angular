import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FileData } from "../model/file-info";
import { FilesData } from "../model/file-info";
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFileService } from "../model/IFileService";

@Injectable({
  providedIn: "root",
})
export class FilesService implements IFileService {
  constructor(private http: HttpClient) {}
  uploadComplete(url: string, files: any): Observable<Object> {
    return this.http.post(url, {
      headers: { "Content-Type": "multipart/form-data" },
      body: JSON.stringify(files),
    });
  }
  delete(url: string, files: any): Observable<Object> {
    return this.http.delete(url, {
      headers: { "Content-Type": "multipart/form-data" },
      body: JSON.stringify(files),
    });
  }

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

  upload(
    url: string,
    formParams: any,
    headers: HttpHeaders
  ): Observable<HttpEvent<Object>> {
    return this.http.post(url, formParams, {
      headers,
      observe: "events",
      reportProgress: true,
    });
  }

  

  uploadId(url: string, headers: HttpHeaders): Observable<Object> {
    return this.http.get(url, { headers });
  }
}
