import { Component, OnInit, ViewChild } from '@angular/core';
import { DxcNewInputTextComponent } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'new-input-text',
  templateUrl: './new-input-text.component.html'
})
export class NewInpuTextComponent implements OnInit {

  @ViewChild("dxcInputRef", { static: false }) dxcInputRef: DxcNewInputTextComponent;

  controlledValue = "c";

  numberValue = "12";

  errorMessage = "";

  numberOnChange(event) {
    this.numberValue = event.value;
  }

  lengthLimit={min: 2, max: 5}

  options: Array<any> = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
  ];

  changeValue(event) {
    if (!event.includes("x")) {
      this.controlledValue = event;
    }
  }

  click() {
    console.log("click");
  }

  clickRef() {
    this.dxcInputRef.inputRef.nativeElement.focus();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
