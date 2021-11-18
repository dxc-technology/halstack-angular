import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-select',
  templateUrl: './new-select-preview.component.html'
})
export class NewSelectPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event){
    // console.log("onchange:", event);
  }

}
