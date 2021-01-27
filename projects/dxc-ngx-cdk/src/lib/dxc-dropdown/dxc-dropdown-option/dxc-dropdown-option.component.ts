import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: "dxc-dropdown-option",
  templateUrl: "./dxc-dropdown-option.component.html",
})
export class DxcDropdownOptionComponent implements OnChanges {
  @Output() public onSelectOption: EventEmitter<any> = new EventEmitter<any>();
  @Input() public value;
  
  constructor() {}

  public ngOnChanges(): void {
  }

  selectedOption() {
      this.onSelectOption.emit(this.value);
  }
}
