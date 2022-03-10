import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-radio-preview",
  templateUrl: "./radio-preview.component.html",
})
export class RadioPreviewComponent implements OnInit {
  checked1: boolean = true;
  checked2: boolean = false;
  checked3: boolean = false;

  disabledCheck: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  value = "1";
  handleOnChange($event) {
    this.value = $event;
  }

  onChange1(event) {
    this.changeChecked(event, !event, !event);
  }
  onChange2(event) {
    this.changeChecked(!event, event, !event);
  }
  onChange3(event) {
    this.changeChecked(!event, !event, event);
  }

  options = [
    { value: "1", label: "1", disabled: false },
    { value: "2", label: "2", disabled: false },
    { value: "3", label: "3", disabled: false },
    { value: "4", label: "4", disabled: false },
  ];

  private changeChecked(checked1, checked2, checked3) {
    this.checked1 = checked1;
    this.checked2 = checked2;
    this.checked3 = checked3;
  }
}
