import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-textarea-preview',
  templateUrl: './new-textarea-preview.component.html'
})
export class NewTextareaPreviewComponent implements OnInit {

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
