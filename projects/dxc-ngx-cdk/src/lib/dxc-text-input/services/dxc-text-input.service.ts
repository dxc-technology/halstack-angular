import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DxcTextInputService {
  constructor() {}

  public visualFocused: BehaviorSubject<number> = new BehaviorSubject(-1);
  public activeOption: BehaviorSubject<number> = new BehaviorSubject(-1);
  public filteredOptions: BehaviorSubject<Array<string>> = new BehaviorSubject(
    null
  );

  public setSelectedIndex(selected): void {
    this.visualFocused.next(selected);
  }

  public setFilteredOptions(array): void {
    this.filteredOptions.next(array);
  }

  public onArrowDown(): void {
    if (
      this.filteredOptions &&
      this.filteredOptions.value &&
      this.visualFocused.value < this.filteredOptions.value.length - 1
    ) {
      this.visualFocused.next(this.visualFocused.value + 1);
    } else if (
      this.filteredOptions &&
      this.filteredOptions.value &&
      this.visualFocused.value === this.filteredOptions.value.length - 1
    ) {
      this.visualFocused.next(0);
    }
    if (this.activeOption.value > 0) {
      this.activeOption.next(-1);
    }
  }

  public onArrowUp(): void {
    if (this.visualFocused.value > 0) {
      this.visualFocused.next(this.visualFocused.value - 1);
    } else if (
      this.filteredOptions &&
      this.filteredOptions.value &&
      this.visualFocused.value === 0
    ) {
      this.visualFocused.next(this.filteredOptions.value.length - 1);
    } else if (
      this.filteredOptions &&
      this.filteredOptions.value &&
      this.visualFocused.value < 0
    ) {
      this.visualFocused.next(this.filteredOptions.value.length - 1);
    }
    if (this.activeOption.value > 0) {
      this.activeOption.next(-1);
    }
  }
}
