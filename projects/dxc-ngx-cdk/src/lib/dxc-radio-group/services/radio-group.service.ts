import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Option } from "../dxc-radio-group.types";

@Injectable({
  providedIn: "root",
})
export class RadioGroupService {

  public optionList: BehaviorSubject<Option[]> = new BehaviorSubject(null);

  public selectedValue: BehaviorSubject<string> = new BehaviorSubject(undefined);
  
  public newValue: BehaviorSubject<string> = new BehaviorSubject(undefined);
  
}
