import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DropdownService {
  constructor() {}

  public selected: BehaviorSubject<any> = new BehaviorSubject(null);

  public items = [];

  public focusFirstItem(): void {
    this.items[0]?.setFocus();
  }

  public changeFocus(direction, focusedItem): void {
    const index = this.items.indexOf(focusedItem);
    if (
      !(index === 0 && direction === "previous") ||
      !(index === this.items.length - 1 && direction === "next")
    ) {
      direction === "previous"
        ? this.items[index - 1]?.setFocus()
        : this.items[index + 1]?.setFocus();
    }
  }

  public setSelected(selected): void {
    this.selected.next(selected);
  }
}
