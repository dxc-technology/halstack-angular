import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Option } from "../dxc-radio-group.types";

@Injectable({
  providedIn: "root",
})
export class RadioGroupService {
  constructor() {}

  public allOptions: BehaviorSubject<Option[]> = new BehaviorSubject(null);
  
}
