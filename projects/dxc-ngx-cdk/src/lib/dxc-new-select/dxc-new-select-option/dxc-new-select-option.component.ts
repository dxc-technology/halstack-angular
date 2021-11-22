import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Option } from "../interfaces/option.interface";
import { SelectService } from "../services/select.service";

@Component({
  selector: "dxc-new-select-option",
  templateUrl: "./dxc-new-select-option.component.html",
})
export class DxcNewSelectOptionComponent implements OnInit {
  @Input() option: Option;
  @Input() multiple: boolean;
  @Input() checked: boolean;

  @Output() optionClick: EventEmitter<any> = new EventEmitter();
  @Output() optionMouseDown: EventEmitter<any> = new EventEmitter();

  constructor(public service: SelectService) {}

  ngOnInit(): void {}

  handleOptionClick(event) {
    this.optionClick.emit(event);
  }

  handleOptionMouseDown(event) {
    this.optionMouseDown.emit(event);
  }

  isFocused(){
    return this.service.visualFocused.getValue().toString() === this.option.value;
  }

  public isValueSelected = (value): boolean =>
    this.service.selectedValues.getValue() &&
    this.service.selectedValues.getValue().includes(value);
}
