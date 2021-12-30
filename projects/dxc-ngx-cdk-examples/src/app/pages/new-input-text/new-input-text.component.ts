import { Component, OnInit, ViewChild } from "@angular/core";
import { DxcTextInputComponent } from "@dxc-technology/halstack-angular";
import { of, throwError } from "rxjs";
import { switchMap, delay } from "rxjs/operators";

@Component({
  selector: "new-input-text",
  templateUrl: "./new-input-text.component.html",
})
export class NewInpuTextComponent implements OnInit {
  @ViewChild("dxcInputRef", { static: false })
  dxcInputRef: DxcTextInputComponent;

  constructor() {}

  controlledValue = "Example text";

  suggestionsValue = "";

  suggestionsFValue = "";

  numberValue = "12";

  errorMessage = "";

  numberOnChange(event) {
    this.numberValue = event;
  }

  lengthLimit = { min: 5, max: 10 };

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

  showError(event) {
    this.errorMessage = event.error;
    console.log(event.error);
  }

  ngOnInit(): void {
    this.callbackFunc = this.callbackFunc.bind(this);
  }

  //
  onBlur({ value, error }) {
    this.controlledValue = value;
    this.errorMessage = error ? "BLUR error" : null;
  }

  onChange(value) {
    this.controlledValue = value;
  }

  onChangeSuggestions(value) {
    console.log("onChangeSuggestions value", value);
    this.suggestionsValue = value;
  }

  onChangeFSuggestions(value) {
    this.suggestionsFValue = value;
  }

  callbackFunc(newValue) {
    const newOptions = this.options.filter((option) =>
      option.toUpperCase().includes(newValue.toUpperCase())
    );
    return of(newOptions).pipe(
      switchMap((options) => of(options).pipe(delay(1000)))
    );
  }

  errorCallbackFunc() {
    return of(42).pipe(
      delay(3000),
      switchMap(() => throwError("err"))
    );
  }
}
