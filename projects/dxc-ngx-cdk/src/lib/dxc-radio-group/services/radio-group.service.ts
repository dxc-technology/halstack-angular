import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Option } from "../dxc-radio-group.types";

@Injectable({
  providedIn: "root",
})
export class RadioGroupService {

  public optionList: BehaviorSubject<Option[]> = new BehaviorSubject(null);

  public selectedValue: BehaviorSubject<string> = new BehaviorSubject(undefined);

  public indexToFocus: BehaviorSubject<number> = new BehaviorSubject(undefined);
  
  public newValue: Subject<string> = new Subject();
  
}
