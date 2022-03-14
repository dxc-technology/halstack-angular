import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Option } from "../dxc-radio-group.types";

@Injectable({
  providedIn: "root",
})
export class RadioGroupService {
  public optionList: BehaviorSubject<Option[]> = new BehaviorSubject(null);

  public selectedValue: BehaviorSubject<string> = new BehaviorSubject(
    undefined
  );

  public indexToFocus: BehaviorSubject<number> = new BehaviorSubject(undefined);

  public newValue: BehaviorSubject<string> = new BehaviorSubject(undefined);

  public firstTabbedFocus: boolean = false;

  // public keyboardHandler(event, defaultFocusOption) {
  //   if (event.key === "ArrowDown" || event.key === "ArrowRight") {
  //     event.preventDefault();
  //     if (defaultFocusOption === this.optionList.value.length - 1) {
  //       this.indexToFocus.next(0);
  //       return 0;
  //     } else {
  //       this.indexToFocus.next(defaultFocusOption++);
  //       return defaultFocusOption++;
  //     }
  //   }
  //   if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
  //     event.preventDefault();
  //     if (defaultFocusOption === 0) {
  //       this.indexToFocus.next(this.optionList.value.length - 1);
  //       return this.optionList.value.length - 1;
  //     } else {
  //       this.indexToFocus.next(defaultFocusOption--);
  //       return defaultFocusOption--;
  //     }
  //   }
  // }
}
