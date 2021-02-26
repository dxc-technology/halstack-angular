import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TabService {
  public iconPosition: BehaviorSubject<string> = new BehaviorSubject(undefined);

  constructor() {}
}
