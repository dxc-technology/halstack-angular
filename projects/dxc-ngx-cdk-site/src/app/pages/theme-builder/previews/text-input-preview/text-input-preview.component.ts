import { Component, OnInit, ViewChild } from "@angular/core";
import { DxcTextInputComponent } from "@dxc-technology/halstack-angular";
import { of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";

@Component({
  selector: "app-new-input-text-preview",
  templateUrl: "./text-input-preview.component.html",
})
export class TextInputPreviewComponent implements OnInit {
  @ViewChild("dxcInputRef", { static: false })
  dxcInputRef: DxcTextInputComponent;

  constructor() {
    this.callbackFunc = this.callbackFunc.bind(this);
  }

  controlledValue = "c";

  errorMessage = "";

  passwordValue = "";

  numberValue = 0;

  minLength = 2;
  maxLength = 5;

  options: Array<any> = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands, The",
    "Central African Republic",
    "Chad",
    "Democratic Republic of the Congo",
    "Dominican Republic",
    "Dominica",
    "Denmark",
    "Djibouti",
  ];

  changeValue(event) {
    if (!event.value.includes("x")) {
      this.controlledValue = event.value;
    }
    console.log(event);
  }

  click() {
    console.log("click");
  }

  clickRef() {
    this.dxcInputRef.inputRef.nativeElement.focus();
  }
  callbackFunc(newValue) {
    console.log(newValue);
    const newOptions = this.options.filter((option) => {
      console.log(option);
      return option.toUpperCase().includes(newValue.toUpperCase());
    });
    return of(newOptions).pipe(
      switchMap((options) => of(options).pipe(delay(1000)))
    );
  }
  onBlur({ value, error }) {
    this.controlledValue = value;
  }

  onChange({ value, error }) {
    this.controlledValue = value;
  }

  ngOnInit(): void {}

  onChangePassword({ value, error }) {
    this.passwordValue = value;
  }

  onBlurPassword({ value, error }) {
    this.passwordValue = value;
  }

  onChangeNumber({ value, error }) {
    this.numberValue = value;
  }

  onBlurNumber({ value, error }) {
    this.numberValue = value;
  }
}
