import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DxcNewInputTextService {
  constructor() {}

  public selected: BehaviorSubject<number> = new BehaviorSubject(-1);
  // public options: BehaviorSubject<Array<any>> = new BehaviorSubject(null);
  // public filteredOptions: BehaviorSubject<number> = new BehaviorSubject(null);

  private optionsLength: number = -1;

  public setSelectedIndex(selected): void {
    this.selected.next(selected);
  }

  public setOptionsLength(length): void {
    this.optionsLength = length;
  }

  // public setOptions(selected): void {
  //   this.options.next(selected);
  // }

  public onArrowDown(): void {
    if (this.selected.value < this.optionsLength - 1) {
      this.selected.next(this.selected.value + 1);
    }
    console.log("down: ", this.selected.value);
  }

  public onArrowUp(): void {
    if (this.selected.value > 0) {
      this.selected.next(this.selected.value - 1);
    }
    console.log("up: ", this.selected.value);
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
