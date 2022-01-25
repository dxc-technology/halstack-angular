import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from "@angular/core";
import { MatMenuItem } from "@angular/material/menu";
import { DropdownService } from "../services/dropdown.service";

@Component({
  selector: "dxc-dropdown-option",
  templateUrl: "./dxc-dropdown-option.component.html",
})
export class DxcDropdownOptionComponent implements OnChanges {
  /**
   * Value of the option.
   */
  @Input() value: string;
  /**
   * Label displayed in the option.
   */
  @Input() label: string;

  @ViewChild(MatMenuItem) menuItem: MatMenuItem;

  constructor(private service: DropdownService) {
    this.service.items.push(this);
  }

  public ngOnChanges(): void {}

  setFocus() {
    this.menuItem?.focus();
  }

  arrowKey($event) {
    if ($event.keyCode === 40 || $event.keyCode === 38) {
      $event.preventDefault();
      const direction =
        $event.keyCode === 38
          ? "previous"
          : $event.keyCode === 40
          ? "next"
          : "";
      this.service.changeFocus(direction, this);
    }
  }

  selectedOption() {
    this.service.setSelected(this.value);
  }
}
