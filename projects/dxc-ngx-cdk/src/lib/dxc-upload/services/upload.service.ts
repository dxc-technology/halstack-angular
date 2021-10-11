import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  public success: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public errorMessage: BehaviorSubject<string> = new BehaviorSubject("");

  public setSuccess(newValue): void {
    this.success.next(newValue);
  }

  public setErrorMessage(newValue): void {
    this.errorMessage.next(newValue);
  }

}