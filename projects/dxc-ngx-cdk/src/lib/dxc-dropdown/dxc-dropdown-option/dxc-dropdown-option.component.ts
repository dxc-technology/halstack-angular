import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { DropdownService } from '../services/dropdown.service';

@Component({
  selector: "dxc-dropdown-option",
  templateUrl: "./dxc-dropdown-option.component.html",
})
export class DxcDropdownOptionComponent implements OnChanges {
  @Input() public value;
  @Input() public label: string;
  
  constructor(private service: DropdownService) {}

  public ngOnChanges(): void {
  }

  selectedOption() {
      this.service.setSelected(this.value);
  }
}
