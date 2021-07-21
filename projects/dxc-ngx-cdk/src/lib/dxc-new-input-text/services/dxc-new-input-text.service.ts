import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DxcNewInputTextService {
  constructor() {}

  public onFocused: BehaviorSubject<number> = new BehaviorSubject(-1);
  public filteredOptions: BehaviorSubject<Array<string>> = new BehaviorSubject(
    null
  );

  public setSelectedIndex(selected): void {
    this.onFocused.next(selected);
  }

  public setFilteredOptions(array): void {
    this.filteredOptions.next(array);
  }

  public onArrowDown(): void {
    if (this.onFocused.value < this.filteredOptions.value.length - 1) {
      this.onFocused.next(this.onFocused.value + 1);
    } else if (this.onFocused.value === this.filteredOptions.value.length - 1) {
      this.onFocused.next(0);
    }
  }

  public onArrowUp(): void {
    if (this.onFocused.value > 0) {
      this.onFocused.next(this.onFocused.value - 1);
    } else if (this.onFocused.value === 0) {
      this.onFocused.next(this.filteredOptions.value.length - 1);
    } else if (this.onFocused.value < 0) {
      this.onFocused.next(this.filteredOptions.value.length - 1);
    }
  }

  // autocompleteFunction(value) {
  //   if (
  //     value !== undefined &&
  //     this.autocompleteOptions &&
  //     Array.isArray(this.autocompleteOptions)
  //   ) {
  //     const inputValue = value.toLowerCase();
  //     this.options = this.autocompleteOptions.filter((option) =>
  //       option.toLowerCase().includes(inputValue)
  //     );
  //   } else if (
  //     this.autocompleteOptions &&
  //     typeof this.autocompleteOptions === "function"
  //   ) {
  //     this.loading.next(true);
  //     this.isError.next(false);
  //     this.autocompleteOptions(value).subscribe(
  //       (autocompleteOptionsList) => {
  //         this.options = autocompleteOptionsList;
  //         this.ref.markForCheck();
  //         this.loading.next(false);
  //       },
  //       (err) => {
  //         this.isError.next(true);
  //         this.loading.next(false);
  //         this.ref.markForCheck();
  //       }
  //     );
  //   } else if (this.autocompleteOptions) {
  //     this.isError.next(true);
  //     this.loading.next(false);
  //     this.ref.markForCheck();
  //   }
  // }
}
