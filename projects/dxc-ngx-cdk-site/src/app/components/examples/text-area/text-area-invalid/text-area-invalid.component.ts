import { Component, OnInit } from "@angular/core";

@Component({
  selector: "text-area-invalid",
  templateUrl: "./text-area-invalid.component.html",
  styleUrls: ["./text-area-invalid.component.scss"],
})
export class TextAreaInvalidComponent implements OnInit {
  
  inputValue: string;

  constructor() {}

  ngOnInit() {}

  onChange(value: string) {
    this.inputValue = value;
  }
}
