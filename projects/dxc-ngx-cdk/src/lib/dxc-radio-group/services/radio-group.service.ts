import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { RadioItem } from "../dxc-radio-group.types";

@Injectable({
  providedIn: "root",
})
export class RadioGroupService {
  public optionList: BehaviorSubject<RadioItem[]> = new BehaviorSubject(null);

  public selectedValue: BehaviorSubject<string> = new BehaviorSubject(
    undefined
  );

  public indexToFocus: BehaviorSubject<number> = new BehaviorSubject(undefined);

  public newValue: BehaviorSubject<string> = new BehaviorSubject(undefined);

  public firstTabbedFocus: boolean = false;
}
