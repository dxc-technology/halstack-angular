import { BehaviorSubject, Observable } from "rxjs";
import { FilesData, FileData } from "./file-info";
import { HttpEvent, HttpHeaders } from "@angular/common/http";

export interface IFileService {
  upload(
    url: string,
    formParams: any,
    headers: HttpHeaders
  ): Observable<HttpEvent<Object>>;
  uploadComplete(url: string, files: any): Observable<Object>;
  delete(url: string, files: any): Observable<Object>;
  uploadId(url: string, headers?: HttpHeaders): Observable<Object>;

}
