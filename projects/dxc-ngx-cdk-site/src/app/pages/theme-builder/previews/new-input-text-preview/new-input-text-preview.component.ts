import { Component, OnInit, ViewChild } from "@angular/core";
import { DxcNewInputTextComponent } from "@dxc-technology/halstack-angular";

@Component({
  selector: "app-new-input-text-preview",
  templateUrl: "./new-input-text-preview.component.html",
})
export class NewInputTextPreviewComponent implements OnInit {

  @ViewChild("dxcInputRef", { static: false }) dxcInputRef: DxcNewInputTextComponent;

  constructor() {}

  controlledValue = "c";

  errorMessage = "";
  
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

  ngOnInit(): void {}
}
