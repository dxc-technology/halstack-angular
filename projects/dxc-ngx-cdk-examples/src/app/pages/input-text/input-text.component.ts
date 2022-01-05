import { Component } from "@angular/core";
import { of, Subject, BehaviorSubject } from "rxjs";
import { delay } from "rxjs/operators";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.scss"]
})
export class InputTextComponent {
  inputValue = "Testing";

  options = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
  filteredOptions = new BehaviorSubject(this.options);
  error = "true";

  constructor() {
    this.autocompleteAsync = this.autocompleteAsync.bind(this);
  }

  onBlur(value) {
    console.log("Blur event " + value);
  }

  onChangeControlled(value) {
    console.log(value);
  }

  onChange(value) {
    this.inputValue = value;
  }

  onChangeUncontrolled(value) {
    console.log("Change uncontrolled event " + value);
  }

  onPrefixClick() {
    console.log("onPrefixClick event");
  }

  onSuffixClick() {
    console.log("onSuffixClick Clicked");
  }

  autocompleteAsync(inputValue) {
    this.filteredOptions.next(this.options.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    ));
    return this.filteredOptions.pipe(
      switchMap(options => of(options).pipe(delay(1000)))
    );
  }
}
