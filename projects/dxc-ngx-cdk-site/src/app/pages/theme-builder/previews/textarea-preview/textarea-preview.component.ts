import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea-preview',
  templateUrl: './textarea-preview.component.html'
})
export class TextareaPreviewComponent implements OnInit {

  pattern = '^.*(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!&$%&? "]).*$';
  value = "test";

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(event){
    console.log("onBlur event:", event);
  }

  onChange(event){
    // this.value = event;
    console.log("onChange event:", event);
  }

}
